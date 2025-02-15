import { useState } from "react";
import SignupFormDemo from "@/components/signup-form-demo";
import ResumePreview from "@/components/ResumePreview";
const CreateResume = () => {

  const [firstname, setFirstname] = useState("Lewis");
  const [lastname, setLastname] = useState("Hamilton");
  const [email, setEmail] = useState("cia@confidential.com");
  const [phone, setPhone] = useState('+123-987654321');
  const [linkedin, setLinkedin] = useState('linkedin.com/satyamkumr20/');
  const [education1, setEducation1] = useState('Chandler School Of Sarcasm');
  const [educationDegree1, setEducationDegree1] = useState('Bachelor Of Sarcasm');
  const [education2, setEducation2] = useState('High School');
  const [educationDegree2, setEducationDegree2] = useState('High School Diploma');
  const [experience1, setExperience1] = useState('CEO');
  const [experiencePlace1, setExperiencePlace1] = useState('ABC Tech');
  const [education1Location, setEducation1Location] = useState('Central Park, NYC, USA');
  const [education2Location, setEducation2Location] = useState('Ohio, USA');
  const [education1Date, setEducation1Date] = useState('Jan 20, 2022 - Feb 09, 2022');
  const [education2Date, setEducation2Date] = useState('Jan 20, 2022 - Feb 09, 2022');
  const [experience1Location, setExperience1Location] = useState('San Diego, CA');
  const [experience1Date, setExperience1Date] = useState('Feb 1, 2025- Present');

  return (
    <>
      <div className='grid grid-cols-2 p-4 bg-background max-h-full'>
        <SignupFormDemo setFirstname={setFirstname} setLastname={setLastname} setEmail={setEmail} setPhone={setPhone} setLinkedin={setLinkedin} setEducation1={setEducation1} setEducationDegree1={setEducationDegree1} setEducation2={setEducation2} setEducationDegree2={setEducationDegree2} setExperience1={setExperience1} setExperiencePlace1={setExperiencePlace1} setEducation1Location={setEducation1Location} setEducation2Location={setEducation2Location} setEducation1Date={setEducation1Date} setEducation2Date={setEducation2Date} setExperience1Location={setExperience1Location} setExperience1Date={setExperience1Date }/>
        <ResumePreview firstname={firstname} lastname={lastname} email={email} phone={phone} linkedin={linkedin} education1={education1} educationDegree1={educationDegree1} education2={education2} educationDegree2={educationDegree2} experience1={experience1} experiencePlace1={experiencePlace1} education1Location={education1Location} education2Location={education2Location} education1Date={education1Date} education2Date={education2Date} experience1Location={experience1Location} experience1Date={experience1Date}/>
      </div>
    </>
  )
}

export default CreateResume;