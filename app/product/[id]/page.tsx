"use client"

import { motion } from "framer-motion"
import { Download, Share2, Heart, ShoppingCart, Star, Shield, Award, Zap, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

const productData: Record<string, any> = {
  // Motorcycle Oil Products
  "starex-20w40-sl": {
    name: "STAREX 20W40-SL",
    fullName: "STAREX 4T 20W-40 High Performance Engine Oil",
    image: "/products/starex-20w40-sl.png",
    specs: "API SL, JASO MA2",
    viscosity: "20W-40",
    type: "4-Stroke Motorcycle Engine Oil",
    category: "Motorcycle Engine Oil",
    categoryLink: "/motorcycle-oil",
    description: "Premium motorcycle engine oil specially formulated for 4-stroke engines.",
    detailedDescription:
      "STAREX 20W40-SL is a high-performance engine oil designed specifically for 4-stroke motorcycle engines. It meets API SL and JASO MA2 specifications, ensuring optimal performance and protection. The advanced formulation provides excellent engine cleanliness, superior wear protection, and enhanced fuel economy.",
    sizes: [
      { size: "900ML", price: "399" },
      { size: "1LTR", price: "421" },
      { size: "10LTR", price: "3915" },
      { size: "20LTR", price: "7857" },
    ],
    features: [
      {
        icon: Shield,
        title: "Superior Engine Protection",
        description: "Advanced additive technology provides excellent protection against engine wear and deposits",
      },
      {
        icon: Zap,
        title: "High Performance",
        description: "Optimized viscosity ensures smooth engine operation and enhanced power delivery",
      },
      {
        icon: Award,
        title: "Quality Standards",
        description: "Meets API SL and JASO MA2 specifications for guaranteed quality and performance",
      },
    ],
    specifications: {
      "API Classification": "SL",
      "JASO Standard": "MA2",
      "Viscosity Grade": "20W-40",
      "Engine Type": "4-Stroke",
      "Base Oil": "Mineral",
      "Pour Point": "-30 Degree C",
      "Flash Point": "220 Degree C",
      "Viscosity Index": "140",
    },
    benefits: [
      "Excellent engine cleanliness and deposit control",
      "Superior wear protection for engine components",
      "Enhanced fuel economy and performance",
      "Optimal viscosity for all weather conditions",
      "Extended engine life and reliability",
      "Smooth gear shifting and clutch operation",
    ],
    applications: [
      "Motorcycles (All brands)",
      "Scooters and Mopeds",
      "4-Stroke Engines",
      "Air-cooled and Liquid-cooled engines",
    ],
    rating: 4.8,
    reviews: 156,
  },
  "starex-silver-20w40-sm": {
    name: "STAREX SILVER 20W40-SM",
    fullName: "STAREX SILVER 20W-40 Advanced Engine Oil",
    specs: "API SM, 20W40",
    category: "Motorcycle Engine Oil",
    categoryLink: "/motorcycle-oil",
    description: "Advanced formula for modern motorcycle engines with enhanced protection",
    detailedDescription:
      "STAREX SILVER 20W40-SM features an advanced additive package designed for modern motorcycle engines. Meeting API SM specifications, it provides superior oxidation resistance and extended drain intervals for demanding riding conditions.",
    sizes: [
      { size: "900ML", price: "405" },
      { size: "1LTR", price: "415" },
      { size: "10LTR", price: "4050" },
      { size: "20LTR", price: "8100" },
    ],
    features: [
      {
        icon: Shield,
        title: "Advanced Additive Technology",
        description: "Premium additives for superior engine protection",
      },
      {
        icon: Zap,
        title: "Superior Oxidation Resistance",
        description: "Maintains oil quality under extreme conditions",
      },
      { icon: Award, title: "Extended Drain Intervals", description: "Longer service life reduces maintenance costs" },
    ],
    specifications: {
      "API Classification": "SM",
      "Viscosity Grade": "20W-40",
      "Engine Type": "4-Stroke",
      "Base Oil": "Semi-Synthetic Blend",
    },
    benefits: [
      "Advanced additive technology",
      "Superior oxidation resistance",
      "Extended drain intervals",
      "All-weather performance",
    ],
    applications: ["Modern Motorcycles", "High-Performance Bikes", "Scooters"],
    rating: 4.7,
    reviews: 124,
  },
  "starex-gold-20w40-sn": {
    name: "STAREX GOLD 20W40-SN",
    fullName: "STAREX GOLD 20W-40 Premium Engine Oil",
    specs: "API SN, 20W40",
    category: "Motorcycle Engine Oil",
    categoryLink: "/motorcycle-oil",
    description: "Premium gold series offering maximum protection for high-performance motorcycles",
    detailedDescription:
      "STAREX GOLD 20W40-SN represents our premium gold series, engineered for high-performance motorcycles. Meeting the latest API SN specifications, it delivers maximum engine protection, improved fuel efficiency, and reduced emissions.",
    sizes: [
      { size: "900ML", price: "419" },
      { size: "1LTR", price: "441" },
      { size: "10LTR", price: "4212" },
      { size: "20LTR", price: "8438" },
    ],
    features: [
      { icon: Shield, title: "Maximum Engine Protection", description: "Premium formulation for ultimate protection" },
      { icon: Zap, title: "Improved Fuel Efficiency", description: "Optimized viscosity for better mileage" },
      { icon: Award, title: "Reduced Emissions", description: "Environment-friendly formulation" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "20W-40",
      "Engine Type": "4-Stroke",
      "Base Oil": "Premium Blend",
    },
    benefits: ["Maximum engine protection", "Improved fuel efficiency", "Reduced emissions", "Extended engine life"],
    applications: ["High-Performance Motorcycles", "Premium Bikes", "Sports Bikes"],
    rating: 4.9,
    reviews: 189,
  },
  "super-ride-10w30-sn": {
    name: "SUPER RIDE 10W30-SN",
    fullName: "SUPER RIDE 10W-30 Multi-Grade Engine Oil",
    specs: "API SN, 10W30",
    category: "Motorcycle Engine Oil",
    categoryLink: "/motorcycle-oil",
    description: "Multi-grade oil perfect for varying weather conditions and riding styles",
    detailedDescription:
      "SUPER RIDE 10W30-SN is a versatile multi-grade engine oil designed for all weather conditions. Its unique formulation provides excellent cold start protection while maintaining stability at high temperatures.",
    sizes: [
      { size: "800ML", price: "410" },
      { size: "900ML", price: "429" },
      { size: "1LTR", price: "451" },
      { size: "10LTR", price: "4293" },
      { size: "20LTR", price: "8600" },
      { size: "50LTR", price: "21042" },
    ],
    features: [
      {
        icon: Shield,
        title: "Multi-Grade Performance",
        description: "Excellent performance across temperature ranges",
      },
      { icon: Zap, title: "Cold Start Protection", description: "Superior flow at low temperatures" },
      { icon: Award, title: "High Temperature Stability", description: "Maintains viscosity under heat" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "10W-30",
      "Engine Type": "4-Stroke",
    },
    benefits: [
      "Multi-grade performance",
      "Cold start protection",
      "High temperature stability",
      "Versatile application",
    ],
    applications: ["All Motorcycles", "Scooters", "Mopeds", "All Weather Conditions"],
    rating: 4.6,
    reviews: 98,
  },
  "ultimex-20w50-sn": {
    name: "ULTIMEX 20W50-SN",
    fullName: "ULTIMEX 20W-50 Heavy Duty Engine Oil",
    specs: "API SN, 20W50",
    category: "Motorcycle Engine Oil",
    categoryLink: "/motorcycle-oil",
    description: "Ultimate protection for heavy-duty motorcycle applications",
    detailedDescription:
      "ULTIMEX 20W50-SN is designed for heavy-duty motorcycle applications requiring robust protection. Its high viscosity index ensures excellent shear stability and superior wear protection under demanding conditions.",
    sizes: [
      { size: "1LTR", price: "445" },
      { size: "10LTR", price: "4350" },
      { size: "20LTR", price: "8532" },
    ],
    features: [
      { icon: Shield, title: "Heavy-Duty Protection", description: "Engineered for demanding applications" },
      { icon: Zap, title: "High Viscosity Index", description: "Maintains performance under load" },
      { icon: Award, title: "Excellent Shear Stability", description: "Resists viscosity breakdown" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "20W-50",
      "Engine Type": "4-Stroke Heavy Duty",
    },
    benefits: [
      "Heavy-duty protection",
      "High viscosity index",
      "Excellent shear stability",
      "Superior wear protection",
    ],
    applications: ["Heavy-Duty Motorcycles", "Touring Bikes", "Commercial Two-Wheelers"],
    rating: 4.7,
    reviews: 76,
  },
  // Automotive Products
  "atf-dex-ii": {
    name: "ATF DEX II (DEXRON II)",
    fullName: "ATF DEXRON II Automatic Transmission Fluid",
    specs: "DEXRON II Standard",
    category: "Automotive Products",
    categoryLink: "/automotive-products",
    description: "Automatic transmission fluid for smooth gear shifting and transmission protection",
    detailedDescription:
      "ATF DEX II is a premium automatic transmission fluid meeting DEXRON II specifications. It provides smooth gear shifting, excellent transmission protection, and maintains optimal performance across wide temperature ranges.",
    sizes: [
      { size: "500ML", price: "207" },
      { size: "1LTR", price: "434" },
      { size: "5LTR", price: "2084" },
      { size: "10LTR", price: "4190" },
      { size: "20LTR", price: "8108" },
    ],
    features: [
      { icon: Shield, title: "Smooth Gear Shifting", description: "Optimized friction properties for seamless shifts" },
      { icon: Zap, title: "Transmission Protection", description: "Advanced protection against wear" },
      { icon: Award, title: "Temperature Stability", description: "Consistent performance in all conditions" },
    ],
    specifications: {
      Standard: "DEXRON II",
      Type: "Automatic Transmission Fluid",
      Application: "Automatic Transmissions",
    },
    benefits: ["Smooth gear shifting", "Transmission protection", "Temperature stability", "Extended service life"],
    applications: ["Automatic Transmissions", "Power Steering Systems", "Hydraulic Systems"],
    rating: 4.6,
    reviews: 112,
  },
  "fork-oil-10w": {
    name: "FORK OIL 10W",
    fullName: "FORK OIL 10W Suspension Fluid",
    specs: "SAE 10W",
    category: "Automotive Products",
    categoryLink: "/automotive-products",
    description: "Specialized fork oil for motorcycle and bicycle suspension systems",
    detailedDescription:
      "FORK OIL 10W is a specialized suspension fluid designed for motorcycle and bicycle forks. It provides optimal damping characteristics, consistent viscosity, and excellent seal compatibility.",
    sizes: [
      { size: "175ML", price: "82" },
      { size: "350ML", price: "164" },
    ],
    features: [
      { icon: Shield, title: "Suspension Optimization", description: "Tuned for optimal damping" },
      { icon: Zap, title: "Consistent Viscosity", description: "Stable performance over time" },
      { icon: Award, title: "Anti-Foam Properties", description: "Prevents air bubble formation" },
    ],
    specifications: {
      Viscosity: "SAE 10W",
      Type: "Fork Oil",
      Application: "Suspension Systems",
    },
    benefits: ["Suspension optimization", "Consistent viscosity", "Anti-foam properties", "Seal compatibility"],
    applications: ["Motorcycle Forks", "Bicycle Suspension", "Shock Absorbers"],
    rating: 4.5,
    reviews: 67,
  },
  "brake-fluid-dot3-dot4": {
    name: "BRAKE FLUID (DOT-3 / DOT-4)",
    fullName: "BRAKE FLUID DOT-3/DOT-4 High Performance",
    specs: "DOT-3 / DOT-4 Standards",
    category: "Automotive Products",
    categoryLink: "/automotive-products",
    description: "High-performance brake fluid for reliable braking systems",
    detailedDescription:
      "Our Brake Fluid meets DOT-3 and DOT-4 standards, providing high boiling point, excellent corrosion protection, and moisture resistance for reliable braking performance.",
    sizes: [
      { size: "100ML", price: "82" },
      { size: "250ML", price: "153" },
      { size: "500ML", price: "264" },
      { size: "1LTR", price: "507" },
    ],
    features: [
      { icon: Shield, title: "High Boiling Point", description: "Prevents vapor lock under heavy braking" },
      { icon: Zap, title: "Corrosion Protection", description: "Protects brake system components" },
      { icon: Award, title: "Moisture Resistance", description: "Maintains performance in humid conditions" },
    ],
    specifications: {
      Standard: "DOT-3 / DOT-4",
      Type: "Brake Fluid",
      "Boiling Point": "260 Degree C minimum",
    },
    benefits: ["High boiling point", "Corrosion protection", "Moisture resistance", "Safety compliance"],
    applications: ["Disc Brakes", "Drum Brakes", "ABS Systems", "All Vehicles"],
    rating: 4.8,
    reviews: 203,
  },
  "coolant-bis-5759": {
    name: "COOLANT (BIS 5759 2006)",
    fullName: "ENGINE COOLANT BIS 5759:2006",
    specs: "BIS 5759:2006",
    category: "Automotive Products",
    categoryLink: "/automotive-products",
    description: "Engine coolant for optimal temperature control and freeze protection",
    detailedDescription:
      "Our Engine Coolant meets BIS 5759:2006 standards, providing excellent heat transfer, freeze protection, and corrosion inhibition for all types of cooling systems.",
    sizes: [
      { size: "500ML", price: "162" },
      { size: "1LTR", price: "301" },
      { size: "5LTR", price: "1446" },
    ],
    features: [
      { icon: Shield, title: "Temperature Control", description: "Efficient heat transfer for optimal cooling" },
      { icon: Zap, title: "Freeze Protection", description: "Prevents freezing in cold climates" },
      { icon: Award, title: "Corrosion Inhibition", description: "Protects cooling system metals" },
    ],
    specifications: {
      Standard: "BIS 5759:2006",
      Type: "Engine Coolant",
      "Protection Range": "-37 to 108 Degree C",
    },
    benefits: ["Temperature control", "Freeze protection", "Corrosion inhibition", "Long service life"],
    applications: ["All Engines", "Radiators", "Cooling Systems"],
    rating: 4.6,
    reviews: 145,
  },
  // Heavy Duty Products
  "superex-15w40-cf4": {
    name: "SUPEREX 15W40-CF-4",
    fullName: "SUPEREX 15W-40 Heavy Duty Diesel Engine Oil",
    specs: "API CF-4, 15W40",
    category: "Heavy Duty Engine Oil",
    categoryLink: "/automotive-heavy-duty",
    description: "Heavy-duty diesel engine oil for commercial vehicles and trucks",
    detailedDescription:
      "SUPEREX 15W40-CF-4 is engineered for heavy-duty diesel engines in commercial vehicles and trucks. Meeting API CF-4 specifications, it provides excellent wear control and extended drain intervals.",
    sizes: [
      { size: "500ML", price: "230" },
      { size: "1LTR", price: "445" },
      { size: "3LTR", price: "1335" },
      { size: "5LTR", price: "2225" },
      { size: "10LTR", price: "4309" },
      { size: "20LTR", price: "8533" },
    ],
    features: [
      { icon: Shield, title: "Heavy-Duty Protection", description: "Designed for demanding commercial use" },
      { icon: Zap, title: "Diesel Engine Optimized", description: "Formulated for diesel performance" },
      { icon: Award, title: "Extended Drain Intervals", description: "Longer service between changes" },
    ],
    specifications: {
      "API Classification": "CF-4",
      "Viscosity Grade": "15W-40",
      "Engine Type": "Diesel",
    },
    benefits: ["Heavy-duty protection", "Diesel engine optimized", "Extended drain intervals", "Superior wear control"],
    applications: ["Commercial Vehicles", "Trucks", "Buses", "Heavy Machinery"],
    rating: 4.7,
    reviews: 167,
  },
  "superex-15w40-ch4": {
    name: "SUPEREX 15W40-CH-4",
    fullName: "SUPEREX 15W-40 CH-4 Advanced Diesel Oil",
    specs: "API CH-4, 15W40",
    category: "Heavy Duty Engine Oil",
    categoryLink: "/automotive-heavy-duty",
    description: "Advanced heavy-duty engine oil with enhanced performance characteristics",
    detailedDescription:
      "SUPEREX 15W40-CH-4 features an advanced additive package meeting API CH-4 standards. It offers improved oxidation resistance, better thermal stability, and reduced oil consumption.",
    sizes: [
      { size: "500ML", price: "238" },
      { size: "1LTR", price: "459" },
      { size: "3LTR", price: "1361" },
      { size: "5LTR", price: "2268" },
      { size: "10LTR", price: "4423" },
      { size: "20LTR", price: "8981" },
    ],
    features: [
      { icon: Shield, title: "Advanced Additive Package", description: "Premium protection technology" },
      { icon: Zap, title: "Improved Oxidation Resistance", description: "Longer oil life" },
      { icon: Award, title: "Better Thermal Stability", description: "Consistent performance under heat" },
    ],
    specifications: {
      "API Classification": "CH-4",
      "Viscosity Grade": "15W-40",
      "Engine Type": "Diesel Heavy Duty",
    },
    benefits: [
      "Advanced additive package",
      "Improved oxidation resistance",
      "Better thermal stability",
      "Reduced oil consumption",
    ],
    applications: ["Heavy-Duty Trucks", "Commercial Fleets", "Construction Equipment"],
    rating: 4.8,
    reviews: 134,
  },
  "superex-15w40-ci4plus": {
    name: "SUPEREX 15W40-CI-4+",
    fullName: "SUPEREX 15W-40 CI-4+ Premium Diesel Oil",
    specs: "API CI-4+, 15W40",
    category: "Heavy Duty Engine Oil",
    categoryLink: "/automotive-heavy-duty",
    description: "Premium heavy-duty oil meeting the latest industry standards",
    detailedDescription:
      "SUPEREX 15W40-CI-4+ meets the latest API CI-4+ specifications, offering enhanced soot control, improved fuel economy, and extended engine life for modern diesel engines.",
    sizes: [
      { size: "500ML", price: "247" },
      { size: "1LTR", price: "485" },
      { size: "3LTR", price: "1437" },
      { size: "5LTR", price: "2396" },
      { size: "10LTR", price: "4678" },
      { size: "20LTR", price: "9185" },
    ],
    features: [
      { icon: Shield, title: "Latest API Standards", description: "Meets CI-4+ requirements" },
      { icon: Zap, title: "Enhanced Soot Control", description: "Keeps engine clean" },
      { icon: Award, title: "Improved Fuel Economy", description: "Better efficiency" },
    ],
    specifications: {
      "API Classification": "CI-4+",
      "Viscosity Grade": "15W-40",
      "Engine Type": "Modern Diesel",
    },
    benefits: ["Latest API standards", "Enhanced soot control", "Improved fuel economy", "Extended engine life"],
    applications: ["Modern Diesel Trucks", "Low Emission Vehicles", "EGR Equipped Engines"],
    rating: 4.9,
    reviews: 178,
  },
  "royal-ex-15w50-sn": {
    name: "ROYAL-EX 15W50-SN",
    fullName: "ROYAL-EX 15W-50 Premium Engine Oil",
    specs: "API SN, 15W50",
    category: "Heavy Duty Engine Oil",
    categoryLink: "/automotive-heavy-duty",
    description: "Royal grade engine oil for premium heavy-duty applications",
    detailedDescription:
      "ROYAL-EX 15W50-SN is our premium grade oil designed for heavy-duty applications requiring superior protection. Its high viscosity index ensures excellent performance under extreme loads.",
    sizes: [
      { size: "2.5LTR", price: "1153" },
      { size: "10LTR", price: "4266" },
      { size: "20LTR", price: "8824" },
    ],
    features: [
      { icon: Shield, title: "Premium Grade Quality", description: "Top-tier formulation" },
      { icon: Zap, title: "High Viscosity Index", description: "Stable under all conditions" },
      { icon: Award, title: "Excellent Shear Stability", description: "Maintains protection" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "15W-50",
      Grade: "Premium",
    },
    benefits: ["Premium grade quality", "High viscosity index", "Excellent shear stability", "Superior protection"],
    applications: ["Premium Heavy-Duty Vehicles", "High-Performance Commercial Vehicles"],
    rating: 4.8,
    reviews: 92,
  },
  // Semi Synthetic Products
  "gelexy-cng-20w50-sl": {
    name: "GELEXY (CNG SPECIAL) 20W50-SL",
    fullName: "GELEXY CNG Special 20W-50 Engine Oil",
    specs: "API SL, 20W50",
    category: "Semi Synthetic Car Oil",
    categoryLink: "/semi-synthetic-car",
    description: "Special formulation for CNG vehicles with enhanced protection and performance",
    detailedDescription:
      "GELEXY CNG SPECIAL is specifically formulated for CNG-powered vehicles. It provides excellent valve seat protection, high temperature stability, and extended drain intervals for CNG applications.",
    sizes: [
      { size: "1LTR", price: "496" },
      { size: "3LTR", price: "1471" },
      { size: "3.5LTR", price: "1714" },
      { size: "4LTR", price: "1954" },
      { size: "5LTR", price: "2433" },
      { size: "10LTR", price: "4795" },
      { size: "20LTR", price: "9477" },
    ],
    features: [
      { icon: Shield, title: "CNG Engine Optimized", description: "Designed for CNG combustion" },
      { icon: Zap, title: "Valve Seat Protection", description: "Prevents wear on dry-running valves" },
      { icon: Award, title: "High Temperature Stability", description: "Handles CNG heat loads" },
    ],
    specifications: {
      "API Classification": "SL",
      "Viscosity Grade": "20W-50",
      "Fuel Type": "CNG Special",
    },
    benefits: [
      "CNG engine optimized",
      "Valve seat protection",
      "High temperature stability",
      "Extended drain intervals",
    ],
    applications: ["CNG Cars", "CNG Taxis", "CNG Commercial Vehicles"],
    rating: 4.7,
    reviews: 156,
  },
  "ultra-02-20w50-sn": {
    name: "ULTRA 0.2 20W50-SN",
    fullName: "ULTRA 0.2 20W-50 Semi Synthetic Oil",
    specs: "API SN, 20W50",
    category: "Semi Synthetic Car Oil",
    categoryLink: "/semi-synthetic-car",
    description: "Ultra-premium semi-synthetic oil for superior engine protection and performance",
    detailedDescription:
      "ULTRA 0.2 20W50-SN is an ultra-premium semi-synthetic oil offering superior protection, enhanced performance, and fuel economy benefits for modern gasoline engines.",
    sizes: [
      { size: "1LTR", price: "554" },
      { size: "3LTR", price: "1659" },
      { size: "3.5LTR", price: "1918" },
      { size: "4LTR", price: "2193" },
      { size: "5LTR", price: "2718" },
      { size: "10LTR", price: "5388" },
      { size: "20LTR", price: "10556" },
    ],
    features: [
      { icon: Shield, title: "Superior Protection", description: "Advanced wear protection" },
      { icon: Zap, title: "Enhanced Performance", description: "Optimized for power" },
      { icon: Award, title: "Fuel Economy Benefits", description: "Better mileage" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "20W-50",
      Type: "Semi Synthetic",
    },
    benefits: ["Superior protection", "Enhanced performance", "Fuel economy benefits", "All-season performance"],
    applications: ["Gasoline Cars", "Modern Sedans", "SUVs"],
    rating: 4.8,
    reviews: 187,
  },
  "synthex-5w30-sn": {
    name: "SYNTHEX 5W30-SN",
    fullName: "SYNTHEX 5W-30 Advanced Semi Synthetic Oil",
    specs: "API SN, 5W30",
    category: "Semi Synthetic Car Oil",
    categoryLink: "/semi-synthetic-car",
    description: "Advanced semi-synthetic oil for modern engines requiring 5W30 viscosity",
    detailedDescription:
      "SYNTHEX 5W30-SN is an advanced semi-synthetic oil designed for modern engines. It provides excellent cold start protection, fuel efficiency, and engine cleanliness.",
    sizes: [
      { size: "1LTR", price: "564" },
      { size: "3LTR", price: "1662" },
      { size: "3.5LTR", price: "1944" },
      { size: "4LTR", price: "2203" },
      { size: "5LTR", price: "2754" },
      { size: "10LTR", price: "5421" },
      { size: "20LTR", price: "10686" },
    ],
    features: [
      { icon: Shield, title: "Cold Start Protection", description: "Instant lubrication" },
      { icon: Zap, title: "Fuel Efficiency", description: "Optimized viscosity" },
      { icon: Award, title: "Engine Cleanliness", description: "Reduces deposits" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "5W-30",
      Type: "Semi Synthetic",
    },
    benefits: ["Cold start protection", "Fuel efficiency", "Engine cleanliness", "Wear protection"],
    applications: ["Modern Cars", "Japanese Vehicles", "European Cars"],
    rating: 4.8,
    reviews: 201,
  },
  "astol-5w40-sn": {
    name: "ASTOL 5W40-SN",
    fullName: "ASTOL 5W-40 Premium Semi Synthetic Oil",
    specs: "API SN, 5W40",
    category: "Semi Synthetic Car Oil",
    categoryLink: "/semi-synthetic-car",
    description: "Premium semi-synthetic oil for high-performance engines",
    detailedDescription:
      "ASTOL 5W40-SN is a premium semi-synthetic oil engineered for high-performance engines. It offers excellent thermal stability, oxidation resistance, and extended protection.",
    sizes: [
      { size: "1LTR", price: "567" },
      { size: "3LTR", price: "1682" },
      { size: "3.5LTR", price: "1960" },
      { size: "4LTR", price: "2226" },
      { size: "5LTR", price: "2786" },
      { size: "10LTR", price: "5524" },
      { size: "20LTR", price: "10880" },
    ],
    features: [
      { icon: Shield, title: "High Performance", description: "For demanding engines" },
      { icon: Zap, title: "Thermal Stability", description: "Handles high temperatures" },
      { icon: Award, title: "Oxidation Resistance", description: "Longer oil life" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "5W-40",
      Type: "Semi Synthetic Premium",
    },
    benefits: ["High performance", "Thermal stability", "Oxidation resistance", "Extended protection"],
    applications: ["High-Performance Cars", "Sports Sedans", "Luxury Vehicles"],
    rating: 4.9,
    reviews: 165,
  },
  "gt-100-10w40-sn": {
    name: "GT-100 10W40-SN",
    fullName: "GT-100 10W-40 Grand Touring Engine Oil",
    specs: "API SN, 10W40",
    category: "Semi Synthetic Car Oil",
    categoryLink: "/semi-synthetic-car",
    description: "Grand Touring formula for enhanced driving experience and engine protection",
    detailedDescription:
      "GT-100 10W40-SN is our Grand Touring formula designed for enhanced driving experience. It delivers superior engine protection, multi-grade performance, and exceptional reliability.",
    sizes: [
      { size: "1LTR", price: "573" },
      { size: "3LTR", price: "1707" },
      { size: "3.5LTR", price: "1986" },
      { size: "4LTR", price: "2271" },
      { size: "5LTR", price: "2816" },
      { size: "10LTR", price: "5566" },
      { size: "20LTR", price: "11081" },
    ],
    features: [
      { icon: Shield, title: "Grand Touring Formula", description: "For long-distance driving" },
      { icon: Zap, title: "Enhanced Driving Experience", description: "Smooth performance" },
      { icon: Award, title: "Superior Engine Protection", description: "Maximum reliability" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "10W-40",
      Type: "Grand Touring",
    },
    benefits: [
      "Grand touring formula",
      "Enhanced driving experience",
      "Superior engine protection",
      "Multi-grade performance",
    ],
    applications: ["Touring Cars", "Long-Distance Vehicles", "Premium Sedans"],
    rating: 4.7,
    reviews: 143,
  },
  // Three Wheeler Products
  "cng-2t": {
    name: "CNG 2T",
    fullName: "CNG 2T Two-Stroke Engine Oil",
    specs: "2-Stroke Engine Oil",
    category: "Three Wheeler Oil",
    categoryLink: "/three-wheeler",
    description: "Specialized 2-stroke engine oil for CNG-powered three-wheelers and auto-rickshaws",
    detailedDescription:
      "CNG 2T is a specialized 2-stroke engine oil designed for CNG-powered three-wheelers and auto-rickshaws. It provides clean burning, reduced emissions, and excellent engine protection.",
    sizes: [
      { size: "500ML", price: "178" },
      { size: "1LTR", price: "335" },
    ],
    features: [
      { icon: Shield, title: "CNG Engine Compatible", description: "Designed for CNG 2-stroke" },
      { icon: Zap, title: "Clean Burning", description: "Minimal residue" },
      { icon: Award, title: "Reduced Emissions", description: "Environment friendly" },
    ],
    specifications: {
      Type: "2-Stroke",
      "Fuel Compatibility": "CNG",
      Application: "Three Wheelers",
    },
    benefits: ["CNG engine compatible", "2-stroke formulation", "Clean burning", "Reduced emissions"],
    applications: ["CNG Auto-Rickshaws", "CNG Three-Wheelers", "2-Stroke CNG Engines"],
    rating: 4.5,
    reviews: 89,
  },
  "red-x": {
    name: "RED X",
    fullName: "RED X Multi-Purpose Three Wheeler Oil",
    specs: "Multi-Purpose Oil",
    category: "Three Wheeler Oil",
    categoryLink: "/three-wheeler",
    description: "High-performance oil for three-wheeler engines with enhanced protection",
    detailedDescription:
      "RED X is a high-performance multi-purpose oil designed for three-wheeler engines. It provides enhanced protection, high performance, and cost-effective operation.",
    sizes: [
      { size: "500ML", price: "193" },
      { size: "1LTR", price: "357" },
      { size: "5LTR", price: "1772" },
      { size: "7.5LTR", price: "2515" },
      { size: "10LTR", price: "3345" },
      { size: "20LTR", price: "6662" },
    ],
    features: [
      { icon: Shield, title: "Multi-Purpose Application", description: "Versatile use" },
      { icon: Zap, title: "Enhanced Protection", description: "Superior wear guard" },
      { icon: Award, title: "High Performance", description: "Reliable power" },
    ],
    specifications: {
      Type: "Multi-Purpose",
      Application: "Three Wheelers",
      Grade: "Heavy Duty",
    },
    benefits: ["Multi-purpose application", "Enhanced protection", "High performance", "Cost effective"],
    applications: ["Auto-Rickshaws", "Commercial Three-Wheelers", "Passenger Three-Wheelers"],
    rating: 4.6,
    reviews: 112,
  },
  // Tractor Products
  "tracton-20w40-sn": {
    name: "TRACTON 20W40-SN",
    fullName: "TRACTON 20W-40 Agricultural Engine Oil",
    specs: "API SN, 20W40",
    category: "Tractor Segment",
    categoryLink: "/tractor-segment",
    description: "Premium tractor engine oil designed for agricultural machinery and heavy-duty farm equipment",
    detailedDescription:
      "TRACTON 20W40-SN is specifically formulated for agricultural machinery and tractors. It provides heavy-duty protection, extended service intervals, and all-weather performance for demanding farm applications.",
    sizes: [
      { size: "6LTR", price: "2583" },
      { size: "7LTR", price: "2994" },
      { size: "7.5LTR", price: "3238" },
      { size: "10LTR", price: "3643" },
    ],
    features: [
      { icon: Shield, title: "Agricultural Machinery Optimized", description: "Designed for farm equipment" },
      { icon: Zap, title: "Heavy-Duty Protection", description: "Handles tough conditions" },
      { icon: Award, title: "Extended Service Intervals", description: "Less downtime" },
    ],
    specifications: {
      "API Classification": "SN",
      "Viscosity Grade": "20W-40",
      Application: "Agricultural",
    },
    benefits: [
      "Agricultural machinery optimized",
      "Heavy-duty protection",
      "Extended service intervals",
      "All-weather performance",
    ],
    applications: ["Tractors", "Farm Equipment", "Agricultural Machinery"],
    rating: 4.7,
    reviews: 98,
  },
  "utto-sae30": {
    name: "UTTO SAE-30-85W/SL-4",
    fullName: "UTTO Universal Tractor Transmission Oil",
    specs: "SAE 30, 85W/SL-4",
    category: "Tractor Segment",
    categoryLink: "/tractor-segment",
    description: "Universal Tractor Transmission Oil for hydraulic systems, transmissions, and wet brakes",
    detailedDescription:
      "UTTO SAE-30-85W/SL-4 is a Universal Tractor Transmission Oil designed for multiple applications including hydraulic systems, transmissions, and wet brakes in agricultural equipment.",
    sizes: [{ size: "26LTR", price: "12088" }],
    features: [
      { icon: Shield, title: "Universal Application", description: "Multi-purpose use" },
      { icon: Zap, title: "Hydraulic System Compatible", description: "Excellent fluid properties" },
      { icon: Award, title: "Wet Brake Performance", description: "Safe operation" },
    ],
    specifications: {
      Viscosity: "SAE 30, 85W",
      Standard: "SL-4",
      Type: "UTTO",
    },
    benefits: [
      "Universal application",
      "Hydraulic system compatible",
      "Transmission protection",
      "Wet brake performance",
    ],
    applications: ["Tractor Hydraulics", "Transmissions", "Wet Brakes", "Final Drives"],
    rating: 4.8,
    reviews: 67,
  },
  // Grease Products
  "calcium-grease-mp3": {
    name: "CALCIUM GREASE MP-3",
    fullName: "CALCIUM GREASE MP-3 Multi-Purpose",
    specs: "NLGI Grade 3",
    category: "Grease Products",
    categoryLink: "/grease-products",
    description: "Multi-purpose calcium-based grease for general lubrication applications",
    detailedDescription:
      "CALCIUM GREASE MP-3 is a multi-purpose calcium-based grease suitable for general lubrication applications. It offers good water resistance, pumpability, and cost-effective protection.",
    sizes: [
      { size: "500GM", price: "247" },
      { size: "1KG", price: "462" },
      { size: "5KG", price: "2225" },
      { size: "18KG", price: "7706" },
    ],
    features: [
      { icon: Shield, title: "Multi-Purpose Application", description: "Versatile use" },
      { icon: Zap, title: "Water Resistant", description: "Performs in wet conditions" },
      { icon: Award, title: "Good Pumpability", description: "Easy application" },
    ],
    specifications: {
      "NLGI Grade": "3",
      Type: "Calcium Based",
      Application: "General Purpose",
    },
    benefits: ["Multi-purpose application", "Water resistant", "Good pumpability", "Cost effective"],
    applications: ["General Lubrication", "Bearings", "Chassis Points"],
    rating: 4.4,
    reviews: 78,
  },
  "lithium-grease-ap3": {
    name: "LITHIUM GREASE AP-3",
    fullName: "LITHIUM GREASE AP-3 Premium",
    specs: "NLGI Grade 3",
    category: "Grease Products",
    categoryLink: "/grease-products",
    description: "Premium lithium-based grease for automotive and industrial applications",
    detailedDescription:
      "LITHIUM GREASE AP-3 is a premium lithium-based grease offering high temperature stability, excellent adhesion, and long service life for automotive and industrial applications.",
    sizes: [
      { size: "500GM", price: "303" },
      { size: "1KG", price: "576" },
      { size: "5KG", price: "2792" },
      { size: "18KG", price: "9747" },
    ],
    features: [
      { icon: Shield, title: "Automotive Grade", description: "Designed for vehicles" },
      { icon: Zap, title: "High Temperature Stability", description: "Handles heat" },
      { icon: Award, title: "Excellent Adhesion", description: "Stays in place" },
    ],
    specifications: {
      "NLGI Grade": "3",
      Type: "Lithium Based",
      Application: "Automotive/Industrial",
    },
    benefits: ["Automotive grade", "High temperature stability", "Excellent adhesion", "Long service life"],
    applications: ["Wheel Bearings", "Chassis", "Industrial Equipment"],
    rating: 4.7,
    reviews: 134,
  },
  "red-jelly-grease": {
    name: "RED JELLY GREASE",
    fullName: "RED JELLY GREASE Heavy Duty",
    specs: "Multi-Purpose Grade",
    category: "Grease Products",
    categoryLink: "/grease-products",
    description: "Specialized red jelly grease for heavy-duty applications",
    detailedDescription:
      "RED JELLY GREASE is a specialized heavy-duty grease featuring high load capacity, corrosion protection, and extreme pressure properties for demanding applications.",
    sizes: [
      { size: "500GM", price: "318" },
      { size: "1KG", price: "604" },
      { size: "5KG", price: "2934" },
      { size: "18KG", price: "10257" },
    ],
    features: [
      { icon: Shield, title: "Heavy-Duty Performance", description: "For tough jobs" },
      { icon: Zap, title: "High Load Capacity", description: "Handles pressure" },
      { icon: Award, title: "Corrosion Protection", description: "Prevents rust" },
    ],
    specifications: {
      Grade: "Multi-Purpose",
      Type: "Red Jelly",
      Application: "Heavy Duty",
    },
    benefits: ["Heavy-duty performance", "High load capacity", "Corrosion protection", "Extreme pressure properties"],
    applications: ["Heavy Machinery", "Industrial Equipment", "Mining Equipment"],
    rating: 4.6,
    reviews: 89,
  },
  "ep-2-grease": {
    name: "EP-2 GREASE",
    fullName: "EP-2 GREASE Extreme Pressure",
    specs: "NLGI Grade 2",
    category: "Grease Products",
    categoryLink: "/grease-products",
    description: "Extreme pressure grease for high-load bearing applications",
    detailedDescription:
      "EP-2 GREASE is an extreme pressure grease designed for high-load bearing applications. It provides excellent anti-wear properties and industrial-grade protection.",
    sizes: [
      { size: "500GM", price: "332" },
      { size: "1KG", price: "652" },
      { size: "5KG", price: "3150" },
      { size: "18KG", price: "11113" },
    ],
    features: [
      { icon: Shield, title: "Extreme Pressure Protection", description: "For heavy loads" },
      { icon: Zap, title: "High Load Bearing", description: "Supports weight" },
      { icon: Award, title: "Anti-Wear Properties", description: "Extends life" },
    ],
    specifications: {
      "NLGI Grade": "2",
      Type: "Extreme Pressure",
      Application: "Industrial",
    },
    benefits: ["Extreme pressure protection", "High load bearing", "Anti-wear properties", "Industrial grade"],
    applications: ["Industrial Bearings", "Gearboxes", "Heavy Equipment"],
    rating: 4.8,
    reviews: 112,
  },
  // Industrial Products
  "gear-gt-ep90": {
    name: "GEAR GT - EP-90-GL 4/5",
    fullName: "GEAR GT EP-90 Industrial Gear Oil",
    specs: "API GL-4/5, EP-90",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Premium gear oil with extreme pressure additives for industrial gearboxes",
    detailedDescription:
      "GEAR GT EP-90-GL 4/5 is a premium gear oil with extreme pressure additives designed for industrial gearboxes. It provides excellent gear wear reduction, high load capacity, and temperature stability.",
    sizes: [
      { size: "500ML", price: "227" },
      { size: "1LTR", price: "434" },
      { size: "5LTR", price: "2126" },
      { size: "6LTR", price: "2552" },
      { size: "7LTR", price: "2977" },
      { size: "10LTR", price: "4196" },
      { size: "20LTR", price: "8278" },
    ],
    features: [
      { icon: Shield, title: "Extreme Pressure Protection", description: "Handles heavy loads" },
      { icon: Zap, title: "Gear Wear Reduction", description: "Extends gear life" },
      { icon: Award, title: "High Load Capacity", description: "Industrial strength" },
    ],
    specifications: {
      "API Classification": "GL-4/5",
      Viscosity: "EP-90",
      Type: "Gear Oil",
    },
    benefits: ["Extreme pressure protection", "Gear wear reduction", "High load capacity", "Temperature stability"],
    applications: ["Industrial Gearboxes", "Differential Units", "Manual Transmissions"],
    rating: 4.7,
    reviews: 145,
  },
  "gear-gt-ep140": {
    name: "GEAR GT - EP-140-GL 4/5",
    fullName: "GEAR GT EP-140 Heavy Duty Gear Oil",
    specs: "API GL-4/5, EP-140",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Heavy-duty gear oil for high-load industrial applications",
    detailedDescription:
      "GEAR GT EP-140-GL 4/5 is a heavy-duty gear oil designed for high-load industrial applications. It offers superior load carrying, oxidation resistance, and extended service life.",
    sizes: [
      { size: "500ML", price: "230" },
      { size: "1LTR", price: "437" },
      { size: "5LTR", price: "2140" },
      { size: "6LTR", price: "2569" },
      { size: "7LTR", price: "2997" },
      { size: "10LTR", price: "4224" },
      { size: "20LTR", price: "8335" },
    ],
    features: [
      { icon: Shield, title: "Heavy-Duty Performance", description: "For demanding applications" },
      { icon: Zap, title: "Superior Load Carrying", description: "Handles extreme pressure" },
      { icon: Award, title: "Oxidation Resistance", description: "Longer oil life" },
    ],
    specifications: {
      "API Classification": "GL-4/5",
      Viscosity: "EP-140",
      Type: "Heavy Duty Gear Oil",
    },
    benefits: ["Heavy-duty performance", "Superior load carrying", "Oxidation resistance", "Extended service life"],
    applications: ["Heavy Industrial Gears", "Mining Equipment", "Construction Machinery"],
    rating: 4.8,
    reviews: 98,
  },
  "gear-guard-80w90": {
    name: "GEAR GUARD - 80W90-GL 4/5",
    fullName: "GEAR GUARD 80W-90 Multi-Grade Gear Oil",
    specs: "API GL-4/5, 80W90",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Multi-grade gear oil providing excellent protection across temperature ranges",
    detailedDescription:
      "GEAR GUARD 80W90-GL 4/5 is a multi-grade gear oil providing excellent protection across wide temperature ranges. It offers temperature versatility, gear protection, and seal compatibility.",
    sizes: [
      { size: "500ML", price: "238" },
      { size: "1LTR", price: "451" },
      { size: "5LTR", price: "2211" },
      { size: "6LTR", price: "2659" },
      { size: "7LTR", price: "3096" },
      { size: "10LTR", price: "4366" },
      { size: "20LTR", price: "8618" },
    ],
    features: [
      { icon: Shield, title: "Multi-Grade Performance", description: "All-temperature use" },
      { icon: Zap, title: "Temperature Versatility", description: "Hot or cold" },
      { icon: Award, title: "Gear Protection", description: "Comprehensive care" },
    ],
    specifications: {
      "API Classification": "GL-4/5",
      Viscosity: "80W-90",
      Type: "Multi-Grade Gear Oil",
    },
    benefits: ["Multi-grade performance", "Temperature versatility", "Gear protection", "Seal compatibility"],
    applications: ["Automotive Differentials", "Manual Transmissions", "Transfer Cases"],
    rating: 4.6,
    reviews: 123,
  },
  "hydro-yellow": {
    name: "HYDRO - YELLOW (ISO VG 32,46,68)",
    fullName: "HYDRO YELLOW Premium Hydraulic Oil",
    specs: "ISO VG 32/46/68",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Premium hydraulic oil for industrial hydraulic systems",
    detailedDescription:
      "HYDRO YELLOW is a premium hydraulic oil designed for industrial hydraulic systems. It provides excellent anti-wear properties, oxidation stability, and foam resistance.",
    sizes: [
      { size: "1LTR", price: "343" },
      { size: "5LTR", price: "1673" },
      { size: "10LTR", price: "3204" },
      { size: "20LTR", price: "6521" },
      { size: "26LTR", price: "8102" },
    ],
    features: [
      { icon: Shield, title: "Hydraulic System Optimized", description: "For hydraulic applications" },
      { icon: Zap, title: "Anti-Wear Properties", description: "Protects components" },
      { icon: Award, title: "Oxidation Stability", description: "Long-lasting" },
    ],
    specifications: {
      "Viscosity Grades": "ISO VG 32, 46, 68",
      Type: "Hydraulic Oil",
      Color: "Yellow",
    },
    benefits: ["Hydraulic system optimized", "Anti-wear properties", "Oxidation stability", "Foam resistance"],
    applications: ["Hydraulic Systems", "Industrial Presses", "Injection Molding"],
    rating: 4.7,
    reviews: 156,
  },
  "hydro-white": {
    name: "HYDRO - WHITE (ISO VG 32,46,68)",
    fullName: "HYDRO WHITE Food Grade Hydraulic Oil",
    specs: "ISO VG 32/46/68",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Food-grade hydraulic oil for applications requiring high purity",
    detailedDescription:
      "HYDRO WHITE is a food-grade hydraulic oil designed for applications requiring high purity. It meets NSF standards and is safe for incidental food contact.",
    sizes: [
      { size: "1LTR", price: "354" },
      { size: "5LTR", price: "1746" },
      { size: "10LTR", price: "3430" },
      { size: "20LTR", price: "6747" },
      { size: "26LTR", price: "8414" },
    ],
    features: [
      { icon: Shield, title: "Food Grade Quality", description: "Safe for food industry" },
      { icon: Zap, title: "High Purity", description: "Clean formulation" },
      { icon: Award, title: "NSF Approved", description: "Certified safe" },
    ],
    specifications: {
      "Viscosity Grades": "ISO VG 32, 46, 68",
      Type: "Food Grade Hydraulic Oil",
      Certification: "NSF",
    },
    benefits: ["Food grade quality", "High purity", "NSF approved", "Safe for incidental contact"],
    applications: ["Food Processing", "Beverage Industry", "Pharmaceutical"],
    rating: 4.9,
    reviews: 87,
  },
  "compressor-150": {
    name: "COMPRESSOR - 150",
    fullName: "COMPRESSOR 150 Air Compressor Oil",
    specs: "Compressor Grade",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "Specialized oil for air compressors and pneumatic systems",
    detailedDescription:
      "COMPRESSOR 150 is a specialized oil designed for air compressors and pneumatic systems. It provides high temperature stability, carbon deposit control, and extended service intervals.",
    sizes: [
      { size: "1LTR", price: "437" },
      { size: "5LTR", price: "2140" },
      { size: "10LTR", price: "4196" },
      { size: "20LTR", price: "8335" },
      { size: "26LTR", price: "10688" },
    ],
    features: [
      { icon: Shield, title: "Compressor Optimized", description: "For air compressors" },
      { icon: Zap, title: "High Temperature Stability", description: "Handles compression heat" },
      { icon: Award, title: "Carbon Deposit Control", description: "Keeps system clean" },
    ],
    specifications: {
      Grade: "150",
      Type: "Compressor Oil",
      Application: "Air Compressors",
    },
    benefits: [
      "Compressor optimized",
      "High temperature stability",
      "Carbon deposit control",
      "Extended service intervals",
    ],
    applications: ["Air Compressors", "Pneumatic Systems", "Industrial Compressors"],
    rating: 4.7,
    reviews: 98,
  },
  "transformer-oil": {
    name: "TRANSFORMER OIL",
    fullName: "TRANSFORMER OIL Electrical Grade",
    specs: "Electrical Grade",
    category: "Industrial Lubricants",
    categoryLink: "/industrial-lubricants",
    description: "High-quality transformer oil for electrical equipment insulation and cooling",
    detailedDescription:
      "Our Transformer Oil is a high-quality electrical grade oil designed for transformer insulation and cooling. It provides excellent electrical insulation, cooling properties, and oxidation resistance.",
    sizes: [
      { size: "20LTR", price: "7768" },
      { size: "26LTR", price: "10098" },
    ],
    features: [
      { icon: Shield, title: "Electrical Insulation", description: "Superior dielectric strength" },
      { icon: Zap, title: "Cooling Properties", description: "Efficient heat transfer" },
      { icon: Award, title: "Oxidation Resistance", description: "Long service life" },
    ],
    specifications: {
      Grade: "Electrical",
      Type: "Transformer Oil",
      Application: "Electrical Equipment",
    },
    benefits: ["Electrical insulation", "Cooling properties", "Oxidation resistance", "Moisture control"],
    applications: ["Transformers", "Switchgear", "Electrical Equipment"],
    rating: 4.8,
    reviews: 76,
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[productId]

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Product Detail Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-yellow-600">
                Home
              </Link>
              <span>/</span>
              <Link href={product.categoryLink || "/"} className="hover:text-yellow-600">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">{product.name}</span>
            </nav>
          </motion.div>

          {/* Back Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
            <Link
              href={product.categoryLink || "/"}
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.category}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <Image
                  src={product.image || "/placeholder.svg?height=400&width=300&query=oil bottle product"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="max-w-full h-auto object-contain"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <Badge className="mb-4 bg-yellow-100 text-yellow-700">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {product.fullName || product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating || 4.5) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">({product.reviews || 0} reviews)</span>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div key={key}>
                          <span className="text-sm text-gray-600">{key}</span>
                          <p className="font-semibold text-gray-800">{value as string}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Sizes and Pricing */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Available Sizes and Prices</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.sizes.map((item: any, index: number) => (
                    <motion.div
                      key={item.size}
                      whileHover={{ scale: 1.02 }}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        index === 0 ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-yellow-300"
                      }`}
                    >
                      {index === 0 && (
                        <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs">Popular</Badge>
                      )}
                      <div className="text-center">
                        <p className="font-semibold text-gray-800">{item.size}</p>
                        <p className="text-xl font-bold text-yellow-600">Rs. {item.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          {product.features && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.features.map((feature: any, index: number) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                      <feature.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits and Applications */}
          {(product.benefits || product.applications) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Benefits */}
                {product.benefits && (
                  <div className="bg-white rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications */}
                {product.applications && (
                  <div className="bg-white rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Applications</h3>
                    <ul className="space-y-3">
                      {product.applications.map((application: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Technical Specifications */}
          {product.specifications && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="font-semibold text-gray-800">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
