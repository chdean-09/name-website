"use client"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Smartphone, Wifi, Lock } from "lucide-react"

export default function Home() {
  const words = [
    {
      text: "N.A.M.E",
      className: "relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent text-4xl md:text-[6rem] font-black mt-1 leading-none",
    },
  ]

  const acronymLetters = [
    {
      letter: "N",
      word: "Next-gen",
      description: "Cutting-edge technology for modern homes",
      icon: Smartphone,
      color: "from-blue-500 to-purple-600",
    },
    {
      letter: "A",
      word: "Access",
      description: "Seamless entry control at your fingertips",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
    },
    {
      letter: "M",
      word: "Management",
      description: "Intelligent monitoring and administration",
      icon: Shield,
      color: "from-orange-400 to-pink-400",
    },
    {
      letter: "E",
      word: "Entry",
      description: "Smart door solutions for secure living",
      icon: Wifi,
      color: "from-pink-400 to-purple-500",
    },
  ]

  return (
    <div className="overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="-mt-10 text-4xl font-semibold">
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-white bg-clip-text text-transparent">
                Introducing
              </span>
              <br />
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl rounded-lg"></div>
                <TypewriterEffect words={words} />
              </div>
            </h1>
          </>
        }
      >
        <Image
          src={`/logo.png`}
          alt=""
          height={720}
          width={1400}
          className="bg-white mx-auto rounded-2xl object-contain h-full object-center p-20"
          draggable={false}
        />
      </ContainerScroll>

      {/* Enhanced N.A.M.E Section */}
      <div className="pb-24 sm:pb-32 -mt-12 sm:mt-0 bg-gradient-to-br">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400 mb-4">
              What does N.A.M.E stand for?
            </h2>
            <p className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">More than just a name</p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every letter represents our commitment to revolutionizing home security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {acronymLetters.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group-hover:scale-105">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 mx-auto`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                      >
                        {item.letter}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.word}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Animated Full Acronym */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-slate-700"
          >
            <div className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
              N.A.M.E
            </div>
            <div className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-blue-600 dark:text-blue-400">Next-gen</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">Access</span>{" "}
              <span className="text-orange-500 dark:text-orange-400">Management</span>{" "}
              <span className="text-pink-500 dark:text-pink-400">Entry</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The future of home security is here. Experience the perfect blend of innovation, accessibility,
              intelligent management, and seamless entry control.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-blue-600 dark:text-blue-400">Smart & Secure</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything you need for a smarter door lock
          </p>
          <p className="mt-4 text-center text-base text-gray-600 dark:text-gray-400">
            Powered by <strong className="text-gray-900 dark:text-white">N.A.M.E</strong> — your complete smart home
            security solution
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Mobile Control */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-indigo-100 dark:bg-indigo-900/80">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                    Mobile Control
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 max-lg:text-center">
                    Lock and unlock your door from anywhere using your smartphone. Real-time status updates and
                    intuitive UI.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[8cqw] border-x-[2cqw] border-t-[2cqw] border-black shadow-2xl">
                    <Image
                      width={700}
                      height={700}
                      alt=""
                      src="/app-picture.jpg"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>
            {/* Real-Time Sync */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-cyan-100 dark:bg-cyan-900/80">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                    Real-Time Sync
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 max-lg:text-center">
                    WebSockets keep your device state and mobile app perfectly in sync—no refresh needed.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2 justify-center">
                  <Image
                    alt="Real-Time Performance"
                    width={200}
                    height={200}
                    src="/realtimesync.gif"
                    className="h-[min(152px,40cqw)] object-contain"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>
            {/* Trusted Security */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-rose-100 dark:bg-rose-900/80">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                    Trusted Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 max-lg:text-center">
                    Secure pairing, HTTPS communication, and user-specific access ensure your home is always protected.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-6 justify-center">
                  <Image
                    alt="Security"
                    width={400}
                    height={400}
                    src="/security.png"
                    className="h-[min(152px,40cqw)] object-contain"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>
            {/* Seamless Integration */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] bg-emerald-100 dark:bg-emerald-900/80">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                    Seamless Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 max-lg:text-center">
                    Easily connect your smart lock to your home Wi-Fi and mobile devices. Setup takes minutes with
                    Bluetooth pairing and auto-network discovery.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[8cqw] border-x-[2cqw] border-t-[2cqw] border-black shadow-2xl">
                    <Image
                      width={700}
                      height={700}
                      alt="placeholder"
                      src="/"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
