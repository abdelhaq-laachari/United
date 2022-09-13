import styles from "./Category.module.css";
import Image from "next/image";
import Link from "next/link";

export default function categorySection() {
  return (
    <section className="container mx-auto md:px-20 py-16 ">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {Post('/blogs/b1.jpg')}
            {Post('/blogs/b2.jpg')}
            {Post('/blogs/b3.jpg')}
            {Post('/blogs/b4.jpg')}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travels</h1>
          <div className="flex flex-col gap-6">
            {Post('/blogs/b4.jpg')}
            {Post('/blogs/b3.jpg')}
            {Post('/blogs/b2.jpg')}
            {Post('/blogs/b1.jpg')}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post(img) {
  return (
    <div
      className="flex items-center
     gap-5"
    >
      <div className="image flex flex-col justify-start">
        <Link href="">
          <a>
            <Image
              className="rounded"
              src={img}
              width={150}
              height={100}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
        <div className={styles.fourth}>
          <div className={styles.fourth_left}>
            <img src="/posts/postOwner/a5.jpg" alt="" />
          </div>
          <div className={styles.fourth_right}>
            <h3>Eric Parker</h3>
            <span>CEO and Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
