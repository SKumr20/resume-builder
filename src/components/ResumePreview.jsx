
const ResumePreview = ({ firstname, lastname, email, phone, linkedin, education1, educationDegree1, education2, educationDegree2, experience1, experiencePlace1, education1Location, education2Location, education1Date, education2Date, experience1Location, experience1Date}) => {

  return (
    <>
        <div className='bg-white h-full flex flex-col border-t-[20px] rounded-xl'>
            {/* Top section */}
            <h2 className="font-bold text-4xl text-center mt-4">{firstname} {lastname}</h2>
            <div className="flex flex-row items-center justify-center text-sm gap-2">
              <h2 className="">{email}</h2>
              <h2 className="border-l-[1px] border-black pl-2">{phone}</h2>
              <h2 className="border-l-[1px] border-black pl-2">{linkedin}</h2>
            </div>


            {/* Education */}
            <h2 className="text-lg mx-12 mt-4">Education</h2>
            <hr className="border-[0.5px] mx-12 border-black"/>

            <div className="flex flex-row justify-between">
              <div>
                <h2 className="mx-16 mt-1 font-bold">{education1}</h2>
                <h2 className="mx-16 font-light text-sm">{educationDegree1}</h2>
              </div>

              <div className="text-right">
                <h2 className="mx-16 font-light mt-1">{education1Location}</h2>
                <h2 className="mx-16 font-light text-sm">{education1Date}</h2>
              </div>
            </div>



            <div className="flex flex-row justify-between">
              <div>
                <h2 className="mx-16 mt-1 font-bold">{education2}</h2>
                <h2 className="mx-16 font-light text-sm">{educationDegree2}</h2>
              </div>

              <div className="text-right">
                <h2 className="mx-16 font-light mt-1 ">{education2Location}</h2>
                <h2 className="mx-16 font-light text-sm">{education2Date}</h2>
              </div>
            </div>


            {/* Experience */}
            <h2 className="text-lg mx-12 mt-4">Experience</h2>
            <hr className="border-[0.5px] mx-12 border-black"/>

            <div className="flex flex-row justify-between">
              <div>
                <h2 className="mx-16 mt-1 font-bold">{experience1}</h2>
                <h2 className="mx-16 mt-1 font-light text-sm">{experiencePlace1}</h2>
              </div>
              <div className="text-right">
                <h2 className="mx-16 font-light mt-1 ">{experience1Location}</h2>
                <h2 className="mx-16 font-light text-sm">{experience1Date}</h2>
              </div>

            </div>

        </div>
    </>
  )
}

export default ResumePreview