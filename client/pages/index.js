import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import bg from "../public/image/bg.svg";

export default function Home() {
  return (
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text_btn}>
          <h1>Be a chancer, the cancer <br /> rules balancer !</h1>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 hover:to-purple-800 text-white text-sm font-bold py-2 px-4 rounded-full ">
            Find out more
          </button>
        </div>
        <div>
          <img className={styles.f_img} src="/image/bg.svg" alt="" />
          <img className={styles.s_img} src="/image/vector.png" alt="" />
          <img className={styles.t_img} src="/image/shape.svg" alt="" />
        </div>
      </div>
      <h1 className="h-96" >hzz</h1>
    </div>
  );
}
