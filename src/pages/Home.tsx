import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, FileCheck, Briefcase, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-education.jpg';
import AnnouncementModal from '@/components/AnnouncementModal';
import Testimonials from '@/components/Testimonials';
import RegistrationForm from '@/components/RegistrationForm';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t('expertGuidance'),
      description: t('expertGuidanceDesc'),
    },
    {
      icon: FileCheck,
      title: t('visaSupport'),
      description: t('visaSupportDesc'),
    },
    {
      icon: Briefcase,
      title: t('careerCounseling'),
      description: t('careerCounselingDesc'),
    },
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Students Placed' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="flex flex-col">
      <AnnouncementModal />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t('getStarted')}
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="secondary">
                {t('learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChooseUs')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support throughout your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Registration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
              <p className="text-muted-foreground">
                Register now for a free consultation with our expert counselors
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our expert counselors today
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              {t('contactUs')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
