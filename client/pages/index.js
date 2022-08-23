import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text_btn}>
          <h1>
            Be a chancer, the cancer <br /> rules balancer !
          </h1>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 hover:to-purple-800 text-white text-sm font-bold py-2 px-4 rounded-full ">
            Find out more
          </button>
        </div>
        <div>
          <img className={styles.f_img} src="/images/bg.svg" alt="" />
          <img className={styles.s_img} src="/images/vector.png" alt="" />
          <img className={styles.t_img} src="/images/shape.svg" alt="" />
        </div>
      </div>
      <div className={styles.dd}>
        {/* top shape start */}
        <div className={styles.custom_shape_divider_top_1661243877}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape_fill}
            ></path>
          </svg>
        </div>
        {/* top shape end */}

        {/* content start */}
        <h1 className="">hhh</h1>
        <button>click here</button>
        {/* content end */}
        
        {/* bottom shape start */}
        <div className={styles.custom_shape_divider_bottom_1661243641}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape_fill}
            ></path>
          </svg>
        </div>
        {/* bottom shape end */}
      </div>
    </div>
  );
}
