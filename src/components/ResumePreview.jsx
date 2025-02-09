
const ResumePreview = ({ firstname, lastname, email, phone}) => {
  return (
    <>
        <div className='bg-white flex flex-col'>
            {/* Top section */}
            <h1>{firstname} {lastname}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
        </div>
    </>
  )
}

export default ResumePreview