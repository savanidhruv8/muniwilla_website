"use client"

import { motion } from "framer-motion"
import { Award, Shield, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "ISO certified manufacturing with stringent quality control processes.",
    stats: "99.9% Purity",
  },
  {
    icon: Shield,
    title: "Engine Protection",
    description: "Advanced technology providing superior wear protection and extended engine life.",
    stats: "50% Less Wear",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Engineered for extreme conditions with exceptional thermal stability.",
    stats: "300 Degree Stability",
  },
  {
    icon: Users,
    title: "Trusted by Professionals",
    description: "Preferred choice of automotive professionals and industrial experts worldwide.",
    stats: "10,000+ Customers",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Why Choose Muniwilla?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three decades of excellence in lubrication technology, delivering unmatched performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl h-full">
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="p-4 rounded-full bg-yellow-100 border border-yellow-300 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-yellow-600" />
                  </div>

                  <span className="text-2xl font-bold text-yellow-600 block mb-3">{feature.stats}</span>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "30+", label: "Years Experience" },
            { number: "100+", label: "Product Variants" },
            { number: "50K+", label: "Happy Customers" },
            { number: "25+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
