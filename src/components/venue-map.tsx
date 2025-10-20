"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"

export default function VenueMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white">
      <div className="container mx-auto px-4 py-24 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Heading and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-gray-900 mb-6 leading-tight">Event Location</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join us at the heart of São Paulo's business district for an exclusive investment conference. Network with
              industry leaders and explore Brazil's real estate opportunities.
            </p>
          </motion.div>

          {/* Right side - Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Date Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-tertiary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-tertiary" />
              </div>
              <h3 className="text-xl font-display text-gray-900 mb-3">Event Date</h3>
              <p className="text-4xl font-display text-primary mb-2">Dec 3 - 7</p>
              <p className="text-gray-600">2025</p>
            </div>

            {/* Venue Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-display text-gray-900 mb-3">Our Venue</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Av. Andrômeda, 885
                <br />
                11º andar Torre Corporate
                <br />
                São Paulo, Brazil
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3226005555025!2d-46.86741712384851!3d-23.484887058788747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b2a4c54e01%3A0xcbc88f74b64707ec!2sAv.%20Andr%C3%B4meda%2C%20885%20-%2011%20andar%20-%20Alphaville%20Empresarial%2C%20Barueri%20-%20SP%2C%2006473-000%2C%20Brazil!5e0!3m2!1sen!2sng!4v1760907702069!5m2!1sen!2sng"
          width="100%"
          height="600"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />

        {/* Get Directions Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Av.+Andrômeda,+885+-+11+andar+-+Alphaville+Empresarial,+Barueri+-+SP,+06473-000,+Brazil"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 left-8 bg-tertiary hover:bg-tertiary/90 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Directions
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
