import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, FileCheck, Plane, BookOpen, Users, Calculator } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Career Counseling',
      description: 'Professional guidance to help you choose the right course and university that aligns with your career goals.',
      features: ['Aptitude Assessment', 'Course Selection', 'University Matching', 'Career Path Planning'],
    },
    {
      icon: FileCheck,
      title: 'Admission Support',
      description: 'Complete assistance with the university application process from start to finish.',
      features: ['Application Review', 'Document Preparation', 'SOP Writing', 'Interview Preparation'],
    },
    {
      icon: Plane,
      title: 'Visa Assistance',
      description: 'Expert support to ensure your visa application is complete and successful.',
      features: ['Document Checklist', 'Application Filing', 'Interview Coaching', 'Follow-up Support'],
    },
    {
      icon: BookOpen,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and other standardized tests.',
      features: ['Expert Faculty', 'Practice Materials', 'Mock Tests', 'Personalized Training'],
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Guidance on scholarships, loans, and financial planning for your education abroad.',
      features: ['Scholarship Search', 'Loan Assistance', 'Budget Planning', 'Financial Documentation'],
    },
    {
      icon: Users,
      title: 'Pre-Departure Support',
      description: 'Orientation and guidance to help you prepare for life in your destination country.',
      features: ['Cultural Orientation', 'Accommodation Help', 'Travel Planning', 'Bank Account Setup'],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive support for your study abroad journey
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
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

export default Services;
