import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FAQPage = () => {
  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What services does EduConsult provide?',
          answer: 'We provide comprehensive education consultancy services including career counseling, university selection, application assistance, visa processing, test preparation (IELTS, TOEFL, GRE, GMAT), scholarship guidance, and pre-departure orientation.',
        },
        {
          question: 'How much does your service cost?',
          answer: 'Our basic counseling services are free. We charge a nominal fee for application processing and visa assistance. The exact cost depends on the services you choose and the destination country. Contact us for detailed pricing.',
        },
        {
          question: 'How long does the entire process take?',
          answer: 'The timeline varies depending on the destination and intake. Generally, the process from initial counseling to visa approval takes 6-12 months. We recommend starting at least 12 months before your intended start date.',
        },
      ],
    },
    {
      category: 'University Applications',
      questions: [
        {
          question: 'Can I apply to multiple universities?',
          answer: 'Yes! We recommend applying to 5-8 universities to maximize your chances of admission. We help you create a balanced list of reach, target, and safety schools.',
        },
        {
          question: 'What documents are required for university applications?',
          answer: 'Typically required documents include: academic transcripts, test scores (IELTS/TOEFL, GRE/GMAT if applicable), letters of recommendation, statement of purpose, resume/CV, and passport copy. Specific requirements vary by university.',
        },
        {
          question: 'When should I start applying?',
          answer: 'For fall intake (September), start 12-18 months in advance. For spring intake (January), start 9-12 months ahead. Early preparation gives you better chances for scholarships and university selection.',
        },
      ],
    },
    {
      category: 'Visa Process',
      questions: [
        {
          question: 'What is the visa success rate?',
          answer: 'Our current visa approval rate is 95-98%, depending on the destination country. We provide thorough documentation support and interview preparation to maximize your chances.',
        },
        {
          question: 'How long does visa processing take?',
          answer: 'Processing times vary by country: USA (2-4 weeks), UK (3-6 weeks), Canada (4-8 weeks), Australia (4-6 weeks). We help you apply at the right time to avoid delays.',
        },
        {
          question: 'What if my visa gets rejected?',
          answer: 'While rare with proper preparation, if a visa is rejected, we analyze the reasons and guide you through the reapplication process. We provide full support for visa appeals when applicable.',
        },
      ],
    },
    {
      category: 'Financial Questions',
      questions: [
        {
          question: 'Are scholarships available?',
          answer: 'Yes! Many universities offer merit-based and need-based scholarships. We help identify scholarship opportunities and assist with applications. Scholarship amounts can range from partial to full tuition coverage.',
        },
        {
          question: 'Can I work while studying?',
          answer: 'Most countries allow part-time work (15-20 hours/week) during studies. USA, UK, Canada, and Australia all have student work provisions. Earnings can help cover living expenses.',
        },
        {
          question: 'What are the typical costs for studying abroad?',
          answer: 'Costs vary significantly by country and university. Annual costs (tuition + living): USA ($35k-70k), UK ($25k-45k), Canada ($20k-35k), Australia ($25k-45k), Germany ($10k-20k). We provide detailed cost breakdowns for your chosen destinations.',
        },
      ],
    },
    {
      category: 'Test Preparation',
      questions: [
        {
          question: 'Do I need to take IELTS or TOEFL?',
          answer: 'English proficiency tests are required for non-native English speakers. IELTS is widely accepted globally, while TOEFL is preferred in the USA. We offer comprehensive preparation courses for both.',
        },
        {
          question: 'What score do I need?',
          answer: 'Minimum scores vary by university and program. Generally: IELTS 6.0-7.5, TOEFL 80-100. Top universities typically require IELTS 7.0+ or TOEFL 90+. We help you achieve your target score.',
        },
        {
          question: 'How long should I prepare for these tests?',
          answer: 'We recommend 2-3 months of dedicated preparation. Our courses include practice tests, personalized feedback, and proven strategies to help you achieve your target score.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Find answers to common questions about studying abroad
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our expert counselors are here to help you with personalized guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book a Consultation</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
