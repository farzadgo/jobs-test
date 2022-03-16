import { useState, useEffect } from 'react'
import Dexie from 'dexie'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import styles from '../styles/Page.module.css'


const Upload = () => {
  const [loading, setLoading] = useState(true)

  // FOR MODAL
  const [desc, setDesc] = useState('')
  const [titl, setTitl] = useState('')
  const [toggle, setToggle] = useState(false)
  const toggler = (sel) => {
    setToggle(prev => !prev)
    setTitl(sel.title)
    setDesc(sel.description)
  }

  const db = new Dexie('localDB')
  db.version(1).stores({
    posts: "title, gender, description, imageUrl"
  })
  db.open().catch(err => {
    console.log(err.stack || err)
  })

  const [postTitle, setTitle] = useState('')
  const [postGender, setGender] = useState('')
  const [postDescription, setDescription] = useState('')
  const [postFile, setFile] = useState('')
  const [posts, setPosts] = useState('')

  const getFile = e => {
    let reader = new FileReader()
    reader.readAsDataURL(e[0])
    reader.onload = () => {
      setFile(reader.result)
    }
  }

  const deletePost = async (id) => {
    db.posts.delete(id)
    let allPosts = await db.posts.toArray()
    setPosts(allPosts)
  }

  const getPostInfo = e => {
    e.preventDefault()
    if (postTitle !== '' && postGender !== '' && postDescription !== '' && postFile !== '') {
      let post = {
        title: postTitle,
        gender: postGender,
        description: postDescription,
        imageUrl: postFile
      }
      db.posts.add(post).then(async() => {
        let allPosts = await db.posts.toArray()
        setPosts(allPosts)
      })
    }
    // cleaning input fields
    Array.from(e.target).forEach(e => (e.value = ''))
    // cleaning states
    setTitle('')
    setGender('')
    setDescription('')
    setFile('')
  }

  useEffect(() => {
    console.log('Upload Page mounted')
    const getPosts = async () => {
      let allPosts = await db.posts.toArray()
      setPosts(allPosts)
      setTimeout(() => {setLoading(false)}, 900)
    }
    getPosts()

    return () => {
      console.log('Upload Page unmounted')
    }
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>Upload Your Own</h1>
      </div>

      <form className={styles.form} onSubmit={getPostInfo}>
        <div className={styles.textinput} >
          <label>Job Title</label>
          <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className={styles.textinput} >
          <label>Gender</label>
          <input type="text" name="gender" onChange={e => setGender(e.target.value)} />
        </div>
        <div className={styles.textinput} >
          <label>Job Description</label>
          <textarea name="description" onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cover" className="cover">Job Thumbnail</label>
          <input type="file" id="cover" name="file" onChange={e => getFile(e.target.files)} />
        </div>
        <button className={styles.submitbtn} type="submit" >Submit</button>
      </form>

      <div className={styles.title}>
        <h1>Uploaded Jobs</h1>
      </div>
      {
        loading ? <Loader /> :
        <div className={styles.grid}>
          {posts && posts.map(post => <Card job={post} key={post.title} handleToggle={toggler} handleDelete={deletePost}/>)}
        </div>
			}

      {toggle && <Modal handleToggle={toggler} desc={desc} titl={titl} />}
    </div>
  )
}

export default Upload