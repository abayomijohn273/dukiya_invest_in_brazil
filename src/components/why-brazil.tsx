"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const stats = [
  {
    value: "6.5%",
    label: "Annual Real Estate Growth",
    description: "Real estate growth projected at 6.5% annually, offering exponential returns on investment.",
  },
  {
    value: "#1",
    label: "Largest Economy",
    description: "Brazil is the largest economy in Latin America with a thriving real estate market.",
  },
  {
    value: "Strong",
    label: "Trade Agreements",
    description: "Favorable exchange rate and strong Nigeria-Brazil trade agreements create unique opportunities.",
  },
]

export default function WhyBrazil() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-invest" ref={ref} className="">
      <div className="bg-gray-50 py-28 lg:py-32 xl:py-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image on left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                <Image src="/modern-brazil-city-skyline-sao-paulo-buildings.jpg" alt="Brazil City Skyline" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Text content on right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="uppercase inline-block px-6 py-2 rounded-full bg-white border border-gray-300 text-gray-600 font-semibold tracking-wider text-sm mb-6">
               InvestBrazil2025
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why <span className="text-primary">Brazil?</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                In 2024, <strong>Lukman Shobowale, Cofounder Dukiya Investment</strong> visited Brazil. What they discovered was far
                beyond beaches and football – Brazil is a{" "}
                <strong>global powerhouse in agriculture and real estate.</strong>
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                With <strong>undervalued properties</strong> and <strong>exponential off-plan opportunities,</strong>{" "}
                Brazil is the world's undiscovered gem. This event brings{" "}
                <strong>Nigerian investors closer to unlocking Brazil's hidden wealth.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-[#0a1628] via-[#0d1f3a] to-[#1a2847] py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Large background image */}
            <div className="relative mb-16">
              <div className="absolute inset-0 w-full h-[500px] rounded-3xl overflow-hidden opacity-30">
                <Image
                  src="/brazil-sao-paulo-modern-architecture-cityscape-aer.jpg"
                  alt="Brazil Investment Opportunity"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Heading overlay on image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative pt-16 pb-32 px-8 xl:px-12"
              >
                <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-wider text-sm mb-6">
                  INVESTMENT OPPORTUNITY
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight">
                  Why investors trust <span className="text-[#fedf00]">Brazil</span>
                </h3>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative -mt-16 pb-6 px-2 md:px-4 lg:px-6 xl:px-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#002776] mb-4">{stat.value}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{stat.label}</h4>
                  <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
