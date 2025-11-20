import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-5 dark-section text-white">
      <div className="container text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="fw-bold mb-4"
        >
          Contact Us
        </motion.h2>

        <p>Email: support@mptech.com</p>
        <p>Phone: +91 9876543210</p>

        <motion.a
          href="https://wa.me/919876543210"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="btn btn-success mt-3"
        >
          WhatsApp Us
        </motion.a>

      </div>
    </section>
  );
}
