import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Your trusted partner in international education
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2008, EduConsult has been helping students achieve their dreams of studying abroad
              for over 15 years. We started with a simple mission: to provide honest, expert guidance to
              students seeking international education opportunities.
            </p>
            <p className="text-muted-foreground">
              Today, we've helped thousands of students secure admissions to top universities worldwide,
              and we continue to be committed to excellence in education consultancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower students with quality guidance and support for their international education journey
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted education consultancy, bridging students with global opportunities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, excellence, and student-first approach in everything we do
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose EduConsult?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Counselors</h3>
                  <p className="text-sm text-muted-foreground">Trained professionals with international education expertise</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Comprehensive Services</h3>
                  <p className="text-sm text-muted-foreground">From course selection to visa support and more</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Strong University Network</h3>
                  <p className="text-sm text-muted-foreground">Partnerships with top institutions worldwide</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-sm text-muted-foreground">5000+ successful student placements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
