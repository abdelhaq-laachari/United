import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import NewPost from "../components/Posts/NewPost";
import Post from "../components/Posts/Posts";
import styles from "../styles/sharingSpace.module.css"

export default function() {
    return (
        <div className={styles.container}>
            <Navbar/>
            {/* <News/> */}
            {/* <NewPost/> */}
            <Post/>
        </div>
    );
}