import { Link } from 'react-scroll'
import resume from '../../assets/Resume-SebastianFerreyra.pdf'

function Navbar() {

  const toggleCollapse = (collapseId) => {
    const menu = document.getElementById(collapseId);
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <header className='flex py-8 items-center'>
      <nav className="container flex flex-wrap justify-between items-center mx-auto block sm:px-4 w-full">
        <Link to="">
          <div className="ml-6 self-center text-lg font-semibold whitespace-nowrap cursor-pointer">Sebastian Ferreyra</div>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 mr-4 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`hidden w-full md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-center items-center">
            <li >
              <Link onClick={() => toggleCollapse('mobile-menu')} to="" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 cursor-pointer" aria-current="page" >Home</Link>
            </li>
            <li>
              <Link onClick={() => toggleCollapse('mobile-menu')} to="about" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 cursor-pointer">About</Link>
            </li>
            <li>
              <Link onClick={() => toggleCollapse('mobile-menu')} to="experience" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 cursor-pointer">Experience</Link>
            </li>
            <li>
              <Link onClick={() => toggleCollapse('mobile-menu')} to="projects" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 cursor-pointer">Projects</Link>
            </li>
            <li>
              <Link onClick={() => toggleCollapse('mobile-menu')} to="contact" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 cursor-pointer">Contact</Link>
            </li>
            <a href={resume} download="Resume-SebastianFerreyra" target='_blank' rel='noreferrer' >
              <button className="mt-2 p-1 bg-inherit border border-white rounded lg:mt-0" style={{ backgroundColor: 'rgb(0,0,0)' }}>Resume</button>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
