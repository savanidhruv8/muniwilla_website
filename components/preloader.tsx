"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
        >
          {/* Oil Drop Animation Background */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: "100vh", opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className={`absolute w-2 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full`}
                style={{
                  left: `${15 + i * 12}%`,
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>

          {/* Oil Wave Animation */}
          <div className="absolute bottom-0 left-0 right-0">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-32 bg-gradient-to-t from-yellow-500/20 to-transparent"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 60%, 0 80%)",
              }}
            />
          </div>

          <div className="text-center relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <Image src="/logo.png" alt="Muniwilla" width={250} height={100} className="mx-auto" />
            </motion.div>

            {/* Welcome Text */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Welcome to Muniwilla
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8"
            >
              Muniwilla Lubricants & Engine Oils
            </motion.p>

            {/* Oil Container Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative mx-auto w-16 h-20 border-2 border-yellow-500 rounded-lg mb-6"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "80%" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-500 to-amber-400 rounded-b-md"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="text-yellow-600 font-medium"
            >
              Loading Premium Experience...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
