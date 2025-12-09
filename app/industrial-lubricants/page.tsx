"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const industrialProducts = [
  {
    id: "gear-gt-ep90",
    name: "GEAR GT - EP-90-GL 4/5",
    specs: "API GL-4/5, EP-90",
    description: "Premium gear oil with extreme pressure additives for industrial gearboxes",
    sizes: [
      "500ML - Rs.227",
      "1LTR - Rs.434",
      "5LTR - Rs.2126",
      "6LTR - Rs.2552",
      "7LTR - Rs.2977",
      "10LTR - Rs.4196",
      "20LTR - Rs.8278",
    ],
    features: ["Extreme Pressure Protection", "Gear Wear Reduction", "High Load Capacity", "Temperature Stability"],
  },
  {
    id: "gear-gt-ep140",
    name: "GEAR GT - EP-140-GL 4/5",
    specs: "API GL-4/5, EP-140",
    description: "Heavy-duty gear oil for high-load industrial applications",
    sizes: [
      "500ML - Rs.230",
      "1LTR - Rs.437",
      "5LTR - Rs.2140",
      "6LTR - Rs.2569",
      "7LTR - Rs.2997",
      "10LTR - Rs.4224",
      "20LTR - Rs.8335",
    ],
    features: ["Heavy-Duty Performance", "Superior Load Carrying", "Oxidation Resistance", "Extended Service Life"],
  },
  {
    id: "gear-guard-80w90",
    name: "GEAR GUARD - 80W90-GL 4/5",
    specs: "API GL-4/5, 80W90",
    description: "Multi-grade gear oil providing excellent protection across temperature ranges",
    sizes: [
      "500ML - Rs.238",
      "1LTR - Rs.451",
      "5LTR - Rs.2211",
      "6LTR - Rs.2659",
      "7LTR - Rs.3096",
      "10LTR - Rs.4366",
      "20LTR - Rs.8618",
    ],
    features: ["Multi-Grade Performance", "Temperature Versatility", "Gear Protection", "Seal Compatibility"],
  },
  {
    id: "hydro-yellow",
    name: "HYDRO - YELLOW (ISO VG 32,46,68)",
    specs: "ISO VG 32/46/68",
    description: "Premium hydraulic oil for industrial hydraulic systems",
    sizes: ["1LTR - Rs.343", "5LTR - Rs.1673", "10LTR - Rs.3204", "20LTR - Rs.6521", "26LTR - Rs.8102"],
    features: ["Hydraulic System Optimized", "Anti-Wear Properties", "Oxidation Stability", "Foam Resistance"],
  },
  {
    id: "hydro-white",
    name: "HYDRO - WHITE (ISO VG 32,46,68)",
    specs: "ISO VG 32/46/68",
    description: "Food-grade hydraulic oil for applications requiring high purity",
    sizes: ["1LTR - Rs.354", "5LTR - Rs.1746", "10LTR - Rs.3430", "20LTR - Rs.6747", "26LTR - Rs.8414"],
    features: ["Food Grade Quality", "High Purity", "NSF Approved", "Safe for Incidental Contact"],
  },
  {
    id: "compressor-150",
    name: "COMPRESSOR - 150",
    specs: "Compressor Grade",
    description: "Specialized oil for air compressors and pneumatic systems",
    sizes: ["1LTR - Rs.437", "5LTR - Rs.2140", "10LTR - Rs.4196", "20LTR - Rs.8335", "26LTR - Rs.10688"],
    features: [
      "Compressor Optimized",
      "High Temperature Stability",
      "Carbon Deposit Control",
      "Extended Service Intervals",
    ],
  },
  {
    id: "transformer-oil",
    name: "TRANSFORMER OIL",
    specs: "Electrical Grade",
    description: "High-quality transformer oil for electrical equipment insulation and cooling",
    sizes: ["20LTR - Rs.7768", "26LTR - Rs.10098"],
    features: ["Electrical Insulation", "Cooling Properties", "Oxidation Resistance", "Moisture Control"],
  },
]

export default function IndustrialLubricantsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Industrial Lubricants Products</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industrial grade lubricants for heavy machinery, hydraulic systems, gearboxes, and specialized industrial
              applications. Engineered for maximum performance and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrialProducts.map((product, index) => (
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
