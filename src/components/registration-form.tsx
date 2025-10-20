"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function RegistrationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for registering! We will contact you soon.")
  }

  const handleDownloadBrochure = () => {
    // Handle brochure download
    alert("Brochure download will start shortly!")
  }

  return (
    <section id="register" ref={ref} className="py-24 xl:py-32 bg-gradient-to-br from-[#0a1628] via-[#1a2847] to-[#0a1628]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            SECURE YOUR <span className="text-secondary">SEAT</span> TODAY
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8">
            Don't just watch Brazil's growth story — BE A PART OF IT!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#eeeff4] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-display text-primary mb-2 text-center">Register for the Conference</h3>

          <iframe aria-label='InvestBrazil2025 Registration' frameBorder="0" height={1000} width={"100%"} className="border-none" src='https://forms.zohopublic.com/adminduki1/form/InvestBrazil2025Registration/formperma/bzzqBRFui3UVTwnR8F2reibUAJ71SvfCVXD42oDmVr4'></iframe>

          <p className="text-sm text-gray text-center mt-2">
            By registering, you agree to receive updates about the Invest in Brazil Conference 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
