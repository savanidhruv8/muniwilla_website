"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const productCategories = ["Engine Oil", "Gear Oil", "Hydraulic Oil", "Brake Fluid", "Grease", "Coolant"]

  const quickLinks = ["About Us", "Products", "Quality", "Contact Us"]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Image src="/logo.png" alt="Muniwilla" width={200} height={80} className="h-16 w-auto" />
            <p className="text-gray-600 leading-relaxed">
              Leading manufacturer of premium lubricants and automotive fluids. Trusted by professionals worldwide for
              over three decades.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Ground Floor, Ramji Industriyal, A-8, Pasodara Rd, Kamrej, Surat, Gujarat 394185
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-yellow-600" />
                <span className="text-sm">+91 95205 96609</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-yellow-600" />
                <span className="text-sm">info@muniwilla.com</span>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`#${category.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600 text-sm">
              <p>2024 Muniwilla Lubricants. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-yellow-600 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-yellow-600 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-gray-600 text-sm">Made with dedication for automotive excellence</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
