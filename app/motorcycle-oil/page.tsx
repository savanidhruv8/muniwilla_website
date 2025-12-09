"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const motorcycleProducts = [
  {
    id: "starex-20w40-sl",
    name: "STAREX 20W40-SL",
    specs: "API SL, 20W40",
    description: "Premium motorcycle engine oil for superior performance and protection",
    sizes: ["900ML - ₹399", "1LTR - ₹421", "10LTR - ₹3915", "20LTR - ₹7857"],
    features: [
      "Superior Engine Protection",
      "Excellent Thermal Stability",
      "Reduced Engine Wear",
      "Enhanced Fuel Economy",
    ],
  },
  {
    id: "starex-silver-20w40-sm",
    name: "STAREX SILVER 20W40-SM",
    specs: "API SM, 20W40",
    description: "Advanced formula for modern motorcycle engines with enhanced protection",
    sizes: ["900ML - ₹405", "1LTR - ₹415", "10LTR - ₹4050", "20LTR - ₹8100"],
    features: [
      "Advanced Additive Technology",
      "Superior Oxidation Resistance",
      "Extended Drain Intervals",
      "All-Weather Performance",
    ],
  },
  {
    id: "starex-gold-20w40-sn",
    name: "STAREX GOLD 20W40-SN",
    specs: "API SN, 20W40",
    description: "Premium gold series offering maximum protection for high-performance motorcycles",
    sizes: ["900ML - ₹419", "1LTR - ₹441", "10LTR - ₹4212", "20LTR - ₹8438"],
    features: ["Maximum Engine Protection", "Improved Fuel Efficiency", "Reduced Emissions", "Extended Engine Life"],
  },
  {
    id: "super-ride-10w30-sn",
    name: "SUPER RIDE 10W30-SN",
    specs: "API SN, 10W30",
    description: "Multi-grade oil perfect for varying weather conditions and riding styles",
    sizes: ["800ML - ₹410", "900ML - ₹429", "1LTR - ₹451", "10LTR - ₹4293", "20LTR - ₹8600", "50LTR - ₹21042"],
    features: [
      "Multi-Grade Performance",
      "Cold Start Protection",
      "High Temperature Stability",
      "Versatile Application",
    ],
  },
  {
    id: "ultimex-20w50-sn",
    name: "ULTIMEX 20W50-SN",
    specs: "API SN, 20W50",
    description: "Ultimate protection for heavy-duty motorcycle applications",
    sizes: ["1LTR - ₹445", "10LTR - ₹4350", "20LTR - ₹8532"],
    features: [
      "Heavy-Duty Protection",
      "High Viscosity Index",
      "Excellent Shear Stability",
      "Superior Wear Protection",
    ],
  },
]

export default function MotorcycleOilPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">🏍️ MOTORCYCLE / BIKE MOPED ENGINE OIL</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium engine oils specially formulated for motorcycles, bikes, and mopeds. Engineered to deliver
              superior performance, protection, and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {motorcycleProducts.map((product, index) => (
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
                  <Info className="w-6 h-6 text-gray-400" />
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
                  <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
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
