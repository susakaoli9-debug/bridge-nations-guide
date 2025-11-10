import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, BookOpen, FileCheck } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'University Application Checklist',
      description: 'Complete checklist for your university application process',
      type: 'PDF',
      size: '2.5 MB',
    },
    {
      icon: FileCheck,
      title: 'Visa Documentation Guide',
      description: 'Required documents for student visa applications',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      icon: BookOpen,
      title: 'IELTS Study Material',
      description: 'Comprehensive study guide for IELTS preparation',
      type: 'PDF',
      size: '5.2 MB',
    },
    {
      icon: FileText,
      title: 'SOP Writing Guidelines',
      description: 'How to write an effective Statement of Purpose',
      type: 'PDF',
      size: '1.2 MB',
    },
    {
      icon: FileCheck,
      title: 'Scholarship Application Tips',
      description: 'Maximize your chances of getting scholarships',
      type: 'PDF',
      size: '2.1 MB',
    },
    {
      icon: BookOpen,
      title: 'Country-wise Education Guide',
      description: 'Detailed guides for popular study destinations',
      type: 'PDF',
      size: '8.5 MB',
    },
  ];

  const categories = [
    { name: 'Application Guides', count: 12 },
    { name: 'Test Preparation', count: 8 },
    { name: 'Visa Information', count: 6 },
    { name: 'Scholarship Resources', count: 10 },
    { name: 'Country Guides', count: 15 },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Download helpful guides and materials for your study abroad journey
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((cat, index) => (
                      <li key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                        <span className="text-sm">{cat.name}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">{cat.count}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <resource.icon className="h-10 w-10 mb-3 text-primary" />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold">{resource.type}</span> • {resource.size}
                        </div>
                        <Button size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
