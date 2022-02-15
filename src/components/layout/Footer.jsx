import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-4 text-neutral-content lg:flex-row justify-between px-20">
      <div className="text-center items-center justify-center grid-flow-col">
        <p className='text-xs'>Design & Build by Sebastian "Sanki0" Ferreyra</p>
      </div>
      <div className="flex justify-center gap-8 md:place-self-center md:justify-self-end">
        <a href='https://twitter.com/SebasFC14' rel="noreferrer" target="_blank">
          <FiTwitter className='h-6 w-6' />
        </a>
        <a href='https://github.com/Sanki0' rel="noreferrer" target="_blank">
          <FiGithub className='h-6 w-6' />
        </a>
        <a href='https://www.linkedin.com/in/sebastian-ferreyra-4a0a47201/' rel="noreferrer" target="_blank">
          <FiLinkedin className='h-6 w-6' />
        </a>
        <a href='https://www.instagram.com/iamsanki0/' rel="noreferrer" target="_blank">
          <FiInstagram className='h-6 w-6' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
