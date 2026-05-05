import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
