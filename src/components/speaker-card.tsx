"use client"

import { Dialog, Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Fragment, useState } from "react"

interface Speaker {
  name: string
  title: string
  image: string
  shortBio: string
  fullBio: string
}

interface SpeakerCardProps {
  speaker: Speaker
  index: number
  isInView: boolean
}

export default function SpeakerCard({ speaker, index, isInView }: SpeakerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative h-[500px] perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of card */}
          <div className="absolute inset-0 backface-hidden">
            <div className="relative w-full h-full overflow-hidden rounded-lg group">
              <img
                src={speaker.image || "/placeholder.svg?height=500&width=400"}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display mb-2">{speaker.name}</h3>
                <p className="text-gray-300 text-sm">{speaker.title}</p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0a1628] to-[#1a2847] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display text-white mb-2">{speaker.name}</h3>
              <p className="text-secondary font-medium mb-4 text-sm">{speaker.title}</p>
              <p className="text-gray-300 leading-relaxed text-sm">{speaker.shortBio}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(true)
              }}
              className="bg-secondary text-black px-6 py-3 rounded hover:bg-secondary/90 transition-colors text-sm font-bold"
            >
              Read More
            </button>
          </div>
        </div>
      </motion.div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex h-screen flex-col bg-white shadow-xl">
                      {/* Header with close button */}
                      <div className="px-8 py-6 w-full">
                        <div className="flex items-start justify-end">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="text-black transition-colors"
                          >
                            <X className="w-8 h-8" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto px-8 pb-8">
                        {/* Large profile image */}
                        <div className="mb-8">
                          <img
                            src={speaker.image || "/placeholder.svg?height=400&width=400"}
                            alt={speaker.name}
                            className="w-32 h-32 lg:w-48 lg:h-48 object-cover object-top grayscale"
                          />
                        </div>

                        {/* Speaker details */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-display text-[#1a2847] mb-1">{speaker.name}</h3>
                            <p className="text-primary font-bold text-base md:text-lg">{speaker.title}</p>
                          </div>

                          <div className="text-gray-700 leading-relaxed space-y-4">
                            <p className="text-base">{speaker.fullBio}</p>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="w-full bg-primary text-white px-8 py-4 hover:bg-primary/90 transition-colors font-bold text-lg"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
