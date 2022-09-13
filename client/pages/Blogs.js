import styles from "../styles/Blogs.module.css";
import Navbar from "../components/NavBar/Navbar";
import Slide from "../components/Blogs/Slide";
import GrideSection from "../components/Blogs/GrideSection";
import CategorySection from "../components/Blogs/CategorySection";
import Footer from "../components/Footer/Footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function () {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Navbar />
      <div className={styles.first_section}>
        <div className={styles.title_first_section}>
          <h1>Most Popular</h1>
        </div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            slidesPerView={1}
            className={styles.mySwiper}
          >
            <SwiperSlide>{mySlide('/blogs/b4.jpg','/posts/postOwner/a2.jpg','Olivia Louise')}</SwiperSlide>
            <SwiperSlide>{mySlide('/blogs/b3.jpg','/posts/postOwner/a1.jpg','Alex Parker')}</SwiperSlide>
            <SwiperSlide>{mySlide('/blogs/b1.jpg','/posts/postOwner/a3.jpg','Robert Crawford')}</SwiperSlide>
            <SwiperSlide>{mySlide('/blogs/b2.jpg','/posts/postOwner/a4.jpg','Jasmine Louise')}</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container mx-auto md:px-20 py-20 ">
        <h1 className="font-bold text-3xl py-12 text-center ">Latest Post</h1>
        <div>
          <GrideSection />
        </div>
      </div>
      <CategorySection />
      <Footer />
    </div>
  );
}

function mySlide(img, avatar, Fname) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.first}>
          <h3>HealthCare</h3>—<span>August 26, 2022</span>
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
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
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
  );
}
