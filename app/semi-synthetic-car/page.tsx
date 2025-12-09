"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const semiSyntheticProducts = [
  {
    id: "gelexy-cng-20w50-sl",
    name: "GELEXY (CNG SPECIAL) 20W50-SL",
    specs: "API SL, 20W50",
    description: "Special formulation for CNG vehicles with enhanced protection and performance",
    sizes: [
      "1LTR - Rs.496",
      "3LTR - Rs.1471",
      "3.5LTR - Rs.1714",
      "4LTR - Rs.1954",
      "5LTR - Rs.2433",
      "10LTR - Rs.4795",
      "20LTR - Rs.9477",
    ],
    features: [
      "CNG Engine Optimized",
      "Valve Seat Protection",
      "High Temperature Stability",
      "Extended Drain Intervals",
    ],
  },
  {
    id: "ultra-02-20w50-sn",
    name: "ULTRA 0.2 20W50-SN",
    specs: "API SN, 20W50",
    description: "Ultra-premium semi-synthetic oil for superior engine protection and performance",
    sizes: [
      "1LTR - Rs.554",
      "3LTR - Rs.1659",
      "3.5LTR - Rs.1918",
      "4LTR - Rs.2193",
      "5LTR - Rs.2718",
      "10LTR - Rs.5388",
      "20LTR - Rs.10556",
    ],
    features: ["Superior Protection", "Enhanced Performance", "Fuel Economy Benefits", "All-Season Performance"],
  },
  {
    id: "synthex-5w30-sn",
    name: "SYNTHEX 5W30-SN",
    specs: "API SN, 5W30",
    description: "Advanced semi-synthetic oil for modern engines requiring 5W30 viscosity",
    sizes: [
      "1LTR - Rs.564",
      "3LTR - Rs.1662",
      "3.5LTR - Rs.1944",
      "4LTR - Rs.2203",
      "5LTR - Rs.2754",
      "10LTR - Rs.5421",
      "20LTR - Rs.10686",
    ],
    features: ["Cold Start Protection", "Fuel Efficiency", "Engine Cleanliness", "Wear Protection"],
  },
  {
    id: "astol-5w40-sn",
    name: "ASTOL 5W40-SN",
    specs: "API SN, 5W40",
    description: "Premium semi-synthetic oil for high-performance engines",
    sizes: [
      "1LTR - Rs.567",
      "3LTR - Rs.1682",
      "3.5LTR - Rs.1960",
      "4LTR - Rs.2226",
      "5LTR - Rs.2786",
      "10LTR - Rs.5524",
      "20LTR - Rs.10880",
    ],
    features: ["High Performance", "Thermal Stability", "Oxidation Resistance", "Extended Protection"],
  },
  {
    id: "gt-100-10w40-sn",
    name: "GT-100 10W40-SN",
    specs: "API SN, 10W40",
    description: "Grand Touring formula for enhanced driving experience and engine protection",
    sizes: [
      "1LTR - Rs.573",
      "3LTR - Rs.1707",
      "3.5LTR - Rs.1986",
      "4LTR - Rs.2271",
      "5LTR - Rs.2816",
      "10LTR - Rs.5566",
      "20LTR - Rs.11081",
    ],
    features: [
      "Grand Touring Formula",
      "Enhanced Driving Experience",
      "Superior Engine Protection",
      "Multi-Grade Performance",
    ],
  },
]

export default function SemiSyntheticCarPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Semi Synthetic Car Engine Oil</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium semi-synthetic engine oils for diesel and gasoline cars. Advanced formulations combining synthetic
              and conventional base oils for superior performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {semiSyntheticProducts.map((product, index) => (
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

                {/* Sizes and Prices */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Available Sizes:</h4>
                  <div className="space-y-2">
                    {product.sizes.map((size, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-700">{size.split(" - ")[0]}</span>
                        <span className="font-semibold text-yellow-600">{size.split(" - ")[1]}</span>
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
