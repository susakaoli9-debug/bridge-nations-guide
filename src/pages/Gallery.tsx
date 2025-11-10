import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    { title: 'Student Success Stories', count: 12 },
    { title: 'Campus Tours', count: 8 },
    { title: 'Visa Success Celebrations', count: 15 },
    { title: 'Counseling Sessions', count: 6 },
    { title: 'University Fairs', count: 10 },
    { title: 'Pre-Departure Events', count: 7 },
    { title: 'Alumni Meetups', count: 9 },
    { title: 'Student Life', count: 11 },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Moments captured from our journey with students
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <Camera className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.count} photos</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to be featured in our gallery? Share your study abroad journey with us!
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
