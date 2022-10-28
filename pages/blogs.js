import React from 'react'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import ArticleCard from './components.js/articleCard'
import { useEffect ,  useState} from 'react'
import ArticlesServices from './services/articles.services'




const blogs = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles();
  }, [])
  
  const getArticles = async() => {
    const data = await ArticlesServices.getAllArtilces()
    setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log(articles)
  }
  return (
    <section className={homeStyles.mainGrid}>
      {/* <pre>{ JSON.stringify(articles, undefined, 4)}</pre> */}
      {articles.map((article) => {
        return  <div  className={homeStyles.postCard}>
            <Image  src={article.image} placeholder="blur" blurDataURL='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
          <h4>{article.title}</h4>
          <p>{ article.content}</p>
          </div>
      })}
     </section>
  )
}

export default blogs




