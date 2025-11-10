import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Video, BookOpen } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      title: 'University Application Checklist',
      description: 'Complete checklist for preparing your university applications',
      type: 'PDF',
      icon: <FileText className="h-12 w-12 text-primary" />,
      size: '2.5 MB',
    },
    {
      title: 'Visa Documentation Guide',
      description: 'Detailed guide on required documents for student visa applications',
      type: 'PDF',
      icon: <FileText className="h-12 w-12 text-primary" />,
      size: '3.1 MB',
    },
    {
      title: 'IELTS Preparation Materials',
      description: 'Sample tests, vocabulary lists, and preparation strategies',
      type: 'PDF',
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      size: '15 MB',
    },
    {
      title: 'Country Comparison Guide',
      description: 'Compare tuition fees, living costs, and opportunities across countries',
      type: 'PDF',
      icon: <FileText className="h-12 w-12 text-primary" />,
      size: '1.8 MB',
    },
    {
      title: 'SOP Writing Workshop',
      description: 'Video tutorial on writing effective statements of purpose',
      type: 'Video',
      icon: <Video className="h-12 w-12 text-primary" />,
      size: '250 MB',
    },
    {
      title: 'Scholarship Application Guide',
      description: 'How to find and apply for scholarships successfully',
      type: 'PDF',
      icon: <FileText className="h-12 w-12 text-primary" />,
      size: '2.2 MB',
    },
  ];

  const webinars = [
    {
      title: 'Studying in the USA: Everything You Need to Know',
      date: 'April 15, 2024',
      time: '6:00 PM NPT',
      speaker: 'Dr. Sarah Johnson',
    },
    {
      title: 'Visa Interview Preparation',
      date: 'April 20, 2024',
      time: '5:00 PM NPT',
      speaker: 'Ms. Emily Chen',
    },
    {
      title: 'Scholarship Opportunities for 2024',
      date: 'April 25, 2024',
      time: '6:00 PM NPT',
      speaker: 'Mr. Rajesh Kumar',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Free guides, materials, and tools to help you succeed
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Downloadable Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{resource.icon}</div>
                  <CardTitle className="text-lg text-center">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold">Date:</span> {webinar.date}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Time:</span> {webinar.time}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Speaker:</span> {webinar.speaker}
                  </div>
                  <Button className="w-full mt-4">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our counselors are available for personalized guidance
              </p>
              <Button size="lg">Book a Consultation</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
