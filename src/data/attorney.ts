export const attorneyProfile = {
  name: "Vishal Kumar Rai",
  role: "Counsel for the Petitioner",
  positioning:
    "Focused, responsive legal counsel for individuals and businesses navigating high-stakes matters.",
  bio: "Advocate Vishal Kumar Rai provides clear, practical representation with a direct focus on each client's objectives. His practice is built around careful preparation, responsive communication, and advocacy tailored to the facts of every matter.",
  philosophy:
    "Every client deserves to understand their options and feel prepared for the next step. The goal is straightforward advice, disciplined preparation, and representation that keeps the client's interests at the centre.",
  barAdmissions: ["India"],
  serviceAreas: ["New Delhi", "Lucknow", "Uttar Pradesh"],
  addresses: [
    "A-247, Second Floor, A Block, Defence Colony, New Delhi-110023",
    "3F-11, Vijay Tower, Vikrant Khand, Gomti Nagar, Lucknow, Uttar Pradesh-226010",
  ],
  phoneNumbers: ["+91-9650682586", "+91-9873880107"],
  email: "advocatevishalrai@gmail.com",
  image: "/assets/images/image.png",
} as const;

export type AttorneyProfile = typeof attorneyProfile;
