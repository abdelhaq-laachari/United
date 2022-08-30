import styles from "./Slide.module.css";

function slide() {
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

export default slide;
