"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const greaseProducts = [
  {
    id: "calcium-grease-mp3",
    name: "CALCIUM GREASE MP-3",
    specs: "NLGI Grade 3",
    description: "Multi-purpose calcium-based grease for general lubrication applications",
    sizes: ["500GM - Rs.247", "1KG - Rs.462", "5KG - Rs.2225", "18KG - Rs.7706"],
    features: ["Multi-Purpose Application", "Water Resistant", "Good Pumpability", "Cost Effective"],
  },
  {
    id: "lithium-grease-ap3",
    name: "LITHIUM GREASE AP-3",
    specs: "NLGI Grade 3",
    description: "Premium lithium-based grease for automotive and industrial applications",
    sizes: ["500GM - Rs.303", "1KG - Rs.576", "5KG - Rs.2792", "18KG - Rs.9747"],
    features: ["Automotive Grade", "High Temperature Stability", "Excellent Adhesion", "Long Service Life"],
  },
  {
    id: "red-jelly-grease",
    name: "RED JELLY GREASE",
    specs: "Multi-Purpose Grade",
    description: "Specialized red jelly grease for heavy-duty applications",
    sizes: ["500GM - Rs.318", "1KG - Rs.604", "5KG - Rs.2934", "18KG - Rs.10257"],
    features: ["Heavy-Duty Performance", "High Load Capacity", "Corrosion Protection", "Extreme Pressure Properties"],
  },
  {
    id: "ep-2-grease",
    name: "EP-2 GREASE",
    specs: "NLGI Grade 2",
    description: "Extreme pressure grease for high-load bearing applications",
    sizes: ["500GM - Rs.332", "1KG - Rs.652", "5KG - Rs.3150", "18KG - Rs.11113"],
    features: ["Extreme Pressure Protection", "High Load Bearing", "Anti-Wear Properties", "Industrial Grade"],
  },
]

export default function GreaseProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Automotive and Industrial Grease Products
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-purpose greases for automotive and industrial applications. Formulated to provide superior
              lubrication, protection, and performance across various operating conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {greaseProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.specs}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>



                <div className="flex gap-3">
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
