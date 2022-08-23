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

        {/* title start  */}
        <h1 className={styles.second_title}>I'm living with</h1>
        {/* title end  */}

        {/* card start */}
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        {/* card end */}

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
