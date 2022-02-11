import axios from "axios";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { useEffect, useState } from "react"

function Projects() {
  const GITHUB_URL_PORTFOLIO = process.env.REACT_APP_GITHUB_URL_PORTFOLIO
  const GITHUB_TOKEN_PORTFOLIO = process.env.REACT_APP_GITHUB_TOKEN_PORTFOLIO

  const github = axios.create({
    baseURL: GITHUB_URL_PORTFOLIO,
    headers: {
      Authorization: `token ${GITHUB_TOKEN_PORTFOLIO}`,
    },
  })

  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [showMore, setShowMore] = useState(false)

  const getUser = async () => {
    github
      .get(`/users/Sanki0`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
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

  useEffect(() => {
    getUser()
    getRepos()
  }, [])

  const handleClick = () => {
    setShowMore(!showMore)
  }
  const numberOfItems = showMore ? repos.length : 6

  return (
    <div className="my-16" id="projects">
      <h1 className='text-4xl my-4'>Projects</h1>
      <div className='card shadow-md compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className='rounded-full shadow w-14 h-14'>
                <img src={user.avatar_url} alt='Profile' />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title'>{user.login}</h2>
            <a
              className='text-base-content text-opacity-40'
              href={`https://github.com/Sanki0`}
              target='_blank'
              rel="noreferrer"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
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
  )
}

export default Projects
