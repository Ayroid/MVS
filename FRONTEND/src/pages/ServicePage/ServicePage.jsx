import { useMemo } from "react";
import styles from "./ServicePage.module.css";

import Service from "../../components/Service/Service";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// CSS STYLES

const mainDiv = [styles.mainDiv].join("");
const services = [styles.services].join(" ");

const ServicePage = () => {
  // DATA
  const data = useMemo(
    () => [
      {
        url: "/images/services/service1.png",
        gridRow: "span 2",
        gridColumn: "span 2",
        serviceName: "Reel Covers",
      },
      {
        url: "/images/services/service2.png",
        gridRow: "span 1",
        gridColumn: "span 2",
        serviceName: "Logos",
      },
      {
        url: "/images/services/service3.jpg",
        gridRow: "span 3",
        gridColumn: "span 2",
        serviceName: "Reels",
      },
      {
        url: "/images/services/service4.png",
        gridRow: "span 2",
        gridColumn: "span 2",
        serviceName: "Clip Packs",
      },
      {
        url: "/images/services/service5.jpg",
        gridRow: "span 2",
        gridColumn: "span 4",
        serviceName: "Instagram Page Redesign",
      },
    ],
    []
  );

  return (
    <div className={mainDiv} id="services">
      <SectionHeader headingTitle="Services" />
      <div className={services}>
        {data.map((service) => (
          <Service
            key={service.serviceName}
            url={service.url}
            gridRow={service.gridRow}
            gridColumn={service.gridColumn}
            serviceName={service.serviceName}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
