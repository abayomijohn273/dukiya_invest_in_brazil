"use client"

import { Button } from "@//components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Facebook, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-02-03T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ months, days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[56px] md:w-[70px]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{timeLeft.months}</span>
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase tracking-wider">Months</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[56px] md:w-[70px]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase tracking-wider">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[56px] md:w-[70px]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{timeLeft.hours}</span>
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase tracking-wider">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[56px] md:w-[70px]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{timeLeft.minutes}</span>
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase tracking-wider">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[56px] md:w-[70px]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{timeLeft.seconds}</span>
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase tracking-wider">Seconds</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
      {/* Social media icons - fixed on right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4"
      >
        <a
          href="https://web.facebook.com/D%C3%BAk%C3%ACy%C3%A1-Investments-100178562120702/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#fedf00] hover:text-black transition-all"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/5511933666182"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#fedf00] hover:text-black transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/dukiya_ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#fedf00] hover:text-black transition-all"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-sm md:text-base tracking-wider uppercase font-medium"
            >
              February 3rd - 6th, 2026 • São Paulo, Brazil
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Gateway to Brazil's <span className="text-[#fedf00]">Real Estate</span> Market
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Join Nigerian investors at Brazil's premier conference. Discover undervalued properties, exponential
              opportunities, and strategic partnerships in Latin America's economic powerhouse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-white/70 text-sm uppercase tracking-wider mb-4">Event Starts In</p>
              <CountdownTimer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("register")}
                className="cursor-pointer w-full md:w-auto bg-[#fedf00] hover:bg-[#fedf00]/90 text-black font-semibold px-8 py-6 text-base rounded-full group transition-all"
              >
                Register Now
                <span className="ml-2 w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#fedf00]" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("why-invest")}
                className="cursor-pointer w-full md:w-auto border-2 border-white text-primary hover:bg-white hover:text-black px-8 py-6 text-base rounded-full transition-all"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Christ the Redeemer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/christ-the-redeemer-statue-rio-de-janeiro-brazil-d.jpg"
                alt="Christ the Redeemer statue in Rio de Janeiro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
