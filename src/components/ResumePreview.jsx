
const ResumePreview = ({ firstname, lastname, email}) => {
  return (
    <>
        <div className='bg-white flex flex-col'>
            {/* Top section */}
            <h1>{firstname} {lastname}</h1>
            <h1>{email}</h1>
        </div>
    </>
  )
}

export default ResumePreview