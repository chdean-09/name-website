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
                    Scheduled Setup
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 max-lg:text-center">
                    Easily set a schedule for your smart lock. Configure automatic locking and unlocking times to fit your routine.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[8cqw] border-x-[2cqw] border-t-[2cqw] border-black shadow-2xl">
                    <Image
                      width={700}
                      height={700}
                      alt="app-picture2"
                      src="/app-picture2.jpg"
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

      {/* Prototype Showcase Section */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400 mb-4">From Concept to Reality</h2>
            <p className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">Meet the Prototype</p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our working prototype showcases the engineering excellence behind N.A.M.E&apos;s smart lock technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Closed Prototype */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/prototype-closed.jpg"
                  alt="N.A.M.E Smart Lock Prototype - Closed"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sleek Exterior Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Clean, minimalist housing designed for seamless integration with any door. Compact form factor with
                    durable construction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Open Prototype */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/prototype-open.png"
                  alt="N.A.M.E Smart Lock Prototype - Internal Components"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Advanced Internal Components
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Powered by an ESP32 and lithium battery, this prototype uses relays to drive a solenoid lock with real-time door status from a magnetic sensor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Key Technical Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ESP32 Microcontroller</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Wi-Fi & Bluetooth-enabled dual-core chip for secure device control and real-time communication.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solenoid Lock + Relay</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    High-power solenoid lock triggered by a relay for rapid, reliable locking and unlocking.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5000mAh Battery</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Long-lasting 18650 lithium battery ensures continued operation even during power loss.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Door Status Sensor</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Magnetic contact sensor detects if the door is open or closed in real-time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400 mb-4">Choose Your Model</h2>
            <p className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Simple, Transparent Pricing
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the perfect N.A.M.E smart lock for your home security needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lite Version */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="p-8 pt-12">
                  <div className="text-center mb-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-700">
                      <Image
                        src="/lite.png"
                        alt="N.A.M.E Lite"
                        width={180}
                        height={180}
                        className="rounded-2xl"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">N.A.M.E Lite</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for apartments and smaller doors</p>
                    <div className="text-center">
                      <span className="text-4xl font-black text-gray-900 dark:text-white">₱2,499</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Compact design (30% smaller)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">3000mAh battery (3-4 months)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Wi-Fi & Bluetooth connectivity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Mobile app control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Real-time notifications</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Basic access management</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                    Choose Lite
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Standard Version */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-bl-2xl">
                  <span className="text-sm font-semibold">RECOMMENDED</span>
                </div>
                <div className="p-8 pt-12">
                  <div className="text-center mb-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-700">
                      <Image
                        src="/standard.png"
                        alt="N.A.M.E Standard"
                        width={180}
                        height={180}
                        className="rounded-2xl"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">N.A.M.E Standard</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Full-featured smart lock for maximum security
                    </p>
                    <div className="text-center">
                      <span className="text-4xl font-black text-gray-900 dark:text-white">₱2,799</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Robust full-size design</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">5000mAh battery (6-8 months)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Wi-Fi & Bluetooth connectivity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Advanced mobile app control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Real-time notifications & alerts</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Advanced access management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Extended wireless range</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Activity history & analytics</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                    Choose Standard
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Lock Device</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Complete hardware unit ready for installation
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile App</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">iOS and Android app for complete control</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1-Year Warranty</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Full hardware and software support included
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo-only.png" alt="N.A.M.E Logo" width={40} height={40} className="rounded-lg" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
                  N.A.M.E
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Next-gen Access Management Entry - Revolutionizing home security with smart, connected door lock
                technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Prototype
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Specifications
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 N.A.M.E. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
