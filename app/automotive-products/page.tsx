"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const automotiveProducts = [
  {
    id: "atf-dex-ii",
    name: "ATF DEX II (DEXRON II)",
    specs: "DEXRON II Standard",
    description: "Automatic transmission fluid for smooth gear shifting and transmission protection",
    sizes: ["500ML - Rs.207", "1LTR - Rs.434", "5LTR - Rs.2084", "10LTR - Rs.4190", "20LTR - Rs.8108"],
    features: ["Smooth Gear Shifting", "Transmission Protection", "Temperature Stability", "Extended Service Life"],
  },
  {
    id: "fork-oil-10w",
    name: "FORK OIL 10W",
    specs: "SAE 10W",
    description: "Specialized fork oil for motorcycle and bicycle suspension systems",
    sizes: ["175ML - Rs.82", "350ML - Rs.164"],
    features: ["Suspension Optimization", "Consistent Viscosity", "Anti-Foam Properties", "Seal Compatibility"],
  },
  {
    id: "brake-fluid-dot3-dot4",
    name: "BRAKE FLUID (DOT-3 / DOT-4)",
    specs: "DOT-3 / DOT-4 Standards",
    description: "High-performance brake fluid for reliable braking systems",
    sizes: ["100ML - Rs.82", "250ML - Rs.153", "500ML - Rs.264", "1LTR - Rs.507"],
    features: ["High Boiling Point", "Corrosion Protection", "Moisture Resistance", "Safety Compliance"],
  },
  {
    id: "coolant-bis-5759",
    name: "COOLANT (BIS 5759 2006)",
    specs: "BIS 5759:2006",
    description: "Engine coolant for optimal temperature control and freeze protection",
    sizes: ["500ML - Rs.162", "1LTR - Rs.301", "5LTR - Rs.1446"],
    features: ["Temperature Control", "Freeze Protection", "Corrosion Inhibition", "Long Service Life"],
  },
]

export default function AutomotiveProductsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Automotive Products</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of automotive fluids and products including transmission fluids, brake fluids, coolants,
              and specialized oils for optimal vehicle performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automotiveProducts.map((product, index) => (
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
