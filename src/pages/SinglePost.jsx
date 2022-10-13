import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import { AuthContext } from "../context/authContext";
import UserLogo from "../assets/man.png";
import EditLogo from "../assets/edit.png";
import DeleteLogo from "../assets/delete.png";


export default function SinglePost() {
  const [post, setPost] = useState({});
  const [relevantPosts, setRelevantPosts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const post_id = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${post_id}`);
        setPost(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, [post_id]);

  useEffect(() => {
    const fetchRelevantPosts = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${post.category}`);
        setRelevantPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRelevantPosts();
  }, [post])


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post_id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='post'>
      <div className='container'>
        <div className='section-1'>
          <div className='image'>
            <img
              src={post.img}
              alt='post'
            />
          </div>
          <div className='meta-data'>
            <div className='author-details'>
              <img src={post.usrImg ? post.usrImg : UserLogo} alt='author' />
              <div className="name">
                <span>{post.username}</span>
                <span>Posted {moment(post.date).fromNow()}</span>
              </div>
            </div>
            {currentUser.username === post.username &&
              <div className='post-actions'>
                <img src={EditLogo} alt='logo1' />
                <img onClick={handleDelete} src={DeleteLogo} alt='logo2' />
              </div>
            }

          </div>

          <div className='content'>
            <h1>{post.title}</h1>
            <p>
              {post.description}
            </p>
          </div>
        </div>
        <div className='section-2'>
          <h1 className="title">Other posts you may like</h1>
          {
            relevantPosts.map(relevantPost => (
              <>
                {
                  relevantPost.id !== post.postId &&
                    <div className="post" key={relevantPost.id}>
                      <div className="image">
                        <img src={relevantPost.img} alt='post' />
                      </div>
                      <div className="content">
                        <h1>{relevantPost.title}
                          <Link className='link' to={`/post/${relevantPost.id}`}>
                            <button>Read More</button>
                          </Link>
                        </h1>
                      </div>
                    </div>
                }
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
}
