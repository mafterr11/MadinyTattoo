"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Enter-only cross-fade, keyed on the route.
 *
 * This deliberately does NOT use AnimatePresence with mode="wait". The App
 * Router swaps `children` inside the same DOM node rather than unmounting the
 * old tree, so the exit animation would run to `opacity: 0` and the entrance
 * would never fire — leaving every navigated-to page rendered but invisible
 * until a hard reload. Changing the `key` remounts the node instead, which
 * always replays `initial` -> `animate`.
 */
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
