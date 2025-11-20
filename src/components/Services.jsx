import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container text-center">

        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="fw-bold mb-4"
        >
          Our Services
        </motion.h2>

        <div className="row">

          {[
            { title: "Web Development", text: "Modern responsive business websites." },
            { title: "Digital Marketing", text: "Social media, SEO & paid ads." },
            { title: "Software Solutions", text: "Custom CRM, ERP & Automation." }
          ].map((service, i) => (
            <motion.div 
              className="col-md-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              key={i}
            >
              <div className="service-card shadow">
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
