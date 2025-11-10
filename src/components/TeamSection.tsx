import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Ramesh Shrestha',
      position: 'Founder & CEO',
      experience: '15+ years in education consultancy',
      expertise: 'University partnerships, Strategic planning',
      initials: 'RS',
      email: 'ramesh@educonsult.com',
    },
    {
      name: 'Sunita Maharjan',
      position: 'Senior Education Counselor',
      experience: '12+ years helping students',
      expertise: 'USA & UK universities, Application guidance',
      initials: 'SM',
      email: 'sunita@educonsult.com',
    },
    {
      name: 'Bikash Tamang',
      position: 'Visa Consultant',
      experience: '10+ years in visa processing',
      expertise: 'All visa categories, Interview preparation',
      initials: 'BT',
      email: 'bikash@educonsult.com',
    },
    {
      name: 'Anjali Pradhan',
      position: 'Test Preparation Lead',
      experience: '8+ years in test prep',
      expertise: 'IELTS, TOEFL, GRE coaching',
      initials: 'AP',
      email: 'anjali@educonsult.com',
    },
    {
      name: 'Suresh Karki',
      position: 'Country Manager - Australia',
      experience: '9+ years in Australian education',
      expertise: 'Australian universities, PR pathways',
      initials: 'SK',
      email: 'suresh@educonsult.com',
    },
    {
      name: 'Mina Rai',
      position: 'Financial Counselor',
      experience: '7+ years in education finance',
      expertise: 'Scholarships, Education loans',
      initials: 'MR',
      email: 'mina@educonsult.com',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to helping you achieve your educational goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="text-white text-2xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">Expertise:</p>
                  <p className="text-sm">{member.expertise}</p>
                </div>

                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
