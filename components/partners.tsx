"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import ConcretoLogo from "../public/capital_concreto.svg"
import DukiyaLogo from "../public/dukiya.svg"
import RRLogo from "../public/rr.png"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0C1220]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
            OUR <span className="text-secondary">PARTNERS</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to bring you the best opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <Link href="https://www.dukiyang.com" target="_blank">
            <Image src={DukiyaLogo} alt="Dukiya" className="w-full h-auto max-w-[200px]" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Link href="https://cconcreto.com.br/" target="_blank">
            <Image src={ConcretoLogo} alt="Capital Concreto" className="w-full h-auto max-w-[200px]" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
             <Link href="https://rrproperties.com.br/" target="_blank">
             <Image src={RRLogo} alt="Ricardo Ribeiro Imóveis" className="w-full h-auto max-w-[200px]" />
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
