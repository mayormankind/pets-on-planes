'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Worldwide pet travel made easy!
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Whether relocating, taking a holiday, or travelling for work – 
              <span className="font-semibold"> we've got you covered.</span>
            </p>
            <p className="text-gray-600 mb-8">
              From doorstep collection to a happy reunion, your pet's journey is stress-free, safe, 
              and full of VIP treatment every step of the way.
            </p>

            {/* Price Guarantee Badge */}
            <div className="relative inline-block mb-8">
              <div className="bg-red-600 text-white px-6 py-4 rounded-full transform rotate-12">
                <div className="text-center">
                  <p className="text-sm font-bold">MOBILE NOT TO</p>
                  <p className="text-lg font-bold">PRICE</p>
                  <p className="text-lg font-bold">GUARANTEED</p>
                  <p className="text-sm">BEATEN ON LIKE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="bg-orange-500 text-white p-8 rounded-2xl shadow-xl max-w-sm">
            <h3 className="text-2xl font-bold mb-2">Request a pet</h3>
            <h3 className="text-2xl font-bold mb-4">travel quote</h3>
            <p className="mb-6">Start your next adventure with PetAir</p>
            
            <Button 
              variant="outline" 
              className="w-full bg-white text-orange-500 hover:bg-gray-50 border-white rounded-full py-3"
            >
              START YOUR TRAVEL QUOTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}