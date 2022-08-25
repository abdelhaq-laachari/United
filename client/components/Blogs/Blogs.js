import styles from './blogs.module.css'

function FileName() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Blogs</h1>
      </div>
      <div className={styles.first}>
        <div className={styles.first_img}>
          <img src="/blogs/b1.jpg" alt="" />
        </div>
        <div className={styles.first_text}>
          <h1>
            humberto-chavez-FVh_yqLR9eA-unsplash.jpg
            pexels-ivan-samkov-6436252.jpg shutterstock_583365850.jpg
          </h1>
          <span>May 14, 2022</span>
        </div>
      </div>
      <div>
        <button>see all</button>
      </div>
    </div>
  );
}

export default FileName;
