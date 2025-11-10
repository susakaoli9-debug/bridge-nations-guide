import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/app/providers/I18nProvider';

const AboutPage = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Education Consultant',
      experience: '15+ years',
      expertise: 'USA & UK Universities',
      email: 'sarah@educonsult.com',
      linkedin: '#',
    },
    {
      name: 'Mr. Rajesh Kumar',
      position: 'Senior Counselor',
      experience: '12+ years',
      expertise: 'Australian & Canadian Universities',
      email: 'rajesh@educonsult.com',
      linkedin: '#',
    },
    {
      name: 'Ms. Emily Chen',
      position: 'Visa Specialist',
      experience: '10+ years',
      expertise: 'Immigration & Documentation',
      email: 'emily@educonsult.com',
      linkedin: '#',
    },
    {
      name: 'Mr. David Smith',
      position: 'IELTS Instructor',
      experience: '8+ years',
      expertise: 'Test Preparation',
      email: 'david@educonsult.com',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About EduConsult
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Your trusted partner in achieving global education dreams
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, EduConsult has been at the forefront of international education consulting, 
                helping thousands of students achieve their dreams of studying abroad.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over a decade of experience, we have established strong partnerships with top universities 
                worldwide and maintained an impressive success rate in student placements and visa approvals.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of expert counselors provides personalized guidance throughout your educational journey, 
                from university selection to visa processing and pre-departure orientation.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower students with world-class education opportunities and guide them towards 
                    successful international academic careers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the most trusted education consultancy, known for excellence in student counseling 
                    and successful placements in premier global institutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-center text-lg">{member.name}</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">{member.position}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Expertise:</span> {member.expertise}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={member.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
