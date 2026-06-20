import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">Let's Talk Growth</h1>
          <p className="text-xl text-slate-600">
            Ready to scale your digital presence? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-dark text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-light shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Our Headquarters</p>
                    <p className="text-slate-400">123 Innovation Drive,<br />Tech District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-light shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Call Us</p>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-light shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Email Us</p>
                    <p className="text-slate-400">hello@ashbun.agency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-sm text-slate-400 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">In</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">Tw</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">Ig</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-10 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">What service are you interested in?</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all bg-white"
                >
                  <option>Search Engine Optimization (SEO)</option>
                  <option>Social Media Marketing</option>
                  <option>Content Creation</option>
                  <option>Pay-Per-Click Ads (PPC)</option>
                  <option>Full Service Retainer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Tell us about your goals</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all resize-none"
                  placeholder="We are looking to increase our organic traffic by..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}