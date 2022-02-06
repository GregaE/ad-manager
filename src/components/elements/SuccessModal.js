import { motion } from "framer-motion"
import './../../styles/index.css';

function SuccessModal({ content }) {
  return (
    <motion.div
      className="SuccessModal"
      initial={{ opacity: 1, y: -400 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", delay: 0.5, duration: 0.7 }}
    >
      <img src="/assets/success-svg.svg" alt="success-tick"/>
      {content}
    </motion.div>
  );
}

export default SuccessModal;