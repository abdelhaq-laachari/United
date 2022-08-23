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
      <div className={styles.second_section}>
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
        {/* card start */}
        <section class="flex-col items-center">
          <h1 className={styles.second_title}>I'm living with</h1>
          <div class="max-w-6xl py-12 mx-auto ">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
              <a
                href="#_"
                class="flex items-center flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
              >
                <div class="flex items-center justify-center w-16 h-16 border border-indigo-200 shadow-inner bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-xl lg:h-20 lg:w-20">
                  <img src="/images/lung.png" alt="" />
                </div>
                <div class="flex-1">
                  <h5 className={styles.title_cancer}>Lung</h5>
                  <p className={styles.par_cancer}>
                    Engrossed listening. Park gate sell they west hard for
                    the.Engrossed listening. Park gate sell they west hard for
                    the.
                  </p>
                  <span class="flex items-center text-lg font-bold text-indigo-600">
                    Read more
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
              <a
                href="#_"
                class="flex items-center flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
              >
                <div class="flex items-center justify-center w-16 h-16 border border-indigo-200 shadow-inner bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-xl lg:h-20 lg:w-20">
                  <img
                    className={styles.img_cancer}
                    src="/images/breast.png"
                    alt=""
                  />
                </div>
                <div class="flex-1">
                  <h5 className={styles.title_cancer}>Breast</h5>
                  <p className={styles.par_cancer}>
                    Engrossed listening. Park gate sell they west hard for
                    the.Engrossed listening. Park gate sell they west hard for
                    the.
                  </p>
                  <span class="flex items-center text-lg font-bold text-indigo-600">
                    Read more
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* card end */}
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
      <div className={styles.third_section}>
        <img className={styles.shape_img} src="/images/shape.svg" alt="" />
        <div className={styles.title_third_section}>
          <img src="/images/w.svg" alt="" />
          <h1 className="">Why Choose United</h1>
        </div>
        <h1 className={styles.subtitle_third_section}>
          It Is A Long Established
        </h1>
        <div className={styles.img_cards}>
          <div className={styles.hands_img}>
            <img src="/images/hands.png" alt="" />
          </div>
          <div className={styles.card_third_section}>
            <div className={styles.doctor_img}>
              <img src="/images/dr2.png" alt="" />
            </div>
            <div className={styles.par_third_section}>
              <p>
                It Is A Long Established Fact That A Reader Will Be Distracted
                By The Readable Content Of A Page When Looking At Its Layout.
                The Point Of Using Lorem Ipsum Is .
              </p>
            </div>
          </div>
          <div className={styles.cards_third_section}>
            <div className={styles.doctors_img}>
              <img src="/images/dr.png" alt="" />
            </div>
            <div className={styles.par_third_section}>
              <p>
                It Is A Long Established Fact That A Reader Will Be Distracted
                By The Readable Content Of A Page When Looking At Its Layout.
                The Point Of Using Lorem Ipsum Is .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
