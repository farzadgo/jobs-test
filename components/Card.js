import Image from 'next/image'
import { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import styles from '../styles/Card.module.css'
// import axios from 'axios'

const Card = ({ job, handleToggle, handleDelete }) => {

  const iconProps = {
    color: '#272727',
    size: 28,
    strokeWidth: 1.5
  }

  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  // const [data, setData] = useState('')
  const [local, setLocal] = useState(true)

  useEffect(() => {
    if (job.hasOwnProperty('id')) {
      setLocal(false)
    }
    // const fetchData = async () => {
    //   const result = await axios(job.imageUrl);
    //   setData(result.data);
    // };
    // fetchData();

  }, [])

  return (
   <div className={styles.card} >
      <Image src={job.imageUrl} layout='responsive' placeholder='blur' blurDataURL={rgbDataURL(237, 181, 6)} width={500} height={667} className={styles.jobthumb} />
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