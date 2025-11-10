import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      country: 'Nepal',
      destination: 'USA',
      university: 'Harvard University',
      rating: 5,
      text: 'EduConsult made my dream of studying at Harvard a reality. Their guidance throughout the application process was invaluable.',
      initials: 'PS',
    },
    {
      name: 'Rajesh Thapa',
      country: 'Nepal',
      destination: 'Canada',
      university: 'University of Toronto',
      rating: 5,
      text: 'The visa assistance and counseling services were exceptional. I got my Canadian student visa without any hassle.',
      initials: 'RT',
    },
    {
      name: 'Suman Karki',
      country: 'Nepal',
      destination: 'Australia',
      university: 'University of Melbourne',
      rating: 5,
      text: 'From university selection to visa approval, the team was with me every step. Highly recommend their services!',
      initials: 'SK',
    },
    {
      name: 'Anita Gurung',
      country: 'Nepal',
      destination: 'UK',
      university: 'Oxford University',
      rating: 5,
      text: 'Professional and knowledgeable counselors who genuinely care about student success. Thank you EduConsult!',
      initials: 'AG',
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who are now studying at top universities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-primary to-secondary">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.destination}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-4">
                  "{testimonial.text}"
                </p>

                <div className="pt-3 border-t">
                  <p className="text-xs font-semibold text-primary">{testimonial.university}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
