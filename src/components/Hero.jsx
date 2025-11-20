import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center text-white">
      <div className="container text-center">

        <motion.h1 
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="fw-bold display-4"
        >
          Transforming Ideas into Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="lead mb-4"
        >
          MP Tech Solutions — Websites, Marketing & Growth.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary btn-lg"
        >
          Get Started
        </motion.a>

      </div>
    </section>
  );
}
