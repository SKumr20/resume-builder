import { useState } from "react";
import SignupFormDemo from "@/components/signup-form-demo";
import ResumePreview from "@/components/ResumePreview";
const CreateResume = () => {

  const [firstname, setFirstname] = useState("Lewis");
  const [lastname, setLastname] = useState("Hamilton");
  const [email, setEmail] = useState("cia@confidential.com");
  const [phone, setPhone] = useState('+123-987654321');

  return (
    <>
      <div className='grid grid-cols-2 p-4 bg-background max-h-full'>
        <SignupFormDemo setFirstname={setFirstname} setLastname={setLastname} setEmail={setEmail} setPhone={setPhone} />
        <ResumePreview firstname={firstname} lastname={lastname} email={email} phone={phone} />
      </div>
    </>
  )
}

export default CreateResume;