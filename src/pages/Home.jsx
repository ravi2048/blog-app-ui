import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function Home() {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [category]);


  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map(post => (
            <div className="post" key={post.id}>
              <div className="image">
                <img src={post.img} alt='post'/>
              </div>
              <div className="content">
                <h1>{post.title}</h1>
                <p>{post.description.substring(0, 400) + ' ...'}</p>
                <Link className='link' to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
