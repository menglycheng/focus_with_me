import React, { useState } from "react";
import Youtube from "react-youtube";
import styles from "../styles/Music.module.css";
import { IoMusicalNotes, IoAdd } from "react-icons/io5";

const Music = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  const [videoID, setVideoId] = useState();

  const getMusicUrl = (e) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  const youtubeComps = {
    playerVars: {
      autoplay: 1,
    },
  };
  const onPlay = () => {
    setVideoId(YouTubeGetID(data.musicUrl));
  };
  const onPause = () => {
    setVideoId("");
  };
  return (
    <div className={styles.music_container}>
      <div className={styles.music_btn__container}>
        <button className={styles.music_btn} onClick={() => setActive(!active)}>
          <IoMusicalNotes className={styles.music_icon} />
        </button>
      </div>
      <div>
        {active && (
          <div className={styles.add_music__container}>
            <h4 className={styles.text}>Add Music</h4>
            <input
              type="text"
              onChange={(e) => getMusicUrl(e)}
              id="musicUrl"
              value={data.musicUrl}
              autoComplete="off"
            />
            <div className={styles.btn_box}>
              <button type="button" onClick={onPlay}>
                Play
              </button>
              <button type="button" onClick={onPause}>
                Pause
              </button>
            </div>
          </div>
        )}
        <Youtube
          videoId={videoID}
          opts={youtubeComps}
          className={styles.video_play}
        ></Youtube>
      </div>
    </div>
  );
};

export default Music;
