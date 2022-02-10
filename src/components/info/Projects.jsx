import axios from "axios";
import { useEffect, useState } from "react"

function Projects() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

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


  return (
    <div className="my-16" id="projects">
      <h1 className='text-4xl my-4'>Projects</h1>
      <div> {user.login} </div>
      <div>
        {repos.map((item,i)=>(
          <div key={i}>
            {item.name}
          </div> 
        )) }
      </div>
    </div>
  )
}

export default Projects
