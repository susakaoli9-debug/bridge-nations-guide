import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'New Scholarship Programs Announced for 2024',
      excerpt: 'Several universities have announced new scholarship opportunities for international students starting in Fall 2024...',
      date: '2 days ago',
      category: 'Scholarships',
      important: true,
    },
    {
      title: 'Changes in UK Student Visa Requirements',
      excerpt: 'The UK government has updated student visa requirements. Here\'s what you need to know...',
      date: '5 days ago',
      category: 'Visa Updates',
      important: true,
    },
    {
      title: 'Top Canadian Universities Now Accepting January Intake',
      excerpt: 'Good news for students planning to start in January 2024. These top Canadian universities are now accepting applications...',
      date: '1 week ago',
      category: 'Admissions',
      important: false,
    },
    {
      title: 'IELTS Test Dates for Q1 2024 Released',
      excerpt: 'British Council has released IELTS test dates for the first quarter of 2024. Book your slots early...',
      date: '1 week ago',
      category: 'Test Updates',
      important: false,
    },
    {
      title: 'Australia Extends Post-Study Work Rights',
      excerpt: 'International graduates in Australia can now benefit from extended post-study work rights...',
      date: '2 weeks ago',
      category: 'Policy Changes',
      important: true,
    },
    {
      title: 'Virtual University Fair: December 2024',
      excerpt: 'Join our virtual university fair featuring representatives from 50+ universities worldwide...',
      date: '2 weeks ago',
      category: 'Events',
      important: false,
    },
    {
      title: 'New Partnership with German Universities',
      excerpt: 'We are excited to announce our new partnerships with leading German universities offering tuition-free education...',
      date: '3 weeks ago',
      category: 'Partnerships',
      important: false,
    },
    {
      title: 'Tips for Fall 2024 Applications',
      excerpt: 'Application season for Fall 2024 is here. Check out our expert tips to strengthen your application...',
      date: '3 weeks ago',
      category: 'Tips & Advice',
      important: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Stay updated with the latest in international education
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${item.important ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge variant={item.important ? 'default' : 'secondary'}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-primary hover:underline text-sm font-medium">
                    Read full article →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
