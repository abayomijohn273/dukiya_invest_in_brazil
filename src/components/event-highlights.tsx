"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    number: "01",
    title: "Exclusive Access",
    description:
      "Insider knowledge on Brazil's real estate market. Get direct access to off-market opportunities and investment insights.",
    bgColor: "#fef7ed",
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="80" r="35" stroke="#002776" strokeWidth="3" fill="none" />
        <path d="M100 115 L100 160" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 135 L85 145" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 135 L115 145" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <circle cx="92" cy="75" r="4" fill="#002776" />
        <circle cx="108" cy="75" r="4" fill="#002776" />
        <path d="M90 90 Q100 95 110 90" stroke="#002776" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M70 50 L85 65" stroke="#fedf00" strokeWidth="3" strokeLinecap="round" />
        <path d="M130 50 L115 65" stroke="#fedf00" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="50" r="5" fill="#fedf00" />
        <circle cx="130" cy="50" r="5" fill="#fedf00" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Visa Support",
    description:
      "Guided process for seamless entry into Brazil. We handle the paperwork so you can focus on opportunities.",
    bgColor: "#f5f5f5",
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="40" y="60" width="120" height="80" rx="8" stroke="#002776" strokeWidth="3" fill="none" />
        <rect x="50" y="70" width="40" height="50" rx="4" fill="#fedf00" opacity="0.3" />
        <line x1="100" y1="80" x2="140" y2="80" stroke="#002776" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="95" x2="140" y2="95" stroke="#002776" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="110" x2="130" y2="110" stroke="#002776" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="95" r="15" fill="#009b3a" opacity="0.3" />
        <path
          d="M65 95 L68 98 L75 88"
          stroke="#009b3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Partnerships",
    description: "Meet developers and expand your portfolio. Connect with Brazil's leading real estate developers.",
    bgColor: "#fef7ed",
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="80" cy="80" r="25" stroke="#002776" strokeWidth="3" fill="none" />
        <circle cx="120" cy="80" r="25" stroke="#002776" strokeWidth="3" fill="none" />
        <path d="M80 105 L80 140 L60 160" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 105 L120 140 L140 160" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 120 L70 130" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 120 L90 130" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 120 L110 130" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 120 L130 130" stroke="#002776" strokeWidth="3" strokeLinecap="round" />
        <path d="M90 90 L110 90" stroke="#fedf00" strokeWidth="4" strokeLinecap="round" />
        <circle cx="90" cy="90" r="4" fill="#fedf00" />
        <circle cx="110" cy="90" r="4" fill="#fedf00" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Networking",
    description: "High-value connections with industry leaders. Build relationships that last beyond the conference.",
    bgColor: "#f5f5f5",
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="60" r="20" stroke="#002776" strokeWidth="3" fill="none" />
        <circle cx="60" cy="120" r="18" stroke="#002776" strokeWidth="3" fill="none" />
        <circle cx="140" cy="120" r="18" stroke="#002776" strokeWidth="3" fill="none" />
        <circle cx="80" cy="160" r="16" stroke="#002776" strokeWidth="3" fill="none" />
        <circle cx="120" cy="160" r="16" stroke="#002776" strokeWidth="3" fill="none" />
        <line x1="100" y1="80" x2="70" y2="105" stroke="#fedf00" strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="80" x2="130" y2="105" stroke="#fedf00" strokeWidth="3" strokeLinecap="round" />
        <line x1="65" y1="135" x2="85" y2="145" stroke="#009b3a" strokeWidth="2" strokeLinecap="round" />
        <line x1="135" y1="135" x2="115" y2="145" stroke="#009b3a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Success Stories",
    description:
      "Testimonials from Nigerians investing successfully in Brazil. Learn from those who've already made the journey.",
    bgColor: "#fef7ed",
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M100 40 L115 75 L155 80 L125 108 L133 148 L100 130 L67 148 L75 108 L45 80 L85 75 Z"
          stroke="#fedf00"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="100" cy="100" r="35" stroke="#002776" strokeWidth="3" fill="none" />
        <path
          d="M85 95 L95 105 L115 85"
          stroke="#009b3a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
]

export default function EventHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="highlights" ref={ref} className="py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider">Event Highlights</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
            Exclusive benefits designed for{" "}
            <span className="relative inline-block">
              <span className="text-primary">Nigerian investors</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-8 rounded-3xl transition-all duration-300"
              style={{
                backgroundColor: highlight.bgColor,
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-display font-bold" style={{ color: "#002776", opacity: 0.15 }}>
                  {highlight.number}
                </span>
              </div>

              <h3 className="text-2xl font-display mb-3" style={{ color: "#002776" }}>
                {highlight.title}
              </h3>

              <p className="leading-relaxed mb-8" style={{ color: "#46516b" }}>
                {highlight.description}
              </p>

              <div className="w-full h-48 flex items-center justify-center">{highlight.illustration}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
