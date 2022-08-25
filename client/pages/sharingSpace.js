import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import NewPost from "../components/Posts/NewPost";
import Post from "../components/Posts/Posts";
import styles from "../styles/sharingSpace.module.css";
import Blogs from "../components/Blogs/Blogs";
import Stories from "../components/Stories/Stories";

export default function () {
  return (
    <div>
      <Navbar />
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <News />
            <Blogs />
          </div>
          <div className={styles.middle}>
            <NewPost />
            <Post />
          </div>
          <div className={styles.right}>
            <Stories />
          </div>
        </div>
      </div>
    </div>
  );
}
