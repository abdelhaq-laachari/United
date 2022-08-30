import styles from "./Gride.module.css";
import Image from "next/image";
import Link from "next/link";
// import Link from

function Gride() {
  return (
    <div className="item">
      <div className="images">
        <Link href="">
          <a>
            <Image
              className="rounded"
              src={"/blogs/b4.jpg"}
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
              <img src="/posts/postOwner/a5.jpg" alt="" />
            </div>
            <div className={styles.fourth_right}>
              <h3>Eric Parker</h3>
              <span>CEO and Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gride;
