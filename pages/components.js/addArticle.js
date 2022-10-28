import React from 'react'
import { useState, useEffect } from 'react'
import authStyles from '../../styles/Auth.module.css'
import ArticleServices from '../services/articles.services'
import {Alert} from 'react-bootstrap'


const addBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('in the handle submit')
        setMessage("");
        if (title === "" || author === "" || content === "") {
            setMessage({ error: true, msg: "All field are required" })
            return;
        }
        const newArticle = {
            title,
            author,
            content,
        }
        console.log(newArticle)

        try {
            await ArticleServices.addArticle(newArticle);
            setMessage({ arror: false, msg: "New article added" })
            
        } catch(error){
            console.log(error)
            setMessage({arror:true, msg:error.message})
        }
        setTitle("");
        setContent("");
        setAuthor("");
        
    };
  return (
      <div> 
          
          <div className={authStyles.authSpace}>
              {message?.msg && (<Alert variant={message?.error ? "danger" : "success"} dismissible onClose={() => setMessage("")}>
               {message?.msg}      
              </Alert>)}
            <form onSubmit={handleSubmit} className={authStyles.main_auth_column} >
              <label>title</label>
                  <input id='title' placeholder='title' type='text' value={title} onChange={(e)=>setTitle(e.target.value) } />
              <label>author</label>
                  <input id='author' placeholder='author' type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
              <label>author</label>
              <input id='content' placeholder='content' type='text' value={content} onChange={(e) => setContent(e.target.value)}/>
              <button type='submit'>Post</button>
          </form>
          </div>
    </div>
  )
}

export default addBook;
