import { motion } from "framer-motion";

function MotionUp({ ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    ></motion.div>
  );
}

export { MotionUp };