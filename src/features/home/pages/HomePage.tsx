import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Globe, Award } from 'lucide-react';
import AnnouncementModal from '../components/AnnouncementModal';
import Testimonials from '../components/Testimonials';
import RegistrationForm from '../components/RegistrationForm';
import heroImage from '@/shared/assets/hero-education.jpg';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromNav) {
      setShowModal(true);
    }
  }, [location]);

  const features = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: 'Expert Counseling',
      description: 'Get personalized guidance from experienced education consultants',
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: 'Global Universities',
      description: 'Access to top universities across USA, UK, Australia, and more',
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Visa Assistance',
      description: 'Complete support for visa application and documentation',
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: 'Scholarship Guidance',
      description: 'Help finding and applying for scholarships and financial aid',
    },
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '5000+', label: 'Students Placed' },
    { icon: <Globe className="h-8 w-8" />, value: '25+', label: 'Countries' },
    { icon: <GraduationCap className="h-8 w-8" />, value: '500+', label: 'Partner Universities' },
    { icon: <Award className="h-8 w-8" />, value: '95%', label: 'Success Rate' },
  ];

  return (
    <>
      <AnnouncementModal trigger={showModal} />
      
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Gateway to Global Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Expert guidance for studying abroad with comprehensive support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-fade-in">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="animate-fade-in bg-white/10 backdrop-blur">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for your study abroad journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Your Interest</h2>
            <p className="text-xl text-muted-foreground">
              Start your journey to global education today
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Get in touch with our expert counselors today
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
