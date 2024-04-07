import styles from "./WorkPage.module.css";

import Channels from "../../components/Channels/Channels";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const channelsDiv = [styles.channelsDiv].join("");

// DATA

const channelData = [
  {
    title: "Dark Psychology",
    imageUrl: "/images/brand/darkpsychology.png",
    altText: "Dark Psychology",
    instalink:
      "https://www.instagram.com/darkpsy_chology?igsh=cDRpczd4ZTJwcmwy",
    youtubelink: "https://www.youtube.com/@-DarkPsychology",
  },
  {
    title: "Money Rainz",
    imageUrl: "/images/brand/moneyrainz.png",
    altText: "Money Rainz",
    instalink: "https://www.instagram.com/_moneyrainzz?igsh=NmlhYnlmeXc5Y2Jw",
    youtubelink: "https://youtube.com/@MoneyRainzz?si=L47ZX0YJRMbdjD2r",
  },
  {
    title: "VrseBits",
    imageUrl: "/images/brand/vrsebits.png",
    altText: "VrseBits",
    instalink: "https://www.instagram.com/vrsebits?igsh=ZGxpOHh6d2hweGM=",
    youtubelink: "https://www.youtube.com/@vrsebits",
  },
];

const WorkPage = () => {
  return (
    <div className={mainDiv} id="work">
      <SectionHeader headingTitle="Work" />
      <div className={channelsDiv}>
        {channelData.map((channel) => (
          <Channels
            key={channel.title}
            imageUrl={channel.imageUrl}
            altText={channel.altText}
            title={channel.title}
            instalink={channel.instalink}
            youtubelink={channel.youtubelink}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
