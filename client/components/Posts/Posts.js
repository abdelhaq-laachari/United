import styles from "./Posts.module.css";
// import { ReactElement } from 'react'
// import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function post() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1.2,
      }}
    />
  );
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.left}>
            <div className={styles.left_img}>
              <img src="/posts/postOwner/a1.jpg" alt="" />
            </div>
            <div className={styles.left_text}>
              <h6>eric parker</h6>
              <span>May 16, 2022</span>
            </div>
          </div>
          <div className={styles.right_button}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.second}>
          <p>
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
            pretium suscipit.
          </p>
        </div>
        <div className={styles.post_img}>
          <img src="/posts/post/p1.jpg" alt="" />
        </div>
        <div className={styles.third}>
          <div className={styles.third_left}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
            <span>25</span>
          </div>
          <span>1 comment</span>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.fourth}>
          <div className={styles.section}>
            <button>
              <img
                src="/posts/newPost/like.svg"
                className={styles.like}
                alt=""
              />
            </button>
            <span>Like</span>
          </div>
          <div className={styles.section}>
            <button>
              <img src="/posts/newPost/comment.svg" alt="" />
            </button>
            <span>Comment</span>
          </div>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img src="/posts/newPost/a1.jpg" alt="" />
          </div>
          <div className={styles.top_span}>
            <span>Write a comment . . .</span>
          </div>
        </div>
      </div>
      {/* post number 2 */}
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.left}>
            <div className={styles.left_img}>
              <img src="/posts/postOwner/a2.jpg" alt="" />
            </div>
            <div className={styles.left_text}>
              <h6>Diana Ashley</h6>
              <span>May 16, 2022</span>
            </div>
          </div>
          <div className={styles.right_button}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.second}>
          <p>
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
            pretium suscipit.
          </p>
        </div>
        <div className={styles.post_img}>
          <img src="/posts/post/p2.jpg" alt="" />
        </div>
        <div className={styles.third}>
          <div className={styles.third_left}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
            <span>25</span>
          </div>
          <span>1 comment</span>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.fourth}>
          <div className={styles.section}>
            <button>
              <img
                src="/posts/newPost/like.svg"
                className={styles.like}
                alt=""
              />
            </button>
            <span>Like</span>
          </div>
          <div className={styles.section}>
            <button>
              <img src="/posts/newPost/comment.svg" alt="" />
            </button>
            <span>Comment</span>
          </div>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img src="/posts/newPost/a1.jpg" alt="" />
          </div>
          <div className={styles.top_span}>
            <span>Write a comment . . .</span>
          </div>
        </div>
      </div>
      {/* post number 3 */}
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.left}>
            <div className={styles.left_img}>
              <img src="/posts/postOwner/a3.jpg" alt="" />
            </div>
            <div className={styles.left_text}>
              <h6>David Alex</h6>
              <span>May 16, 2022</span>
            </div>
          </div>
          <div className={styles.right_button}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.second}>
          <p>
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
            pretium suscipit.
          </p>
        </div>
        <div className={styles.post_img}>
          <img src="/posts/post/p3.jpg" alt="" />
        </div>
        <div className={styles.third}>
          <div className={styles.third_left}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
            <span>25</span>
          </div>
          <span>1 comment</span>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.fourth}>
          <div className={styles.section}>
            <button>
              <img
                src="/posts/newPost/like.svg"
                className={styles.like}
                alt=""
              />
            </button>
            <span>Like</span>
          </div>
          <div className={styles.section}>
            <button>
              <img src="/posts/newPost/comment.svg" alt="" />
            </button>
            <span>Comment</span>
          </div>
        </div>
        <ColoredLine color="#000" />
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img src="/posts/newPost/a1.jpg" alt="" />
          </div>
          <div className={styles.top_span}>
            <span>Write a comment . . .</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default post;
