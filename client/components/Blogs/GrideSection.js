import styles from "./Gride.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Gride(img, avatar, Fname){
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols3 gap-14">
      {Post('/blogs/b4.jpg','/posts/postOwner/a1.jpg','Eric Parker')}
      {Post('/blogs/b2.jpg','/posts/postOwner/a2.jpg','Olivia Louise')}
      {Post('/blogs/b1.jpg','/posts/postOwner/a3.jpg','Robert Crawford')}
      {Post('/blogs/b3.jpg','/posts/postOwner/a4.jpg','Jasmine Louise')}
      {Post('/blogs/b2.jpg','/posts/postOwner/a5.jpg','Eric Hazard')}
      {Post('/blogs/b4.jpg','/posts/postOwner/a3.jpg','Robert Crawford')}
    </div>
  );
}

function Post(img, avatar, Fname){
  return (
    <div className="item">
      <div className="images">
        <Link href="">
          <a>
            <Image
              className="rounded"
              src={img}
              width={500}
              height={300}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className={styles.Grid}>
          <div className="title">
            <div className={styles.first}>
              <h3>HealthCare</h3>—<span>August 26, 2022</span>
            </div>
          </div>
          <div className={styles.second}>
            <h1>
              Your most unhappy customers are <br /> your greatest source of
              learning.
            </h1>
          </div>
          <div className={styles.third}>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className={styles.fourth}>
            <div className={styles.fourth_left}>
              <img src={avatar} alt="" />
            </div>
            <div className={styles.fourth_right}>
              <h3>{Fname}</h3>
              <span>CEO and Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
