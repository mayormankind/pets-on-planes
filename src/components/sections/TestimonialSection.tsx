'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Rupert and Lolly to UAE',
      content: `We couldn't wish for a better agency to fly our dogs to Dubai. From the minute we had an email with Corinne to continuing the paperwork with Sharon, the service has been exceptional. They have taken away all the stress and worry and have taken away all of the painful paperwork (which is a minefield on our hands. They explain the full process that flight and what it's like for the pets and calmed me down when I was too worried. Just incredible all around. They work very closely with Emirates and updated the airline about our deaf friend girl which then continued to Emirates who then updated us about our pets and gave us the temperature of their hold space (26°C ha!)`,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      initials: 'RL'
    },
    {
      name: 'Tilly to South Africa',
      content: `Hi to all,

We just want to send you all a big THANK YOU to Haven Vets and Pet Air for the amazing service and care that went into safely getting Tilly home to South Africa.

We want to thank Susie, Tilly's vet, the girls and all at Haven Vets (Llanelli) for the care you gave to preparing Tilly for her travels.

We want to thank Corinne and all at Pet Air for who took care in arranging her safe travels home to South Africa.

We want to let you know that Tilly safely arrived on Friday night to her very excited mommy and has settled in nicely over the weekend.

Once again thx to all who had a role in getting Tilly home for us.

Kind Regards from Naux, Deon and Tilly 🐾`,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      initials: 'TS'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  </div>
                </div>
                <div className="text-4xl text-gray-300 mb-2">"</div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}