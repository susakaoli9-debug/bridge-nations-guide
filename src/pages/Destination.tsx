import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Destination = () => {
  const destinations = [
    {
      country: 'United States',
      flag: '🇺🇸',
      universities: '4000+',
      avgCost: '$30,000 - $55,000',
      popularCities: ['New York', 'Los Angeles', 'Boston', 'San Francisco'],
      highlights: ['World-class education', 'Research opportunities', 'Diverse culture', 'OPT work permit'],
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      universities: '500+',
      avgCost: '£15,000 - £35,000',
      popularCities: ['London', 'Manchester', 'Edinburgh', 'Oxford'],
      highlights: ['Historic universities', 'Shorter programs', 'Post-study work visa', 'English heritage'],
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      universities: '200+',
      avgCost: 'CAD 15,000 - 30,000',
      popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
      highlights: ['Affordable education', 'PR opportunities', 'Safe environment', 'Multicultural society'],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      universities: '150+',
      avgCost: 'AUD 20,000 - 45,000',
      popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
      highlights: ['Quality education', 'Work while studying', 'Beautiful landscapes', 'Post-study work rights'],
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      universities: '400+',
      avgCost: '€0 - €20,000',
      popularCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      highlights: ['Low tuition fees', 'Strong economy', 'Engineering excellence', 'Central Europe location'],
    },
    {
      country: 'Japan',
      flag: '🇯🇵',
      universities: '800+',
      avgCost: '¥800,000 - ¥2,000,000',
      popularCities: ['Tokyo', 'Osaka', 'Kyoto', 'Fukuoka'],
      highlights: ['Advanced technology', 'Rich culture', 'Scholarships available', 'Career opportunities'],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Destinations</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Explore popular study abroad destinations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">{dest.flag}</div>
                  <CardTitle className="text-2xl">{dest.country}</CardTitle>
                  <CardDescription>
                    {dest.universities} Universities | {dest.avgCost}/year
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Popular Cities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.popularCities.map((city, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
