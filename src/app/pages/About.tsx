import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">
              We are <span className="text-primary-light">Ashbun.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded on the principle that digital marketing should drive measurable business growth, not just vanity metrics. We are a team of strategists, creatives, and data scientists dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758518731296-20e24e58846f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9mZXNzaW9uYWwlMjBhZ2VuY3klMjB0ZWFtfGVufDF8fHx8MTc4MTkzOTIxNXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Ashbun Team"
                className="w-full rounded-2xl shadow-xl aspect-square object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                At Ashbun, we believe in bridging the gap between creative excellence and analytical rigor. In a digital landscape saturated with noise, we help our clients stand out through data-backed strategies that connect with real people.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-primary-light flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance First</h3>
                    <p className="text-slate-600">Every campaign is measured against real business objectives: revenue, leads, and market share.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Agile Innovation</h3>
                    <p className="text-slate-600">We adapt to algorithm updates and market shifts before your competitors even notice them.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">True Partnership</h3>
                    <p className="text-slate-600">We operate as an extension of your internal team, maintaining full transparency and open communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-light mb-2">10+</p>
              <p className="text-slate-400">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">250+</p>
              <p className="text-slate-400">Clients Scaled</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-light mb-2">$50M+</p>
              <p className="text-slate-400">Client Revenue Gen.</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">45</p>
              <p className="text-slate-400">In-house Experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}