'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8">
          {/* Left side - Travel guides */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Travel guide Australia"
                  width={120}
                  height={160}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-2 left-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✈</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Travel guide Bahrain"
                  width={120}
                  height={160}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-2 left-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✈</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Newsletter signup */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get a <span className="text-orange-500">FREE</span> travel guide for
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              your pet's destination
            </h2>
            <p className="text-gray-600 mb-6">
              Choose your destination and receive our helpful country guide 
              plus regular emails with tips and advice to help get you and 
              your pets ready for their pet travels.
            </p>

            <div className="flex gap-4">
              <Input 
                placeholder="Email" 
                className="flex-1 rounded-full border-gray-300"
              />
              <Select>
                <SelectTrigger className="w-48 rounded-full border-gray-300">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}