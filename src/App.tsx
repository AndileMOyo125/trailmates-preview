import React from 'react'
import { Navbar } from '../components/Navbar'
import { ScrollReveal } from '../components/ScrollReveal'
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  FEATURES,
  INCLUDED,
  NOTES,
} from '../constants'
import { MessageCircle, ArrowRight, Calendar, Leaf } from 'lucide-react'
import type { HikeFeature, IncludedItem } from '../types'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Cinematic Zoom */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hhiking.jpg"
            alt="A person standing on a mountain peak looking out at a valley below."
            className="w-full h-full object-cover"
            style={{ animation: 'hero-zoom 10s infinite linear' }}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
        <style>{`
          @keyframes hero-zoom {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
        `}</style>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="fluid-heading mb-4 leading-tight">Trail Mates</h1>
            <p className="fluid-subheading mb-8 font-light tracking-wide italic">
              Casual Walks • Young Adults • Good Vibes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#walks"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-xl shadow-emerald-900/20"
              >
                Join the Next Walk{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <div className="w-1 h-12 bg-white rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 bg-stone-100 px-4 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-serif text-emerald-900 leading-relaxed italic">
              "Take a break. Get moving. Meet new people."
            </p>
            <div className="mt-8 flex justify-center text-emerald-700">
              <Leaf className="w-8 h-8" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Weekly Walk Days Section */}
      <section id="walks" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              Weekly Walk Days
            </h2>
            <p className="text-xl text-stone-600">
              Join us for a midweek reset or a weekend escape
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Wednesday', 'Friday', 'Saturday', 'Sunday'].map(
                (day: string) => (
                  <div
                    key={day}
                    className="bg-stone-50 border border-stone-200 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-emerald-700 font-bold text-lg">
                      {day}
                    </span>
                  </div>
                )
              )}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <ScrollReveal>
              <div className="space-y-8">
                {FEATURES.map((feature: HikeFeature, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl hover:translate-x-2 transition-transform border border-transparent hover:border-emerald-100"
                  >
                    <div className="text-emerald-600 bg-emerald-50 p-3 rounded-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-lg font-medium text-stone-800">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=1974&auto=format&fit=crop"
                  alt="Happy hikers"
                  className="w-full h-full object-cover aspect-square md:aspect-auto md:h-[600px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hiking Packages Section */}
      <section
        id="hikes"
        className="py-24 px-4 bg-emerald-900 text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Leaf className="w-64 h-64 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Trail Mates Hikes
            </h2>
            <div className="h-1 w-24 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Midweek Reset & Weekend Escape. Whether you're walking for
              fitness, fresh air, or connection — Trail Mates is about showing
              up and enjoying the journey.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-white text-stone-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-0 right-0 p-8 text-stone-100 group-hover:text-emerald-50 transition-colors">
                  <Calendar className="w-16 h-16" />
                </div>

                <h3 className="text-3xl font-serif mb-2">
                  Wednesdays & Saturdays
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-emerald-800">
                    R450
                  </span>
                  <span className="text-stone-500 font-medium">per person</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-stone-200"></span> What's
                    Included
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {INCLUDED.map((item: IncludedItem, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-stone-700"
                      >
                        <div className="text-emerald-600 bg-emerald-50 p-1.5 rounded-md">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-stone-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">
                    Please Note:
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {NOTES.map((note: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-stone-500 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                        {note}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all animate-pulse-custom"
                  >
                    BOOK HERE
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop"
                  className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
                  alt="Hiking path"
                />
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                  className="rounded-2xl shadow-lg aspect-[3/4] object-cover translate-y-8"
                  alt="Mountain view"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-24 px-4 bg-stone-50 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-stone-100">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-stone-600 mb-10">
              Join the WhatsApp group for walk updates, announcements, and
              location details!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-200"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp:{' '}
                {WHATSAPP_NUMBER}
              </a>
            </div>
            <p className="mt-8 text-stone-400 font-medium">
              @trailmates_trailers on Instagram
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Sticky Mobile WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href={WHATSAPP_LINK}
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl animate-pulse-custom"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-stone-900 text-stone-500 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-serif text-white mb-2">Trail Mates</h2>
            <p className="text-sm">Casual Walks • Young Adults • Good Vibes</p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href={WHATSAPP_LINK}
              className="hover:text-white transition-colors"
            >
              Join Group
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Trail Mates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
