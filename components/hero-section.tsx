"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Simple subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="simpleGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D97706" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#simpleGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Decorative Line */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight tracking-tight">
            <span className="text-gray-800">Muniwilla</span>
            <br />
            <span className="text-amber-600">Lubricants</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the power of advanced lubrication technology. Engineered for performance, built for excellence.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center gap-8 md:gap-16 pt-4">
            {[
              { icon: Zap, label: "High Performance" },
              { icon: Shield, label: "Engine Protection" },
              { icon: Award, label: "Premium Quality" },
            ].map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-amber-50 border border-amber-200">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-sm text-gray-600">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg transition-colors bg-transparent"
            >
              Download Catalog
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-amber-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
