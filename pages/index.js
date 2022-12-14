import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.heroGrid}>
          <div className={homeStyles.heroHeading}>
            <h1>Code effeciency and effectiveness</h1>
            <p>write clean and concise code in your projects</p>
          </div>
          <div className={homeStyles.image_padding}>
            <Image  src='/../static/images/hero_image.png' height={300} width={500} layout='responsive' />
          </div>
        </div>
        <div>
          <h1>Objectives</h1>
          <div className={homeStyles.objectives}>
            <div>
              <h5>Card 1</h5>
              <p>This is the card from the main page of the great site </p>
            </div>
            <div>
              <h5>Card 1</h5>
              <p>This is the card from the main page of the great site </p>
            </div>
            <div>
              <h5>Card 1</h5>
              <p>This is the card from the main page of the great site </p>
            </div>
            <div>
              <h5>Card 1</h5>
              <p>This is the card from the main page of the great site </p>
            </div>
          </div>
        </div>
        <div className={homeStyles.lastest_posts}>
          <h1>Latest Posts </h1>
        </div>
        <section className={homeStyles.mainGrid}>
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
      </div>
    </div>
  )
}
