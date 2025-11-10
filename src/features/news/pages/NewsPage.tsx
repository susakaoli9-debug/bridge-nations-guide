import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp } from 'lucide-react';

const NewsPage = () => {
  const news = [
    {
      title: 'New Partnership with 15 Leading UK Universities',
      excerpt: 'We are excited to announce partnerships with prestigious UK institutions, offering more opportunities for our students.',
      date: 'March 20, 2024',
      category: 'Partnership',
      featured: true,
    },
    {
      title: 'Record-Breaking Visa Success Rate in Q1 2024',
      excerpt: 'Achieved 98% visa approval rate this quarter, our highest ever success rate.',
      date: 'March 18, 2024',
      category: 'Achievement',
      featured: true,
    },
    {
      title: 'New IELTS Preparation Center Opening',
      excerpt: 'State-of-the-art IELTS preparation center with advanced facilities opening next month.',
      date: 'March 15, 2024',
      category: 'Announcement',
      featured: false,
    },
    {
      title: 'Scholarship Fair 2024 - April Edition',
      excerpt: 'Join us for our annual scholarship fair featuring representatives from 50+ universities.',
      date: 'March 12, 2024',
      category: 'Event',
      featured: false,
    },
    {
      title: 'Student Success: 100+ Admissions to Top 50 Universities',
      excerpt: 'Our students secured admissions to world-renowned institutions including MIT, Oxford, and Stanford.',
      date: 'March 10, 2024',
      category: 'Success Story',
      featured: false,
    },
    {
      title: 'New Study Destination: Ireland Programs Launched',
      excerpt: 'Expanding our offerings with comprehensive support for studying in Ireland.',
      date: 'March 5, 2024',
      category: 'Program',
      featured: false,
    },
    {
      title: 'Free IELTS Mock Tests Every Saturday',
      excerpt: 'New initiative: Free IELTS mock tests and feedback sessions every Saturday morning.',
      date: 'March 1, 2024',
      category: 'Service',
      featured: false,
    },
    {
      title: 'Updated Post-Study Work Visa Guidelines',
      excerpt: 'Important updates on post-study work opportunities in various countries.',
      date: 'February 25, 2024',
      category: 'Immigration',
      featured: false,
    },
  ];

  const featuredNews = news.filter(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Stay updated with the latest news and announcements
          </p>
        </div>
      </section>

      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured News</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-primary">{item.category}</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{item.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <Button className="w-full">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest updates and opportunities
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
