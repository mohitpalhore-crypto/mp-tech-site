import { motion } from "framer-motion";

export default function Portfolio() {
  const items = ["Landing Page", "Business Website", "E-commerce"];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Portfolio</h2>

        <div className="row">
          {items.map((item, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="portfolio-box"
              >
                {item}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
