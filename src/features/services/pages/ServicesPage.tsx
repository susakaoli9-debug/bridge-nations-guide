import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, FileText, Plane, BookOpen, Users, Award } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: 'Career Counseling',
      description: 'Professional guidance to help you choose the right course and university',
      features: [
        'One-on-one counseling sessions',
        'Career assessment tests',
        'Course and university recommendations',
        'Future career prospects analysis',
      ],
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: 'Application Assistance',
      description: 'Complete support for university applications and documentation',
      features: [
        'Application form completion',
        'SOP and LOR writing guidance',
        'Document verification and review',
        'Application tracking and follow-up',
      ],
    },
    {
      icon: <Plane className="h-12 w-12 text-primary" />,
      title: 'Visa Processing',
      description: 'Expert assistance with visa applications and interview preparation',
      features: [
        'Visa documentation support',
        'Interview preparation and mock sessions',
        'Financial document guidance',
        'Post-visa support services',
      ],
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: 'Test Preparation',
      description: 'Comprehensive training for IELTS, TOEFL, GRE, GMAT, and SAT',
      features: [
        'Expert instructors with proven results',
        'Regular mock tests and assessments',
        'Study materials and resources',
        'Flexible batch timings',
      ],
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: 'Scholarship Guidance',
      description: 'Help identifying and applying for scholarships and financial aid',
      features: [
        'Scholarship search and identification',
        'Application assistance',
        'Essay and interview preparation',
        'Financial planning advice',
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Pre-Departure Orientation',
      description: 'Comprehensive preparation for your life abroad',
      features: [
        'Cultural orientation sessions',
        'Accommodation guidance',
        'Banking and insurance advice',
        'Airport pickup arrangements',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Comprehensive support for your study abroad journey
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
