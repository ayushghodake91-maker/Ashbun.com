import React from 'react';
import { Link } from 'react-router';
import { Rocket, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-slate-300 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-primary-light text-white p-2 rounded-lg">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl text-white">Ashbun.</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Top-tier digital marketing agency transforming brands through data-driven strategies and creative excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Content Creation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pay-Per-Click Ads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span>123 Innovation Drive,<br />Tech District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <span>hello@ashbun.agency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ashbun Digital Marketing Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}