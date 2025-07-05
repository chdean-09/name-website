import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  // const features = [
  //   {
  //     name: 'Push to deploy.',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //     icon: Lock,
  //   },
  //   {
  //     name: 'SSL certificates.',
  //     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  //     icon: BellRing,
  //   },
  //   {
  //     name: 'Database backups.',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //     icon: CalendarCheck,
  //   },
  // ]

  const words = [
    {
      text: "N.A.M.E",
      className: "text-blue-500 dark:text-blue-500 text-4xl md:text-[6rem] font-bold mt-1 leading-none",
    },
  ];

  return (
    <div className="overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="-mt-10 text-4xl font-semibold text-black dark:text-white">
              Introducing <br />
              <TypewriterEffect words={words} />
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
      <div className="pb-24 sm:pb-32 -mt-12 sm:mt-0">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">Smart & Secure</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything you need for a smarter door lock
          </p>
          <p className="mt-4 text-center text-base text-gray-600 dark:text-gray-400">
            Powered by <strong className="text-gray-900 dark:text-white">N.A.M.E</strong> — <em>
              <span className="font-bold text-gray-900 dark:text-white">N</span>ext-gen {" "}
              <span className="font-bold text-gray-900 dark:text-white">A</span>ccess {" "}
              <span className="font-bold text-gray-900 dark:text-white">M</span>anagement {" "}
              <span className="font-bold text-gray-900 dark:text-white">E</span>ntry
              </em>
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
                    Lock and unlock your door from anywhere using your smartphone. Real-time status updates and intuitive UI.
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
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt="Real-Time Performance"
                    src="/realtime-sync.png"
                    className="w-full max-lg:max-w-xs"
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
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt="Security"
                    src="/security-esp.png"
                    className="h-[min(152px,40cqw)] object-cover"
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
                    Easily connect your smart lock to your home Wi-Fi and mobile devices. Setup takes minutes with Bluetooth pairing and auto-network discovery.
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
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
