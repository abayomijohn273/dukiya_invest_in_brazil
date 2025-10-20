"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import SpeakerCard from "./speaker-card"

const speakers = [
  {
    name: "Marcelo Menezes",
    title: "CEO Capital Concreto",
    image: "/marcelo.webp",
    shortBio:
      "Marcelo Menezes, CEO of Capital Concreto, built his empire on big dreams. With over 25 years of experience in the real estate investment market.",
    fullBio:
      "Marcelo Menezes, CEO of Capital Concreto, built his empire on big dreams. With over 25 years of experience in the real estate investment market, he continues to stand out as a visionary leader, driving Capital Concreto forward with expertise and clarity. His leadership has transformed Capital Concreto into one of Brazil's most respected real estate investment companies.",
  },
  {
    name: "Leandro Baran",
    title: "Partner RR Properties",
    image: "/leandro.webp",
    shortBio:
      "Executive with 25+ years in the technology market, including roles as VP at Oracle and SAP, and C-Level at Linx & Dotz.",
    fullBio:
      "Executive with 25+ years in the technology market, including roles as VP at Oracle and SAP, and C-Level at Linx & Dotz. He played a key role in scaling 99, Brazil's first unicorn. Baran was also a partner at SouthRock, where he founded and led SouthRock Lab—the innovation and CVC arm of the group that operated Starbucks and other major brands in Brazil. He also served as CEO of NonStop Produções, the largest influencer marketing agency in the country. Currently, he is the Founder and CEO of TGP & Capital Group, a holding focused on education, consulting, and investments in scalable businesses, applying his proprietary 3Gs & 3Hs frameworks.",
  },
  {
    name: "Ricardo Leite Ribeiro",
    title: "Partner RR Properties",
    image: "/ricardo.webp",
    shortBio:
      "Over 20 years of experience in the investment market, having served as a Senior Investment Consultant in the Capital Markets area.",
    fullBio:
      "Over 20 years of experience in the investment market, having served as a Senior Investment Consultant in the Capital Markets area and Private Commercial Manager at Banco Itaú. He has worked in the commercial area of large companies, such as the Cyrela Group (the largest construction company in Latin America) and Lopes Imobiliária (the largest real estate agency in Brazil). CEO and founder of the real estate agency RR Properties, specializing in real estate investments and high-end properties in São Paulo and the state's coastline, especially in Santos.",
  },
  {
    name: "Lukman Shobowale",
    title: "Co-Founder Dukiya Investments",
    image: "/lukman.webp",
    shortBio:
      "Nigerian real estate entrepreneur and Co-Founder of Dukiya Investments. A graduate of London Business School, Lagos Business School, and Rome Business School.",
    fullBio:
      'Lukman Shobowale is a Nigerian real estate entrepreneur, investment advisor, and business leader. He is the Co-Founder of Dukiya Investments, a fast-rising real estate company that has developed over 15 projects, served more than 2,000 clients, and expanded its presence across four continents. Driven by a passion for innovation and integrity, Lukman has built a career rooted in creating accessible investment opportunities and empowering others to build lasting wealth. A graduate of the London Business School, Lagos Business School, and Rome Business School, Lukman has also earned a Certificate in Professional Leadership Development from The Creative Catalyst, Toronto. He is the author of "The Real Value of Wealth" and has mentored thousands of realtors globally. His work has earned him recognition as one of Nigeria\'s leading young entrepreneurs, including the Future Awards Africa Prize for Entrepreneurship and Entrepreneur of the Year (RECRA 2023).',
  },
  {
    name: "Babatunde Bayo Lawal",
    title: "Co-Founder Dukiya Investments",
    image: "/bayo.webp",
    shortBio:
      "Respected real estate entrepreneur and Co-Founder of Dukiya Investments. An alumnus of Kwara State University, Lagos Business School, and Rome Business School.",
    fullBio:
      "Babatunde Bayo Lawal is a respected real estate entrepreneur, business strategist, and leadership mentor. He is the Co-Founder of Dukiya Investments, one of Nigeria's most dynamic real estate development companies, with over 15 completed projects, 2,000 satisfied clients, and operations across four continents. With over seven years of experience, Bayo has built a reputation for helping individuals and organizations make smart, profitable, and sustainable investment decisions. His vision for Dukiya is anchored on transparency, innovation, and creating real value for every investor. An alumnus of Kwara State University, Lagos Business School, Ajayi Crowther University (MBA), and the Rome Business School, Bayo continues to expand his global perspective on business and leadership. He is the author of two impactful books, including the soon-to-be-launched 'The Edge.' Bayo's commitment to innovation and leadership has positioned him as a voice of influence in Nigeria's real estate sector.",
  },
]

export default function Speakers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="speakers" ref={ref} className="py-24 xl:py-32 bg-gradient-to-br from-[#0a1628] to-[#1a2847]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#0d3b4f] p-8 rounded-lg flex flex-col justify-between"
          >
            <div>
              <div className="text-8xl font-display text-white mb-4">5</div>
              <h2 className="text-3xl font-display text-white mb-4">Keynote Speakers</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Learn from visionary leaders with decades of experience in real estate and investment. Get inspired as
                industry experts share their journeys, strategies, and insights.
              </p>
            </div>
            <button className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#0d3b4f] transition-colors flex items-center justify-center gap-2 group">
              REGISTER NOW
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index + 1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
