import React, { useState, useEffect } from "react";
import { WiCloud } from "react-icons/wi";
import styles from "../styles/Weather.module.css";

const Weather = () => {
  let clickedClass = "clicked";
  // const body = document.body;
  const [changeBackground, setChangeBackground] = useState(
    "https://64.media.tumblr.com/e5c47b6a54a61b9e1e2f15542e325010/344206119ee327aa-60/s500x750/e55ef3661d3372efbd127621f0d57369d08eb055.gifv"
  );
  useEffect(() => {
    setTimeout(() => {
      const image = [
        "https://64.media.tumblr.com/2b5f1a03aa396887a8dea470de811005/d7f423b7184ece85-00/s500x750/d78a681c9aa1c9cb1317867dc75f5ebbf975584c.gifv",
        "https://64.media.tumblr.com/b9bc6ad6b937b4b8e26b84839a1d4442/18d7a52112b53387-fc/s500x750/49dd50a05a9cf536149d76c50ed71fb94879ad6e.gif",
        // "https://64.media.tumblr.com/aeb0e62c76dfda249658ac41ee956794/tumblr_pv7rpw72Dp1tf04pfo1_500.gif",
        "https://64.media.tumblr.com/f93d3b88963cef543d09b695e7d00b8e/677631bcebbb0e30-9c/s500x750/ab1735076a33620336acb22d23974dfe8ca78395.gifv",
        "https://64.media.tumblr.com/a5af04d8ba199a93168ceb5ac39dca71/2b1695aaf048d72e-85/s1280x1920/e3b945c5256da413d98bdbfd86b687bd8d6094f9.png",
        "https://64.media.tumblr.com/424c7e37d77f4de160ba1919ea4183bd/6a10ca88851061c5-6b/s640x960/d7ce59de54c2ebecbaa31c113f0910a526175133.gif",
        "https://64.media.tumblr.com/e6c88c74a37367c273eabe77d35e2524/be7eabd93f3453b0-1b/s500x750/22e9ef1e737fcdabfe571334845a64caf7d655a1.gif",
        "https://64.media.tumblr.com/59cd8896cac42d8a556bba6cadd84f29/b8a98143a4ad8580-d0/s500x750/7c8711e46b429a5f449e3fbd8b4bec6df134a484.gif",
        "https://64.media.tumblr.com/700c38ac0cd3d9453d01fde9bd9339b9/b8a98143a4ad8580-87/s500x750/ca5b67d03a9423b4aae2c13b74d1f296e4206908.gifv",
        "https://64.media.tumblr.com/221875a85786118583d2a95d423d3be8/dc786d15af3a1690-19/s500x750/1bd110920a1f4fb88d47a16bd261789a96372150.gifv",
        "https://64.media.tumblr.com/8e3194b911cbaed91ea5a07240fb30e5/dc786d15af3a1690-44/s500x750/d5e0969aede2289b70f058b1a91b07a70d60f9ea.gifv",
        "https://64.media.tumblr.com/00fd4c4a37906b2be269537acff6c957/4e599b9639b995f9-4c/s500x750/ef2ee0065edc2e680ced29886ab0d1622f79eb4b.gifv",
        "https://64.media.tumblr.com/e4a1503e3f49272e8d1f856ab80a2ba8/4a281222379b00ca-57/s500x750/dcd9f85e98688481075eca4e6c205abf89b34651.gifv",
        "https://64.media.tumblr.com/ca1426a2c6901950b769b23a4783f714/6579c6bf45b9eee7-44/s500x750/1b31c1c1cf6b9e8abafd37ae499e42d89d93b3a7.gifv",
        "https://64.media.tumblr.com/78e383b15f57b38ac8addd4c93ad91ef/063012894740b5e2-66/s500x750/e92fa9abbcf1ef23a7c0a6f9933600019f59a2b4.gifv",
        "https://64.media.tumblr.com/e6731053d995876886ed2477ed4dcf53/1ed9c10b867a1f1f-28/s500x750/a21db168298852c212af833a1d706c43be011be2.gifv",
        "https://64.media.tumblr.com/fad698de81abf1f122ea815789e2d757/1ed9c10b867a1f1f-ca/s500x750/7ecc332ca2e0b210140d8f4b1ccfed85b0f7efb2.gifv",
        "https://64.media.tumblr.com/229b086e4da42f326b5a268ccd6db107/1bd3fc609d7f79f5-48/s500x750/aa6bfacca6f96e21596c7a6b84399064bbde4b57.gifv",
        "https://64.media.tumblr.com/778527963ac75a292b43284b7bd8271c/af368552444c248d-d2/s500x750/b648ad41fb95ab1327a1215794b6cf6fd9d88c7e.gifv",
        "https://64.media.tumblr.com/3dd0de3b6c3d6a9221397c5915de647d/b8a98143a4ad8580-3e/s500x750/0a92a073156f84ec79cff3865aeef7e012644b64.gifv",
        "https://64.media.tumblr.com/b6df5864aa50be2e12cd65c2f0ad1c95/af368552444c248d-6a/s500x750/cca1c97fa7e6ea0feb18c729e9320368b147cc0b.gifv",
        "https://64.media.tumblr.com/f889da1382c7e222fc0e6f928a297e87/d23d6a5bc64cf508-a9/s500x750/1336300168c95162621cc87d0b90d733ae3ed0b8.gifv",
        "https://64.media.tumblr.com/e9c22c1bf5285284a5e2b8c2987434a3/cc2e3be759a40b0b-d9/s500x750/419ab1da6e6febe3e34d1425428cfda79018c3d1.gifv",
        "https://64.media.tumblr.com/0efee12f46c45699f3cdd66c182d1879/ffb0b740528ab362-ad/s500x750/5786447bfc0fc050adad16a2e4c72001f91ace25.gifv",
        "https://64.media.tumblr.com/bab80476f1d41c41f4b3e93e934fda9c/ffb0b740528ab362-e2/s500x750/2fdd8372a5be10bd47f29dce4a1b2d7ae67e6539.gifv",

        "https://64.media.tumblr.com/e5c47b6a54a61b9e1e2f15542e325010/344206119ee327aa-60/s500x750/e55ef3661d3372efbd127621f0d57369d08eb055.gifv",
      ];

      const indexBg = Math.floor(Math.random() * image.length);
      // console.log(image[indexBg]);
      setChangeBackground(image[indexBg]);

      const bgId = document.getElementById("bg");
      bgId.src = changeBackground;
    }, 9000);
  });

  return <div></div>;
};

export default Weather;
