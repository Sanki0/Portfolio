import axios from "axios";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { useEffect, useState } from "react"

function Projects() {

  const [repos, setRepos] = useState([])
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const GITHUB_URL_PORTFOLIO = process.env.REACT_APP_GITHUB_URL_PORTFOLIO
    const GITHUB_TOKEN_PORTFOLIO = process.env.REACT_APP_GITHUB_TOKEN_PORTFOLIO

    const github = axios.create({
      baseURL: GITHUB_URL_PORTFOLIO,
      headers: {
        Authorization: `token ${GITHUB_TOKEN_PORTFOLIO}`,
      },
    })

    const getRepos = async () => {
      github
        .get(`${GITHUB_URL_PORTFOLIO}users/Sanki0/repos`)
        .then((res) => {
          setRepos(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getRepos()
  }, [])

  const handleClick = () => {
    setShowMore(!showMore)
  }
  const numberOfItems = showMore ? repos.length : 6

  return (
    <div className="my-16" id="projects">
      <div className="projects">
        <h1 className='text-4xl my-4'>Projects</h1>
        <div className="text-center relative inline-block" >
          <div className="project-content absolute  top-1/2 left-1/2" style={{ width:'75%' ,transform: 'translate(-50%, -50%)' }}>
            <h1 className="text-2xl">GitHub Finder</h1>
            <p>A React app to search GitHub profiles and see profile details</p>
          </div>

          <div className="project-image opacity-25" >
            <a href="https://github-finder-sanki0.vercel.app/" target='_blank' rel="noreferrer">
              <img
                className="grayscale hover:grayscale-0 object-cover"
                src="https://i.ibb.co/pnxt18F/screenshot-github-finder.png"
                alt="screenshot-github-finder"
                style={{ minHeight: '200px' }} />
            </a>
          </div>

        </div>
      </div>
      <div className="repositories">
        <h1 className='text-4xl my-4'>Repositories</h1>
        <div className="lg:grid grid-cols-3 gap-4 justify-center">
          {repos.slice(0, numberOfItems).map((item, i) => {
            return (
              <div key={i} className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
                <div className='card-body text-center'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    <a href={item.html_url}>
                      <FaLink className='inline mr-1' /> {item.name}
                    </a>
                  </h3>
                  <p className='mb-3'>{item.description}</p>
                  <div className="flex justify-evenly">
                    <div className='mr-2 badge badge-info badge-lg'>
                      <FaEye className='mr-2' /> {item.watchers_count}
                    </div>
                    <div className='mr-2 badge badge-success badge-lg'>
                      <FaStar className='mr-2' /> {item.stargazers_count}
                    </div>
                    <div className='mr-2 badge badge-error badge-lg'>
                      <FaInfo className='mr-2' /> {item.open_issues}
                    </div>
                    <div className='mr-2 badge badge-warning badge-lg'>
                      <FaUtensils className='mr-2' /> {item.forks}
                    </div>
                  </div>
                  <footer>
                    {item.language}
                  </footer>
                </div>
              </div>
            )
          })}
        </div>
        <div className="container flex justify-center">
          <button className="px-5 py-2 hover:bg-gray-600 active:bg-gray-900" onClick={() => handleClick()}>
            {showMore ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
