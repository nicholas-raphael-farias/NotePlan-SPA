"use client";
import Image from "next/image";
import { Transition } from '@headlessui/react'
import { useInView } from "react-intersection-observer";
import { Button } from '@headlessui/react'

export default function Home() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-10px 0px 0px 0px",
  });

  console.log(inView);
  console.log(entry); 

  const headerClass = () => {
    if (entry === undefined) {
      return "bg-transparent p-5"
    } else {
      return inView ? "bg-transparent p-5" : "bg-white/85 ring-1 ring-stone-100 backdrop-blur-md"
    }
  }

  return (
  <main className={`pt-24 transition-opacity`} ref={ref} >

    <header className={`fixed inset-x-0 top-0 z-20 transition-all ${headerClass()}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2.5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NotePlan</span>
            <Image alt="NotePlan Logo" loading="lazy" width="2776" height="805" decoding="async" data-nimg="1" className="h-8 w-auto" style="color:transparent" srcSet="https://images.prismic.io/noteplan-landing-cms/Zel1BXUurf2G3Ll__iconandname.png?auto=format%2Ccompress&amp;rect=0%2C0%2C2776%2C805&amp;w=3840&amp;fit=max 1x" src="https://images.prismic.io/noteplan-landing-cms/Zel1BXUurf2G3Ll__iconandname.png?auto=format%2Ccompress&amp;rect=0%2C0%2C2776%2C805&amp;w=3840&amp;fit=max"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          <div className="relative" data-headlessui-state="">
            <button className="flex items-center gap-x-1 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-stone-900 hover:bg-stone-400/15" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2opdb7pja:">
              Product
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 flex-none text-stone-400"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <a target="" data-slice-type="navigation_item" data-slice-variation="default" className="rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-stone-900 transition-colors hover:bg-stone-400/15 plausible-event-name=pricing" href="https://noteplan.co/#pricing">Pricing</a>
          <a target="" data-slice-type="navigation_item" data-slice-variation="default" className="rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-stone-900 transition-colors hover:bg-stone-400/15 " href="https://noteplan.co/teams">Teams</a>
          <a target="_blank" data-slice-type="navigation_item" data-slice-variation="default" className="rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-stone-900 transition-colors hover:bg-stone-400/15 " href="https://help.noteplan.co/">Help Center</a>
        </div>
          <div style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            width: "1px",
            height: "0",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            display: "none"
          }}></div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a target="_blank" className="group text-sm inline-flex gap-2 items-center justify-center rounded-md py-1 px-2.5 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-[inset_0_2px_2px_0px,0_2px_2px_0px] shadow-orange-200/50 ring-1 ring-inset ring-orange-600/50 bg-orange-500 text-white transition-colors hover:bg-orange-600 active:bg-orange-700 focus-visible:outline-orange-600 transition-opacity duration-300 ease-in-out invisible opacity-0 plausible-event-name=web-to-app" variant="solidSmall" color="orange" href="/pricing">Try Free For 14 Days →</a>
          </div>
      </nav>
      <div style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            width: "1px",
            height: "0",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            display: "none"
          }}></div>
    </header>


      <div className="relative isolate lg:pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden opacity-80 blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff7f50] to-[#FFBF00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
        <div className="py-12 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star-half-alt text-yellow-500"></i>
                  <span className="ml-2 italic">4.7/5 stars on the App Store</span>
                </div>
                <Transition
                    as="div"
                    appear={true}
                    show={true}
                    enter="transition-filter transition-opacity ease-in-out duration-500"
                    enterFrom="opacity-50 blur-md"
                    enterTo="opacity-100 blur-0"
                    style={{transitionDelay:'0'}}
                  >
                  <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-6xl">
                    <strong className="text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-6xl">
                      Focus More
                    </strong>
                    <br/>
                    <strong className="text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-6xl">
                      Forget Less
                    </strong>
                  </h1>
                </Transition>
                <Transition
                    as="div"
                    appear={true}
                    show={true}
                    enter="transition-filter transition-opacity ease-in-out duration-500"
                    enterFrom="opacity-50 blur-md"
                    enterTo="opacity-100 blur-0"
                    style={{transitionDelay:'0'}}>
                  <p className="mt-6 text-balance text-lg leading-8 text-stone-600">
                    Stay focused and plan better by linking your tasks, notes, and calendar
                    <br/>All in one place, all inside NotePlan.
                  </p>
                </Transition>
              </div>
            </div>


            <div className="items-center">
              <div className="mt-10 flex h-16 items-center justify-center gap-x-6">
                <div className="mt-4 flex justify-center gap-x-6">
                  <div className="relative">
                    <div className="flex items-center gap-x-2">
                      <Button className="group text-xl inline-flex gap-2 items-center justify-center rounded-lg py-2 px-5 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-[inset_0_2px_2px_0px,0_4px_4px_0px] shadow-orange-200/50 ring-1 ring-inset ring-orange-600/50 bg-orange-500 text-white transition-colors hover:bg-orange-600 active:bg-orange-700 focus-visible:outline-orange-600 plausible-event-name=web-to-app">
                        Try Free For 14 Days
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-12">
                <div className="rounded-xl">
                  <div className="scale-105 sm:scale-100">
                  <Transition
                    className="overflow-hidden rounded-[0.75vw] shadow-[0px_4px_16px_rgba(0,0,0,0.1),_0px_8px_24px_rgba(0,0,0,0.1),_0px_16px_56px_rgba(0,0,0,0.1)] shadow-orange-800/5 ring-1 ring-black/5"
                    as="div"
                    appear={true}
                    show={true}
                    enter="transition-filter transition-opacity ease-in-out duration-500"
                    enterFrom="opacity-50"
                    enterTo="opacity-100"
                  >
                      <Image alt="" width="2862" height="2002" data-nimg="1" srcSet="https://images.prismic.io/noteplan-landing-cms/ZhAAgBrFxhpPBVcN_hero_web.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840 1x" src="https://images.prismic.io/noteplan-landing-cms/ZhAAgBrFxhpPBVcN_hero_web.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840" style={{color:"transparent"}}/>
                  </Transition> 




              
                  </div>
                </div>
              </div>


          </div>



        </div>

      </div>

    </div>

  </main>
  );
}
