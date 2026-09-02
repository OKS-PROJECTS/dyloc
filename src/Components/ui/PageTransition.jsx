import { motion } from 'framer-motion'
import { useReducedMotion } from 'oks-ui/motion'

/** Signature route transition — a short keyed fade + rise on navigation.
 *  Honours prefers-reduced-motion (oks-ui/motion). */
export function PageTransition({ children }) {
  const reduce = useReducedMotion()
  if (reduce) return <div>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
