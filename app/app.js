import { useRouter } from "next/router";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <div>holis</div>
      </motion.div>
    </AnimatePresence>
  );
};
