import React,{useState, useEffect} from 'react'
import './post.css'
import {Link} from 'react-router-dom'
const Post=()=>{
    const [data, setData] = useState([])
    
  useEffect(()=>{
    fetch("/app/posts")
    .then((res)=>{return res.json()})
    .then((val)=>{
      console.log(val)
      setData(val)
    }).catch(err=>{
      alert("data catch error")
    })
  },[])
  

  if(data===null){
    return(
      <h1>Loading...</h1>
    )
  }
    return(
        <div className='back'>
          <Link  to='/'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to page</Link>
            <section className='header'>
          <img className='instaLogo'src={require('./Images/instaclon logo.png')} alt='instaclone logo'/>
          <Link to='/post/add'><img className='camara' src={require('./Images/camara.png')} alt='camara Icon'/></Link>
        </section>
             {data.map((val, index)=>{
              
        return(
          <div key={index} className='main-container'>
            <div className='name-container'>
                <section className='name Section'>
                    <h4>{val.name}</h4>
                    <p>{val.location}</p>
                </section>
                <section className='ellipsis Section'>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </section>
            </div>
            <section>
                <img className='postImage' src={val.PostImage} alt=""/>
            </section>
            {/* <section>
                <img className='postImage' src={img} alt=""/>
            </section> */}
            <section className='Fav-container'>
                <div>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                <p>{val.date}</p>
                
            </section>
            <p className='likes'>{`${parseInt(Math.random()*100)} likes`}</p>
            <div>
                <h4 className='foot'>{val.description}</h4>
            </div>
            
          </div>
        )
      })
      }

        </div>
    )
}
export default Post
