import axios from "axios";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { useEffect, useState } from "react"

function Projects() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [showMore, setShowMore] = useState(false)

  const getUser = async () => {
    axios
      .get(`https://api.github.com/users/Sanki0`)
      .then((res) => {
        console.log(res)
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const getRepos = async () => {
    axios
      .get(`https://api.github.com/users/Sanki0/repos`)
      .then((res) => {
        console.log(res)
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
      <div> {user.login} </div>
      <div className="lg:grid grid-cols-3 gap-4 justify-center">
        {repos.slice(0, numberOfItems).map((item, i) => {
          return (
            <div key={i} className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
              <div className='card-body'>
                <h3 className='mb-2 text-xl font-semibold'>
                  <a href={item.html_url}>
                    <FaLink className='inline mr-1' /> {item.name}
                  </a>
                </h3>
                <p className='mb-3'>{item.description}</p>
                <div>
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
