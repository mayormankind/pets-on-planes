'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pet travel, your way – no hidden costs!
          </h2>
          <p className="text-xl text-blue-600 max-w-4xl mx-auto">
            Every pet relocation package comes with the same trusted care and VIP treatment, but you choose the 
            option that suits your pet, your plans, and your budget. Total transparency, complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traveller Package */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Badge className="bg-gray-800 text-white">ENTRY LEVEL</Badge>
            </div>
            <CardHeader className="text-center pt-16 pb-8">
              <CardTitle className="text-4xl font-bold text-blue-500 mb-2">
                TRAVELLER
              </CardTitle>
              <p className="text-gray-600">NO FRILLS PET TRAVEL</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-gray-700 mb-8 text-center">
                An entry level package ensuring your pet's safe relocation. Ideal for 
                straightforward moves with essential support.
              </p>
              <div className="text-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
                  FIND OUT MORE
                </Button>
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </Card>

          {/* Premium Package */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-800 text-white">BEST VALUE</Badge>
            </div>
            <CardHeader className="text-center pt-16 pb-8">
              <CardTitle className="text-4xl font-bold text-blue-800 mb-2">
                PREMIUM
              </CardTitle>
              <p className="text-gray-600">ALL INCLUSIVE PET TRAVEL</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-gray-700 mb-8 text-center">
                This package offers a balance of features and support for pet 
                relocations to 300+ global destinations. Perfect for those seeking a 
                comprehensive service.
              </p>
              <div className="text-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                  FIND OUT MORE
                </Button>
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}