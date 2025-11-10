import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Images } from 'lucide-react';

const GalleryPage = () => {
  const galleries = [
    {
      title: 'Student Success Stories',
      description: 'Celebrating our students achievements and success',
      icon: '🎓',
      photos: 45,
    },
    {
      title: 'Campus Tours',
      description: 'Virtual tours of partner universities worldwide',
      icon: '🏛️',
      photos: 120,
    },
    {
      title: 'IELTS Classes',
      description: 'Glimpses from our interactive IELTS preparation sessions',
      icon: '📚',
      photos: 30,
    },
    {
      title: 'Pre-Departure Events',
      description: 'Orientation sessions and send-off ceremonies',
      icon: '✈️',
      photos: 60,
    },
    {
      title: 'Student Visa Approvals',
      description: 'Celebrating successful visa approvals',
      icon: '🎉',
      photos: 200,
    },
    {
      title: 'Education Fairs',
      description: 'International education exhibitions and events',
      icon: '🌍',
      photos: 80,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Explore our collection of memorable moments and events
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{gallery.icon}</div>
                  <CardTitle className="text-center">{gallery.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground">{gallery.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Images className="h-4 w-4" />
                    <span>{gallery.photos} Photos</span>
                  </div>
                  <Button className="w-full">View Gallery</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you one of our successful students? We'd love to feature your story!
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
