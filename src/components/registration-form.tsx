"use client"

import type React from "react"

import { Button } from "@//components/ui/button"
import { Input } from "@//components/ui/input"
import { Label } from "@//components/ui/label"
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
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-display text-primary mb-8 text-center">Register for the Conference</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-gray mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-gray mb-2 block">
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full"
                placeholder="Your company name"
              />
            </div>

            <div>
              <Label htmlFor="role" className="text-gray mb-2 block">
                Your Role
              </Label>
              <Input
                id="role"
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full"
                placeholder="e.g., Investor, Developer, Real Estate Professional"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6 cursor-pointer"
            >
              Register Now
            </Button>
          </form>

          <p className="text-sm text-gray text-center mt-6">
            By registering, you agree to receive updates about the Invest in Brazil Conference 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
