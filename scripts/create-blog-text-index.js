#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { MongoClient } = require('mongodb')

// Try dotenv first (if installed), otherwise fall back to reading .env files
try {
  require('dotenv').config()
} catch (err) {
  const loadEnvFile = (p) => {
    try {
      const content = fs.readFileSync(p, 'utf8')
      content.split(/\n|\r\n/).forEach(line => {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) return
        const idx = trimmed.indexOf('=')
        if (idx === -1) return
        const key = trimmed.slice(0, idx).trim()
        const val = trimmed.slice(idx + 1).trim().replace(/^"|"$/g, '')
        if (!(key in process.env)) process.env[key] = val
      })
      return true
    } catch (e) {
      return false
    }
  }

  const repoRoot = path.resolve(__dirname, '..')
  loadEnvFile(path.join(repoRoot, '.env.local')) || loadEnvFile(path.join(repoRoot, '.env'))
}

const uri = process.env.MONGODB_URI
if (!uri) {
  console.error('MONGODB_URI environment variable is not set.')
  process.exit(1)
}

async function run() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const dbName = process.env.MONGODB_DB || 'aklegal'
    const db = client.db(dbName)
    console.log('Connected to DB:', dbName)

    const result = await db.collection('blogs').createIndex(
      { title: 'text', content: 'text', category: 'text' },
      { name: 'BlogTextIndex', default_language: 'english' }
    )

    console.log('Created text index:', result)
  } catch (err) {
    console.error('Error creating text index:', err)
    process.exitCode = 1
  } finally {
    await client.close()
  }
}

run()
