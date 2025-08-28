"use client";

import {
  companyLinks,
  legalLinks,
  quickLinks,
  socialLinks,
} from "@/lib/globalConst";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  Store,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={`flex w-full bg-gradient-to-b from-gray-50 via-[#ddebf8] to-[#a0cdf7] text-black relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-8
        100/50 to-gray-200/50"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat bg-[length:60px_60px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='b' patternUnits='userSpaceOnUse' width='60' height='60'%3e%3ccircle cx='30' cy='30' r='2' fill='%23ffffff' fillOpacity='0.02'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23b)'/%3e%3c/svg%3e")`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 lg:px-6 py-16 z-10">
        <div className="space-y-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> */}

          {/* Company Info */}
          <div className="grid space-y-2 grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4 group">
                <PawPrint className="h-10 w-10 text-blue-400 group-hover:text-orange-400 transition-colors duration-300" />
                <span className="text-3xl font-bold text-blue-400">
                  pets<span className="text-blue-950">-on-</span>planes
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Making pet travel safe, comfortable, and stress-free worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-8 w-8" />
                  </Link>
                ))}
              </div>
            </div>
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

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-[#ff8a6a]">Share this page</h4>
              <div className="flex space-x-1">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-300 mt-8 pt-8">
                <p className="text-[#1d2362] text-sm">
                  &copy; {new Date().getFullYear()} Pets-On-Planes. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
