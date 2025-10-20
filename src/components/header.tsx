"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href={"/"} className="text-2xl font-display text-white">
          InvestBrazil<span className="text-secondary">2025</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("why-invest")}
            className="text-sm font-medium transition-colors text-white hover:text-secondary cursor-pointer"
          >
            Why Invest
          </button>
          <button
            onClick={() => scrollToSection("highlights")}
            className="text-sm font-medium transition-colors text-white hover:text-secondary cursor-pointer"
          >
            Highlights
          </button>
          <button
            onClick={() => scrollToSection("speakers")}
            className="text-sm font-medium transition-colors text-white hover:text-secondary cursor-pointer"
          >
            Speakers
          </button>
          <Button
            onClick={() => scrollToSection("register")}
            variant="outline"
            className="font-medium border-2 border-white text-primary 
            hover:border-secondary hover:bg-secondary hover:text-black rounded-full px-6 
            transition-all ease-in-out duration-300 cursor-pointer"
          >
            Register Now
          </Button>
        </nav>

     
          <Button
            variant="outline"
            onClick={() => scrollToSection("register")}
            className="md:hidden cursor-pointer font-medium transition-all border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-6 bg-transparent"
          >
            Register
          </Button>
      </div>
    </motion.header>
  )
}
