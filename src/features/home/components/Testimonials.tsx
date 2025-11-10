import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      destination: 'USA',
      university: 'Stanford University',
      rating: 5,
      text: 'EduConsult made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable.',
    },
    {
      name: 'Priya Patel',
      destination: 'UK',
      university: 'Oxford University',
      rating: 5,
      text: 'The visa assistance and scholarship guidance I received was exceptional. Highly recommend their services!',
    },
    {
      name: 'Amit Kumar',
      destination: 'Australia',
      university: 'University of Melbourne',
      rating: 5,
      text: 'Professional, knowledgeable, and always available to answer questions. They helped me secure admission to my top choice university.',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Hear from students who achieved their dreams with our help
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.destination}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{testimonial.text}</p>
                <p className="text-sm font-medium text-primary">{testimonial.university}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
