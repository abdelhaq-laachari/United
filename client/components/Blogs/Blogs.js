import styles from "./blogs.module.css";

function FileName() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Blogs</h1>
      </div>
      <div className={styles.first}>
        <div className={styles.first_img}>
          <img src="/blogs/b2.jpg" alt="" />
        </div>
        <div className={styles.first_text}>
          <h1>Massa eros etiam diam massa gravida nullam urna</h1>
          <span>May 14, 2022</span>
        </div>
      </div>
      <div className={styles.first}>
        <div className={styles.first_img}>
          <img src="/blogs/b3.jpg" alt="" />
        </div>
        <div className={styles.first_text}>
          <h1>Massa eros etiam diam massa gravida nullam urna</h1>
          <span>May 14, 2022</span>
        </div>
      </div>
      <div className={styles.first}>
        <div className={styles.first_img}>
          <img src="/blogs/b1.jpg" alt="" />
        </div>
        <div className={styles.first_text}>
          <h1>Massa eros etiam diam massa gravida nullam urna</h1>
          <span>May 14, 2022</span>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-purple-400 to-purple-700 hover:to-purple-800 text-white text-xs font-bold py-2 px-3 rounded-full ">
          See all Blogs
        </button>
      </div>
    </div>
  );
}

export default FileName;
