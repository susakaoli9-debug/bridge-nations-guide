import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const AnnouncementModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the announcement today
    const lastSeen = localStorage.getItem('announcement-seen');
    const today = new Date().toDateString();
    
    if (lastSeen !== today) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('announcement-seen', new Date().toDateString());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="relative">
          {/* Announcement Image/Video Area */}
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
            <div className="text-center p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎓 Special Announcement!
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Free IELTS Preparation Classes Starting Next Month
              </p>
              {/* You can replace this with an actual image or video */}
              {/* <img src="/announcement-image.jpg" alt="Announcement" className="w-full h-full object-cover" /> */}
              {/* <video src="/announcement-video.mp4" controls className="w-full h-full" /> */}
            </div>
          </div>
          
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl">Join Our Free IELTS Classes</DialogTitle>
              <DialogDescription className="text-base mt-2">
                We're offering complimentary IELTS preparation classes for all registered students.
                Limited seats available - register now to secure your spot!
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Expert instructors with 10+ years experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Comprehensive study materials included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Mock tests and personalized feedback</span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <Button className="flex-1" onClick={handleClose}>
                Register Now
              </Button>
              <Button variant="outline" onClick={handleClose}>
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
