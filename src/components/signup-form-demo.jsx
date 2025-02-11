"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SignupFormDemo({ setFirstname, setLastname, setEmail, setPhone, setLinkedin, setEducation1, setEducationDegree1, setEducation2, setEducationDegree2, setExperience1, setExperiencePlace1, setEducation1Location, setEducation2Location}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Enter Your Data
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Lewis" type="text" onChange={(e) => setFirstname(e.target.value)}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Hamilton" type="text" onChange={(e) => setLastname(e.target.value)}/>
          </LabelInputContainer>
        </div>
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

        {/* Education section */}
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



        {/* Experience section */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="experience1">Experience 1</Label>
          <Input id="experience1" placeholder="Work Designation" type="text" onChange={(e) => setExperience1(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="experiencePlace1">Work Location 1</Label>
          <Input id="experience1" placeholder="Location" type="text" onChange={(e) => setExperiencePlace1(e.target.value)} />
        </LabelInputContainer>


        





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
