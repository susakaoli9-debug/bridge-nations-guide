import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DestinationsPage = () => {
  const destinations = [
    {
      country: 'United States',
      flag: '🇺🇸',
      description: 'Home to world-renowned universities and diverse academic programs',
      highlights: [
        'Top-ranked universities globally',
        'Wide range of courses and specializations',
        'Optional Practical Training (OPT) opportunities',
        'Vibrant multicultural environment',
      ],
      popularUniversities: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton'],
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Rich academic tradition with prestigious institutions',
      highlights: [
        'World-class education system',
        'Shorter duration programs',
        'Post-study work opportunities',
        'Cultural and historical significance',
      ],
      popularUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'LSE', 'UCL'],
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      description: 'Quality education with excellent immigration opportunities',
      highlights: [
        'Affordable tuition fees',
        'Safe and welcoming environment',
        'Post-graduation work permits',
        'Pathway to permanent residency',
      ],
      popularUniversities: ['Toronto', 'UBC', 'McGill', 'Waterloo', 'McMaster'],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      description: 'High quality of life and excellent educational standards',
      highlights: [
        'Strong focus on research',
        'Beautiful climate and lifestyle',
        'Work while studying opportunities',
        'Post-study work visa options',
      ],
      popularUniversities: ['Melbourne', 'Sydney', 'ANU', 'UNSW', 'Queensland'],
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      description: 'Excellence in engineering and technical education',
      highlights: [
        'Low or no tuition fees at public universities',
        'Strong economy and job market',
        'Central European location',
        'English-taught programs available',
      ],
      popularUniversities: ['TUM', 'LMU Munich', 'Heidelberg', 'RWTH Aachen', 'FU Berlin'],
    },
    {
      country: 'New Zealand',
      flag: '🇳🇿',
      description: 'Quality education in a peaceful, scenic environment',
      highlights: [
        'High-quality education system',
        'Safe and friendly environment',
        'Work opportunities during and after studies',
        'Stunning natural beauty',
      ],
      popularUniversities: ['Auckland', 'Otago', 'Victoria Wellington', 'Canterbury', 'Massey'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Study Destinations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Explore top study destinations around the world
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{dest.flag}</div>
                  <CardTitle className="text-center text-2xl">{dest.country}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {dest.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Why Choose {dest.country}?</h4>
                    <ul className="space-y-1">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Universities</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.popularUniversities.map((uni, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
