"use client"

import { companyLinks, legalLinks, quickLinks, socialLinks } from '@/lib/globalConst';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, PawPrint, Phone, Store, X } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

export default function Footer() {

  return (
    <footer className={`flex w-full bg-gradient-to-b from-gray-50 via-[#ddebf8] to-[#a0cdf7] text-black relative overflow-hidden`}>
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="space-y-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> */}

          {/* Company Info */}
          <div className="grid space-y-2 grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="h-10 w-10 text-blue-400" />
                <span className="text-3xl font-bold text-blue-400">pets<span className='text-blue-950'>-on-</span>planes</span>
              </div>
              <p className="text-gray-400 mb-4">Making pet travel safe, comfortable, and stress-free worldwide.</p>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`} aria-label={social.label}>
                    <social.icon className="h-8 w-8" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            {/* <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Phone className="h-5 w-5 text-[#F2C400]" />
                <Link href="tel:+2349112621533" className="hover:text-white transition-colors">
                  +234 911 262 1533
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Mail className="h-5 w-5 text-[#F2C400]" />
                <Link href="mailto:info@citygatesfoodbank.com" className="hover:text-white transition-colors">
                  info@citygatesfoodbank.com
                </Link>
              </div>
              <div className="flex items-start space-x-3 text-black">
                <MapPin className="h-5 w-5 text-[#F2C400] mt-1 flex-shrink-0" />
                <p className="hover:text-white transition-colors">
                  Suite C06, Afro Mall, Opposite International Building Materials Mkt Dei-Dei, FCT, Abuja</p>
              </div>
            </div> */}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#ff8a6a] mb-6">Services</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-[#1d2362] font-semibold hover:text-[#ff8a6a] transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#ff8a6a] mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-[#1d2362] font-semibold hover:text-[#ff8a6a] transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-[#ff8a6a] mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-[#1d2362] font-semibold hover:text-[#ff8a6a] transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        
             {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-[#ff8a6a]">Share this page</h4>
              <div className="flex space-x-1">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-300 mt-8 pt-8">
                <p className="text-[#1d2362] text-sm">&copy; {new Date().getFullYear()} Pets-On-Planes. All rights reserved.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
