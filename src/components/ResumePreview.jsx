
const ResumePreview = ({ firstname, lastname, email, phone, linkedin}) => {
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
            
        </div>
    </>
  )
}

export default ResumePreview