
function Contact() {
  return (
    <div className="my-16" id="contact">
      <h1 className='text-4xl my-4'>Contact</h1>
      <div className="text-center">
        <p className="my-8 p-4">
          I’m  looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a
          className="border rounded my-8 px-5 py-4 hover:bg-gray-600 active:bg-gray-900 "
          href="mailto:sebas_elias_999@hotmail.com"
          rel="noopener noreferrer"
        >
          Say Hi
        </a>
      </div>

    </div>
  )
}

export default Contact