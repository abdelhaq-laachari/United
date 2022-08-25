import styles from "./News.module.css";

function news() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Trending News</h1>
      </div>
      <div className={styles.card}>
        <img className={styles.card_img} src="/news/news1.jpg" alt="" />
        <p className={styles.card_par}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.card_img} src="/news/news2.jpg" alt="" />
        <p className={styles.card_par}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.card_img} src="/news/news3.jpg" alt="" />
        <p className={styles.card_par}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
        </p>
      </div>
    </div>
  );
}

export default news;
