import styles from "../styles/Home.module.css";
import Timer from "../comps/Timer";
import Music from "../comps/Music";
import Weather from "../comps/Weather";
import { IoBody, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import DisplayTodo from "../comps/DisplayTodo";

export default function Home() {
  return (
    <div className={styles.main}>
      <img
        id="bg"
        className={styles.video_box}
        src="https://64.media.tumblr.com/e4a1503e3f49272e8d1f856ab80a2ba8/4a281222379b00ca-57/s500x750/dcd9f85e98688481075eca4e6c205abf89b34651.gifv"
      />

      <div className={styles.copyright}>
        <p>
          Image by <b>Debbie Balboa</b>
        </p>
        <a href="https://www.instagram.com/debbiebalboa/">
          <IoLogoInstagram className={styles.social_icon} />
        </a>
        <a href="https://twitter.com/DebbieBalboa">
          <IoLogoTwitter className={styles.social_icon} />
        </a>
      </div>
      <Timer></Timer>
      <Music />
      <Weather />
      <DisplayTodo />
    </div>
  );
}
