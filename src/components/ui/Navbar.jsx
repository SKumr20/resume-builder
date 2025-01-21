import React from 'react';
import { FileUser, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-[hsl(var(--background))] text-[hsl(var(--card-foreground))]'>  
      <div className='flex items-center gap-3'>
        <FileUser size={32} strokeWidth={1.25} color='white' />
        <div className="flex flex-col  gap-1">
          <h1 className='font-extrabold text-xl leading-none'>Resumify</h1>
          <p className="text-sm text-muted-foreground leading-none">A Simple, Fast, CV Builder</p>
        </div>
      </div>
      <div>
        <Button variant='default' className="flex items-center gap-1 rounded-xl" size='sm'>
          <Github size={16} /> Checkout Code on Github
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
