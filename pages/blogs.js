import React from 'react'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import ArticleCard from './components.js/articleCard'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from "react";
import {db} from './config/firebase'

const blogs = () => {
  const [isLoaded, setLoading] = useState(false)
  const [articles, setArticles] = useState([])
  async function getCities(db) {
  // Get a list of cities from your database
  const articleCollection = collection(db, 'Articles');
  const ArticleSnapshot = await getDocs(articleCollection);
  const artilceList = ArticleSnapshot.docs.map(doc => doc.data());
    
  setArticles = artilceList;
  console.log(artilceList)
  return artilceList;
  }
  getCities();
  
  return (
    <section className={homeStyles.mainGrid}>
      <ArticleCard />
          <div  className={homeStyles.postCard}>
            <Image  src='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae magnam. Molestias id cupiditate temporibus rerum sunt accusantium cumque dignissimos, accusamus magnam, placeat unde minima obcaecati a iste? Reiciendis eos dolor doloremque optio </p>
          </div>
          <div  className={homeStyles.postCard}>
            <Image  src='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae magnam. Molestias id cupiditate temporibus rerum sunt accusantium cumque dignissimos, accusamus magnam, placeat unde minima obcaecati a iste? Reiciendis eos dolor doloremque optio</p>
          </div>
          <div  className={homeStyles.postCard}>
            <Image  src='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae magnam. Molestias id cupiditate temporibus rerum sunt accusantium cumque dignissimos, accusamus magnam, placeat unde minima obcaecati a iste? Reiciendis eos dolor doloremque optio</p>
          </div>
        </section>
  )
}

export default blogs




