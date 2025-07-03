'use client';

import { Button } from '@/components/ui/button';
import { Phone, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Trustpilot Bar */}
      <div className="bg-green-50 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="text-sm text-green-700 font-medium">Trustpilot</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">✈</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600">
                  PET<span className="text-blue-400">AIR</span>
                </h1>
                <p className="text-xs text-gray-600">INTERNATIONAL PET TRAVEL</p>
              </div>
            </div>
            
            {/* British Airways Partnership */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-red-600">BRITISH AIRWAYS</span>
              <div className="w-8 h-4 bg-red-600 rounded-sm"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Flying pets safely to over</p>
              <p className="font-semibold">300 global destinations</p>
              <p className="text-sm text-gray-600">Over 52,000 pets travelled</p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600">Start your journey to stress-free pet travel</p>
              <div className="flex items-center gap-2 text-xl font-bold">
                <Phone className="w-5 h-5" />
                <span>+44 (0)1725 551 124</span>
              </div>
              <p className="text-sm text-gray-600">PetAir agents are available 8am to 5pm (UK)</p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              GET A PET TRAVEL QUOTE
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex items-center gap-8">
          <Button variant="outline" className="rounded-full border-orange-500 text-orange-500">
            QUOTE
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            HOME
          </Button>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">TRAVEL PACKAGES</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">DESTINATIONS</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">IMPORTING PETS</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">WHY PETAIR?</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">TRAVEL TIPS</a>
        </nav>
      </div>
    </header>
  );
}