export const attorneyProfile = {
  name: "Vishal Kumar Rai",
  role: "Independent Legal Counsel | Advocate, Supreme Court of India",
  positioning:
    "Focused Counsel | Clear Advice | Steady Advocacy",
  bio: "Advocate Vishal Kumar Rai is an independent legal counsel with over six years of experience spanning Corporate and Commercial Litigation, Corporate Advisory, Employment and Labour Laws, Regulatory Compliance, Insolvency, Arbitration, and Contractual Risk Management. He represents a varied client base across Delhi, Noida, Lucknow, and Patna, supported by a professional network extending across India. Alongside his independent practice, he serves as Legal Counsel - Litigation & General Corporate on a retainership basis with Chetu India Private Limited and as Legal Advisor on a retainership basis with Nuvanta Infradevelopers Private Limited. His practice combines rigorous litigation strategy with commercially focused advice, helping clients understand legal exposure, protect their interests, and make informed business decisions.",
  philosophy:
    "Every client deserves to understand their options and feel prepared for the next step. The goal is straightforward advice, disciplined preparation, and representation that keeps the client's interests at the centre.",
  barAdmissions: ["India"],
  serviceAreas: ["New Delhi", "Noida", "Lucknow", "Patna"],
  addresses: [
    "A-247, Second Floor, Defence Colony, New Delhi-110024",
    "3F-11, Vijay Tower, Vikrant Khand, Gomti Nagar, Lucknow-226010",
  ],
  memberships: [
    "Supreme Court Bar Association (SCBA)",
    "Bar Council of Delhi (BCD)",
    "New Delhi Bar Association (NDBA)",
  ],
  phoneNumbers: ["+91-9650682586", "+91-9873880107"],
  email: "office@vishalkumarrai.in",
  image: "/assets/images/VishalKumarRai.jpeg",
} as const;

export type AttorneyProfile = typeof attorneyProfile;
