import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface AnnouncementModalProps {
  trigger?: boolean;
}

const AnnouncementModal = ({ trigger = false }: AnnouncementModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem('announcement_last_seen');
    const today = new Date().toDateString();
    
    if (lastSeen !== today) {
      setTimeout(() => setOpen(true), 1000);
    }
  }, []);

  useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);

  const handleClose = () => {
    const today = new Date().toDateString();
    localStorage.setItem('announcement_last_seen', today);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <GraduationCap className="h-8 w-8 text-primary" />
            Special Announcement
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">Free IELTS Preparation Classes</h3>
            <p className="text-muted-foreground mb-4">
              Join our comprehensive IELTS preparation program absolutely free! 
              Limited seats available for this month.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Expert instructors with 10+ years experience</li>
              <li>✓ All modules covered (Listening, Reading, Writing, Speaking)</li>
              <li>✓ Mock tests and personalized feedback</li>
              <li>✓ Study materials included</li>
            </ul>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleClose} className="flex-1">
              Register Now
            </Button>
            <Button onClick={handleClose} variant="outline" className="flex-1">
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
