import React from 'react';
import { FileUser, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from './ui/avatar';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-[hsl(var(--background))] text-[hsl(var(--card-foreground))]'>  
      <div className='flex items-center gap-3'>
        <FileUser size={32} strokeWidth={1.25} color='white' />
        <div className="flex flex-col  gap-1">
          <h1 className='font-extrabold text-xl leading-none'>Resumify</h1>
          <p className="text-sm text-muted-foreground leading-none">A Simple, Fast, CV Builder</p>
        </div>
      <div>
        <Button variant='link' size='sm'>
          <a href='/'>
            Home
          </a>
        </Button>
        <Button  variant='link' size='sm'>
          <a href='/createResume'>
            Create
          </a>
        </Button>
      </div>
      </div>
      <div>
        <div className='flex gap-4 items-center'>
          <Button variant='default' className="flex items-center gap-1 rounded-xl" size='sm' onClick={() => window.open("https://github.com/SKumr20/resume-builder", "_blank", "noopener,noreferrer")}>
            <Github size={16} /> Checkout Code on Github
          </Button>
         <button className="relative inline-flex items-center h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              By SKumr20
            </span>
            <Avatar className="hover:border-2 hover:border-zinc-600">
              <AvatarImage src="https://avatars.githubusercontent.com/u/113851151?v=4" />
            </Avatar>
          </button>
        
        </div>

      </div>
    </div>
  );
};

export default Navbar;
