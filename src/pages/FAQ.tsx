import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services do you provide?',
          a: 'We provide comprehensive education consultancy services including career counseling, university selection, application support, visa assistance, test preparation, financial planning, and pre-departure orientation.',
        },
        {
          q: 'How much do your services cost?',
          a: 'We offer various service packages. Initial consultation is free. Contact us for detailed pricing information tailored to your needs.',
        },
        {
          q: 'Which countries can I study in?',
          a: 'We help students study in USA, UK, Canada, Australia, Germany, Japan, and many other countries around the world.',
        },
      ],
    },
    {
      category: 'Application Process',
      questions: [
        {
          q: 'When should I start my application process?',
          a: 'Ideally, you should start 12-18 months before your intended start date. This gives enough time for test preparation, applications, and visa processing.',
        },
        {
          q: 'What documents do I need?',
          a: 'Common documents include academic transcripts, test scores (IELTS/TOEFL/GRE), passport, letters of recommendation, statement of purpose, and financial documents.',
        },
        {
          q: 'Can you help with scholarship applications?',
          a: 'Yes, we assist with scholarship research and application process to help reduce your education costs.',
        },
      ],
    },
    {
      category: 'Visa Process',
      questions: [
        {
          q: 'How long does visa processing take?',
          a: 'Visa processing time varies by country. Generally, it takes 2-8 weeks. We guide you through the entire process.',
        },
        {
          q: 'What is the visa success rate?',
          a: 'We have a high visa success rate of over 95%. We ensure your application is complete and well-prepared.',
        },
        {
          q: 'Do you provide visa interview preparation?',
          a: 'Yes, we conduct mock interviews and provide comprehensive guidance to help you confidently face your visa interview.',
        },
      ],
    },
    {
      category: 'Test Preparation',
      questions: [
        {
          q: 'Do you offer IELTS coaching?',
          a: 'Yes, we offer comprehensive test preparation courses for IELTS, TOEFL, GRE, GMAT, and other required tests.',
        },
        {
          q: 'What is the duration of test prep courses?',
          a: 'Course duration varies from 4-12 weeks depending on the test and your current level.',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Find answers to common questions about studying abroad
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Feel free to contact us.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
