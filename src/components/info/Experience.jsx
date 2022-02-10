import { useState } from 'react'
import jobsJson from '../../jobs.json'

function Experience() {
  const [job, setJob] = useState(jobsJson.jobs[0].company)
  const [position, setPosition] = useState(jobsJson.jobs[0].position)
  const [responsibilities, setResponsibilities] = useState(jobsJson.jobs[0].responsibilities)

  const selectJob = (e) => {
    e.preventDefault()
    setJob(e.target.innerHTML)
    setPosition(jobsJson.jobs[e.target.id - 1].position)
    setResponsibilities(jobsJson.jobs[e.target.id - 1].responsibilities)
  }

  return (
    <div className="my-16" style={{minheight:400}} id="experience">
      <h1 className='text-4xl my-4'>Experience</h1>
      <div className='lg:flex flex-row gap-6'>
        <ul className="flex flex-row justify-evenly p-3 my-12 lg:justify-start lg:flex-col">
          {jobsJson.jobs.map((item) => (
            <li key={item.id} className="py-4" >
              <button id={item.id} onClick={selectJob} className="px-5 py-2 hover:bg-gray-600 active:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:border-l-2 border-white-500/100">
                {item.company}
              </button>
            </li>
          ))}
        </ul>

        <div className=''>
          <h1 className="text-2xl my-10"> {position} at {job} </h1>
          <ul className='my-6'>
            {responsibilities.map((item) => (
              <li key={item.id} className="list-disc mb-3">{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience;
