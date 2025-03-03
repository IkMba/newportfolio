import React from 'react'
import Button from './Button'
import ArrowupIcon from '../icons/ArrowupIcon'
import { Link } from 'react-router-dom'

export default function ExperienceCard({experience}) {
    const {date,title,org,detail,tools,link} = experience
  return (
    <div className='exp-card group mt-8 px-4 py-4 rounded-md md:flex gap-8 transition delay-100 ease-in-out'>
      <p className='uppercase text-nowrap md:mt-1'>{date}</p>
      <div>
      <Link to={link} className='group-hover:!text-lav2'>{title} . {org}<span><ArrowupIcon/></span></Link>
      <p className='my-2'>{detail}</p>
      <div className='flex flex-wrap gap-4 mt-4'>
        {tools.map(it => (
            <Button key={it.org}>{it}</Button>
        ))}
      </div>
      </div>
    </div>
  )
}
