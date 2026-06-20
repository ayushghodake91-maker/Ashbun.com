import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, BarChart3, Megaphone, PenTool, Search, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Home() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary-light" />,
      title: 'SEO Optimization',
      description: 'Dominate search rankings with our data-driven SEO strategies that drive organic, high-intent traffic.'
    },
    {
      icon: <Megaphone className="w-8 h-8 text-accent" />,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty across all major social platforms with creative campaigns.'
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary-light" />,
      title: 'Content Creation',
      description: 'Compelling copy, striking visuals, and video content that tells your brand story and converts.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Performance Ads',
      description: 'Maximize your ROI with targeted paid campaigns across Google, Meta, and LinkedIn.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light via-transparent to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary-light font-medium text-sm mb-8 border border-blue-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-light"></span>
                </span>
                Award-Winning Digital Agency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-dark leading-[1.1]">
                Scale Your Brand With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Precision</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                We are Ashbun, a top-tier digital marketing agency. We combine innovative strategy, creative excellence, and rigorous analytics to deliver measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  No long-term contracts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Data-driven results
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square max-w-lg w-full">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzgxOTM5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Marketing Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Average Client Growth</p>
                      <p className="text-2xl font-bold text-dark">+245% ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Solutions for Modern Brands</h2>
            <p className="text-lg text-slate-600">
              We don't just execute tactics; we build integrated marketing ecosystems designed to dominate your market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Results.</h2>
              <p className="text-lg text-slate-400">
                Don't just take our word for it. See how we've helped ambitious brands scale their revenue and dominate their industries.
              </p>
            </div>
            <Button variant="accent" className="shrink-0">View All Case Studies</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-dark-light border border-slate-800">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3ODE5MzkyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tech Startup Campaign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-medium border border-primary/30">SEO</span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/30">Content</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">TechFlow B2B SaaS Growth</h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">How we increased organic leads by 315% in 6 months for an enterprise SaaS platform.</p>
                  <div className="flex items-center gap-8 border-t border-slate-700/50 pt-4">
                    <div>
                      <p className="text-sm text-slate-400">Traffic Increase</p>
                      <p className="text-xl font-bold text-white">+420%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Cost per Lead</p>
                      <p className="text-xl font-bold text-green-400">-45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-dark-light border border-slate-800">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc4MTkzOTIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="E-commerce Success"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-medium border border-primary/30">Paid Ads</span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/30">CRO</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lumina E-Commerce Scale</h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">Scaling ROAS from 2x to 5.5x while doubling monthly ad spend for a premium D2C brand.</p>
                  <div className="flex items-center gap-8 border-t border-slate-700/50 pt-4">
                    <div>
                      <p className="text-sm text-slate-400">Revenue Growth</p>
                      <p className="text-xl font-bold text-white">+$2.4M</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Return on Ad Spend</p>
                      <p className="text-xl font-bold text-green-400">5.5x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to dominate your market?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the industry leaders who trust Ashbun to drive their digital growth. Let's discuss your custom strategy today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary-light hover:bg-blue-50">
              Request Free Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:border-white">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}