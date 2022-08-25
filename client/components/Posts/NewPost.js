import styles from './NewPost.module.css'

function newPost() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <img src="/posts/newPost/a1.jpg" alt="" />
                </div>
                <div className={styles.top_span}>
                    <span>Share what's on your mind, John ...</span>
                </div>
            </div>
            <div>
                <div>
                    <div></div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default newPost;