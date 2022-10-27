import React from 'react'
import homeStyles from '../../styles/Home.module.css'
import Image from 'next/image'

const articleCard = () => {
    

  return (
    <div  className={homeStyles.postCard}>
        <Image  src='/../static/images/hero_image.png' height={400} width={500} layout='responsive' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae magnam. Molestias id cupiditate temporibus rerum sunt accusantium cumque dignissimos, accusamus magnam, placeat unde minima obcaecati a iste? Reiciendis eos dolor doloremque optio</p>
    </div>
  )
}

export default articleCard