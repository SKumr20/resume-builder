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

  return (
    <>
      <div className='grid grid-cols-2 p-4 bg-background max-h-full'>
        <SignupFormDemo setFirstname={setFirstname} setLastname={setLastname} setEmail={setEmail} setPhone={setPhone} setLinkedin={setLinkedin} setEducation1={setEducation1} setEducationDegree1={setEducationDegree1} setEducation2={setEducation2} setEducationDegree2={setEducationDegree2} setExperience1={setExperience1} setExperiencePlace1={setExperiencePlace1} />
        <ResumePreview firstname={firstname} lastname={lastname} email={email} phone={phone} linkedin={linkedin} education1={education1} educationDegree1={educationDegree1} education2={education2} educationDegree2={educationDegree2} experience1={experience1} experiencePlace1={experiencePlace1} />
      </div>
    </>
  )
}

export default CreateResume;