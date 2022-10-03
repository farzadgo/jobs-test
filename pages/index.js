import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import styles from '../styles/Page.module.css'


export const getStaticProps = async () => {
  const res = await fetch('https://fago-fake-server-app.herokuapp.com/jobs')
  const data = await res.json()
  return {
    props: { jobs: data }
  }
}


const Home = ({ jobs }) => {
  const [data, setData] = useState('')
	const [loading, setLoading] = useState(true)
  // console.log(data)

  // FOR MODAL
  const [desc, setDesc] = useState('')
  const [titl, setTitl] = useState('')
  const [toggle, setToggle] = useState(false)
  const toggler = (sel) => {
    setToggle(prev => !prev)
    setTitl(sel.title)
    setDesc(sel.description)
  }

  useEffect(() => {
    console.log('home mounted')
    if (jobs) {
      setData(jobs)
      // setTimeout(() => {setLoading(false)}, 900)
      setLoading(false)
    }
    return () => {
      console.log('home unmounted')
    }
  }, [jobs])

  return (
    <div className={styles.container} >

      <div className={styles.title}>
        <h1>Available Positions</h1>
        <p>From <a href="https://fago-fake-server-app.herokuapp.com/" target="_blank" rel="noreferrer"><b>this</b></a> database endpoint</p>
      </div>

      {
        loading ? <Loader /> :
        <div className={styles.grid}>
          {data && data.map(job => <Card job={job} key={job.id} handleToggle={toggler} />)}
        </div>
			}
      
      {toggle && <Modal handleToggle={toggler} desc={desc} titl={titl} />}
    </div>
  )
}

export default Home