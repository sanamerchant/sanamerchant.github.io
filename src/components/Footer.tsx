import styles from "../styles/Footer.module.css";
import linkImage from "../images/linkedin.png";
import gitImage from "../images/git.png";

const Footer = () => {
  return (
    <div className={styles.all}>
      <p style={{ marginRight: "2%" }}>Let's Connect</p>
      <div className={styles.images}>
        <a target="_blank" href="https://www.linkedin.com/in/sana-merchant">
          <img height="30px" src={linkImage} alt="Profile Picture" />
        </a>
      </div>
      <a target="_blank" href="https://github.com/sanamerchant">
        <img height="30px" src={gitImage} alt="Profile Picture" />
      </a>
    </div>
  );
};

export { Footer };