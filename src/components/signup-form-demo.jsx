"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DatePickerWithRange } from "./ui/DatePickerWithRange.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button.jsx";
import html2pdf from "html2pdf.js";
import toast, { Toaster } from 'react-hot-toast';



export default function SignupFormDemo({ setFirstname, setLastname, setEmail, setPhone, setLinkedin, setEducation1, setEducationDegree1, setEducation2, setEducationDegree2, setExperience1, setExperiencePlace1, setEducation1Location, setEducation2Location, setEducation1Date, setEducation2Date, setExperience1Location, setExperience1Date, setExperience2, setExperiencePlace2, setExperience2Location, setExperience2Date, setExperience1Detail, setExperience1Detail2, setExperience2Detail, setExperience2Detail2, setSkillHead1, setSkills1, setSkillHead2, setSkills2, setSkillHead3, setSkills3 }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const handleDownload = () => {
    const elementToPrint = document.getElementById('print');
    const filename = "resume";
    html2pdf().from(elementToPrint).set({ filename }).save();
  };
  const notify = () => {
    toast('Downloaded!');
  }


  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <div className="flex align-center items-center justify-between">
        <h2 className="font-bold text-xl text-neutral-200">
          Enter Your Data
        </h2>
        <button className="p-[2px] relative" onClick={() => { handleDownload(); notify(); }} >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
          <div className="px-4 py-2 text-sm bg-black rounded-2xl  relative group transition duration-200 text-white hover:bg-transparent">
          Download
          </div>
        </button>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          {/* Header section */}
          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground">
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger className="w-full">Name</AccordionTrigger>
                <AccordionContent className="w-full">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full">
                    <LabelInputContainer className="w-full">
                      <Label htmlFor="firstname">First name</Label>
                      <Input id="firstname" placeholder="Lewis" type="text" onChange={(e) => setFirstname(e.target.value)} />
                    </LabelInputContainer>
                    <LabelInputContainer className="w-full">
                      <Label htmlFor="lastname">Last name</Label>
                      <Input id="lastname" placeholder="Hamilton" type="text" onChange={(e) => setLastname(e.target.value)} />
                    </LabelInputContainer>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>


        {/* Contact Section */}
        <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Contact</AccordionTrigger>
                <AccordionContent className="w-full">
                  <div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="cia@confidential.com" type="email" onChange={(e) => setEmail(e.target.value)}/>
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+123-987654321" type="tel" onChange={(e) => setPhone(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="linkedin">LinkedIn Account</Label>
                    <Input id="linkedin" placeholder="linkedin.com/satyamkumr20/" type="url" onChange={(e) => setLinkedin(e.target.value)} />
                  </LabelInputContainer>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>


        {/* Education section */}
          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Education 1</AccordionTrigger>
                <AccordionContent className="w-full">
                  <div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="education1">Education 1</Label>
                    <Input id="education1" placeholder="School/College" type="text" onChange={(e) => setEducation1(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="educationDegree1">Add First Degree/Course</Label>
                    <Input id="degree1" placeholder="Bachelor/Master" type="text" onChange={(e) => setEducationDegree1(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="education1location">First Education Location</Label>
                    <Input id="education1location" placeholder="NYC, USA" type="text" onChange={(e) => setEducation1Location(e.target.value)} />
                  </LabelInputContainer>

                  {/* Education1 datepicker */}
                  <LabelInputContainer className='mb-4'>
                    <Label>Education 1 Duration</Label>   
                    <DatePickerWithRange className=' text-muted-foreground' setEducation1Date={setEducation1Date} target="education1" />
                  </LabelInputContainer>   
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>



          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Education 2</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="education1">Education 2</Label>
                  <Input id="education2" placeholder="School/College" type="text" onChange={(e) => setEducation2(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="educationDegree1">Add Second Degree/Course</Label>
                  <Input id="degree2" placeholder="Bachelor/Master" type="text" onChange={(e) => setEducationDegree2(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="education2location">Second Education Location</Label>
                  <Input id="education2location" placeholder="Ohio, USA" type="text" onChange={(e) => setEducation2Location(e.target.value)} />
                </LabelInputContainer>

                <LabelInputContainer className='mb-4'>
                  <Label>Education 2 Duration</Label>   
                  <DatePickerWithRange className=' text-muted-foreground  ' setEducation2Date={setEducation2Date} target="education2" />
                </LabelInputContainer>
                </AccordionContent>
              </AccordionItem>
          </Accordion>





        {/* Experience section */}

        <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Experience 1</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience1">Experience 1</Label>
                  <Input id="experience1" placeholder="Work Designation" type="text" onChange={(e) => setExperience1(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experiencePlace1">Work Organization 1</Label>
                  <Input id="experiencePlace1" placeholder="Organization/Company" type="text" onChange={(e) => setExperiencePlace1(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience1Location">Work Location 1</Label>
                  <Input id="experience1Location" placeholder="Location" type="text" onChange={(e) => setExperience1Location(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className='mb-4'>
                  <Label>Work 1 Duration</Label>   
                  <DatePickerWithRange className=' text-muted-foreground' setExperience1Date={setExperience1Date} target="experience1Location" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience1Detail">Point 1</Label>
                  <Input id="experience1Detail" placeholder="Worked on XYZ" type="text" onChange={(e) => setExperience1Detail(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience1Detail2">Point 2</Label>
                  <Input id="experience1Detail2" placeholder="Implemented ABC tech stack on XYZ" type="text" onChange={(e) => setExperience1Detail2(e.target.value)} />
                </LabelInputContainer>
                </AccordionContent>
              </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Experience 2</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience1">Experience 2</Label>
                  <Input id="experience2" placeholder="Work Designation" type="text" onChange={(e) => setExperience2(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experiencePlace2">Work Organization 2</Label>
                  <Input id="experiencePlace2" placeholder="Organization/Company" type="text" onChange={(e) => setExperiencePlace2(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience2Location">Work Location 2</Label>
                  <Input id="experience2Location" placeholder="Location" type="text" onChange={(e) => setExperience2Location(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className='mb-4'>
                  <Label>Work 2 Duration</Label>   
                  <DatePickerWithRange className=' text-muted-foreground' setExperience2Date={setExperience2Date} target="experience2Location" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience2Detail">Point 1</Label>
                  <Input id="experience2Detail" placeholder="Worked on XYZ" type="text" onChange={(e) => setExperience2Detail(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="experience2Detail2">Point 2</Label>
                  <Input id="experience2Detail2" placeholder="Implemented ABC tech stack on XYZ" type="text" onChange={(e) => setExperience2Detail2(e.target.value)} />
                </LabelInputContainer>                
                </AccordionContent>
              </AccordionItem>
          </Accordion>



        {/* Skill Section */}

        <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Skills 1</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skillHead1">Skill Type 1</Label>
                  <Input id="skillHead1" placeholder="Languages: " type="text" onChange={(e) => setSkillHead1(e.target.value)} />
                </LabelInputContainer>  
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skills1">Skills</Label>
                  <Input id="skills1" placeholder="HTML, CSS, JavaScript " type="text" onChange={(e) => setSkills1(e.target.value)} />
                </LabelInputContainer>              
                </AccordionContent>
              </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Skills 2</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skillHead2">Skill Type 2</Label>
                  <Input id="skillHead2" placeholder="Tools: " type="text" onChange={(e) => setSkillHead2(e.target.value)} />
                </LabelInputContainer>  
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skills2">Skills 2</Label>
                  <Input id="skills2" placeholder="Git, Linux, MacOS, NeoVIM" type="text" onChange={(e) => setSkills2(e.target.value)} />
                </LabelInputContainer>              
                </AccordionContent>
              </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full text-primary hover:text-foreground mb-4">
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full">Skills 3</AccordionTrigger>
                <AccordionContent className="w-full">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skillHead3">Skill Type 3</Label>
                  <Input id="skillHead3" placeholder="Libraries And Frameworks " type="text" onChange={(e) => setSkillHead3(e.target.value)} />
                </LabelInputContainer>  
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="skills3">Skills 3</Label>
                  <Input id="skills3" placeholder="Numpy, SciKitLearn, MatplotLib" type="text" onChange={(e) => setSkills3(e.target.value)} />
                </LabelInputContainer>              
                </AccordionContent>
              </AccordionItem>
          </Accordion>









        <div
          className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
