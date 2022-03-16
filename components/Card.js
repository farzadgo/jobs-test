import Image from 'next/image'
import { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import styles from '../styles/Card.module.css'


const Card = ({ job, handleToggle, handleDelete }) => {

  const iconProps = {
    color: '#272727',
    size: 28,
    strokeWidth: 1.5
  }

  const [local, setLocal] = useState(true)

  useEffect(() => {
    if (job.hasOwnProperty('id')) {
      setLocal(false)
    }
  }, [])

  return (
   <div className={styles.card} >
      <Image src={job.imageUrl} layout='responsive' width={500} height={667} className={styles.jobthumb} />
      <div className={styles.jobtitle} onClick={() => handleToggle(job)} >
        <h3>{job.title}</h3>
        <p>{job.gender}</p>
      </div>
      {local && <button className={styles.delbtn} onClick={() => handleDelete(job.title)}>
        <Icon.Trash2 {...iconProps}/>
      </button>}
   </div>
  )
}
 
export default Card