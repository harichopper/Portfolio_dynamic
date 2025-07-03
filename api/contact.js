import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await mongoose.connect(MONGO_URI);
      const contact = new Contact(req.body);
      await contact.save();
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Failed to save" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
