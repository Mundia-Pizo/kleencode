import React from 'react'
import homeStyles from '../../styles/Home.module.css'
import Image from 'next/image'

const articleCard = (article) => {
  return (
    <div  className={homeStyles.postCard}>
        <Image  src='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
          <h4>{article.title}</h4>
          <p>{article.content}</p>
    </div>
  )
}


export default articleCard