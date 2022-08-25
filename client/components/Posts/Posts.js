import styles from "./Posts.module.css";

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
      {/* <ColoredLine color="#000" /> */}
      <div className={styles.second}>
        <p>
          Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium
          suscipit.
        </p>
      </div>
      <div className={styles.post_img}>
        <img src="/post" alt="" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default post;
