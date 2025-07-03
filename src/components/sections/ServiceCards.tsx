'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      badge: 'NEW',
      title: 'Last-Minute Pet Travel?',
      subtitle: 'Quick turnaround now available!',
      description: 'Safe, swift and stress-free pet travel to the USA, Canada and Europe',
      buttonText: 'FAST TRACK QUOTE',
      bgColor: 'bg-blue-500',
      image: '🐕'
    },
    {
      id: 2,
      title: '"What if they get anxious before the flight?"',
      description: 'COMPLETE CARE',
      subtitle: 'www.petair.co.uk',
      buttonText: 'LEARN MORE',
      bgColor: 'bg-orange-500',
      image: '🐕'
    },
    {
      id: 3,
      title: 'Interest-Free Payments',
      subtitle: 'for overseas pet travel',
      description: 'Choose weekly or monthly instalments that suit your budget',
      buttonText: 'APPLY NOW',
      bgColor: 'bg-green-500',
      image: '💳'
    },
    {
      id: 4,
      title: 'REAL-TIME JOURNEY UPDATES',
      subtitle: 'Track your pet in real time',
      description: 'Get live updates and photos throughout your pet\'s journey',
      buttonText: 'LEARN MORE',
      bgColor: 'bg-blue-600',
      image: '📱'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className={`${service.bgColor} text-white overflow-hidden relative`}>
              <CardContent className="p-6">
                {service.badge && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mb-3 inline-block">
                    {service.badge}
                  </span>
                )}
                
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-sm mb-3 opacity-90">{service.subtitle}</p>
                )}
                <p className="text-sm mb-4 opacity-80">{service.description}</p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-white rounded-full"
                >
                  {service.buttonText}
                </Button>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 text-6xl opacity-20">
                  {service.image}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}