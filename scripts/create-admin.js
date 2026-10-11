// scripts/create-admin.js
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Set MONGODB_URI');

  const email = process.env.ADMIN_EMAIL || 'admin@example.com';
  const pass = process.env.ADMIN_PASS || 'ChangeMe123!';

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('aklegal');

  const existing = await db.collection('users').findOne({ email: email.toLowerCase() });
  if (existing) {
    console.log('Admin already exists:', existing.email);
    await client.close();
    return;
  }

  const passwordHash = await bcrypt.hash(pass, 10);
  const res = await db.collection('users').insertOne({
    email: email.toLowerCase(),
    passwordHash,
    role: 'admin',
    createdAt: new Date(),
  });

  console.log('Created admin user id:', res.insertedId.toString());
  console.log('Email:', email);
  console.log('Password:', pass);
  await client.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});