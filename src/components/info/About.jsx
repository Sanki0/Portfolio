import bootstrap from '../../assets/bootstrap.svg'
import cplusplus from '../../assets/c++.svg'
import css from '../../assets/css.svg'
import express from '../../assets/express.svg'
import git from '../../assets/git.svg'
import html from '../../assets/html.svg'
import javascript from '../../assets/javascript.svg'
import mongodb from '../../assets/mongodb.svg'
import nodejs from '../../assets/nodejs.svg'
import postgresql from '../../assets/postgresql.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import sass from '../../assets/sass.svg'
import tailwind from '../../assets/tailwind.svg'

function About() {
  return (
    <div className='my-2'>
      <h1 className='text-4xl'>About Me</h1>
      <div className=' lg:grid grid-cols-2 justify-between gap-6'>
        <div className='mt-4'>
          <p className='mb-6'>Hey, my name is Sebastian "Sanki0" Ferreyra. A Computer Science student and a Software Engineer from Lima, Peru.</p>
          <p className='mb-6'>As an aspiring Software Engineer, I have co-founded a NGO that helped children with low economic resources to study during the COVID-19 pandemic; and have several projects that show my capabilities as a developer.</p>
        </div>
        <div className='mt-4'>
          <h2>Technologies I've been working with: </h2>
          <div className='my-6 flex flex-row flex-wrap gap-4 justify-center lg:grid grid-cols-5 lg:my-2 lg:gap-2'>
            <img className='h-16' src={bootstrap} alt="bootstrap" />
            <img className='h-16' src={cplusplus} alt="cplusplus" />
            <img className='h-16' src={css} alt="css" />
            <img className='h-16' src={express} alt="express" />
            <img className='h-16' src={git} alt="git" />
            <img className='h-16' src={html} alt="html" />
            <img className='h-16' src={javascript} alt="javascript" />
            <img className='h-16' src={mongodb} alt="mongodb" />
            <img className='h-16' src={nodejs} alt="nodejs" />
            <img className='h-16' src={postgresql} alt="postgresql" />
            <img className='h-16' src={python} alt="python" />
            <img className='h-16' src={react} alt="react" />
            <img className='h-16' src={sass} alt="sass" />
            <img className='h-16' src={tailwind} alt="tailwind" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
