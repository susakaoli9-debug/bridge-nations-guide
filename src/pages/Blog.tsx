import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Top 10 Universities in the USA for International Students',
      excerpt: 'Discover the best universities in the United States that welcome international students with open arms...',
      date: '2024-01-15',
      author: 'Admin',
      category: 'Education',
    },
    {
      title: 'Complete Guide to Student Visa Application',
      excerpt: 'Everything you need to know about applying for a student visa, from documentation to interview tips...',
      date: '2024-01-10',
      author: 'Admin',
      category: 'Visa',
    },
    {
      title: 'Scholarship Opportunities for Nepalese Students',
      excerpt: 'Comprehensive list of scholarships available for students from Nepal looking to study abroad...',
      date: '2024-01-05',
      author: 'Admin',
      category: 'Scholarships',
    },
    {
      title: 'IELTS Preparation Tips and Strategies',
      excerpt: 'Expert advice on how to prepare for and ace your IELTS exam with proven strategies...',
      date: '2023-12-28',
      author: 'Admin',
      category: 'Test Prep',
    },
    {
      title: 'Life as an International Student in Canada',
      excerpt: 'First-hand experiences and tips for adjusting to student life in Canada...',
      date: '2023-12-20',
      author: 'Admin',
      category: 'Student Life',
    },
    {
      title: 'Understanding the UK Education System',
      excerpt: 'A comprehensive guide to understanding how the British education system works...',
      date: '2023-12-15',
      author: 'Admin',
      category: 'Education',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Latest insights and guides for studying abroad
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-xs text-primary font-semibold mb-2">{post.category}</div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
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

export default Blog;
