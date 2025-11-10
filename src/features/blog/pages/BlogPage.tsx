import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: 'Top 10 Universities for Computer Science in 2024',
      excerpt: 'Discover the best universities offering cutting-edge computer science programs worldwide.',
      date: 'March 15, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Education',
      image: '🎓',
    },
    {
      title: 'Complete Guide to Student Visa Application',
      excerpt: 'Everything you need to know about applying for a student visa and required documentation.',
      date: 'March 10, 2024',
      author: 'Mr. Rajesh Kumar',
      category: 'Visa',
      image: '📝',
    },
    {
      title: 'Scholarship Opportunities for International Students',
      excerpt: 'Explore various scholarship programs and learn how to increase your chances of securing funding.',
      date: 'March 5, 2024',
      author: 'Ms. Emily Chen',
      category: 'Finance',
      image: '💰',
    },
    {
      title: 'IELTS Preparation Tips and Strategies',
      excerpt: 'Expert advice on how to prepare effectively for the IELTS exam and achieve your target score.',
      date: 'February 28, 2024',
      author: 'Mr. David Smith',
      category: 'Test Prep',
      image: '📚',
    },
    {
      title: 'Life as an International Student in the UK',
      excerpt: 'Real experiences and practical tips for adjusting to student life in the United Kingdom.',
      date: 'February 20, 2024',
      author: 'Alumni Contributor',
      category: 'Student Life',
      image: '🇬🇧',
    },
    {
      title: 'Career Prospects After Studying Abroad',
      excerpt: 'How studying abroad can boost your career and open doors to international opportunities.',
      date: 'February 15, 2024',
      author: 'Career Services Team',
      category: 'Career',
      image: '💼',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Latest insights, tips, and guides for studying abroad
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{post.image}</div>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
