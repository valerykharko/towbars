import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselModule.module.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselModule = () => {
  return (
    <div className={styles.carouselBlock}>
      <span>Производители</span>
      <div className={styles.carousel}>
        <Carousel
          responsive={responsive}
          ssr={true}
          showDots={true}
          autoPlay={true}
          infinite={true}
        >
          <div>
            <img
              className={styles.carouselImages}
              src="https://a.d-cd.net/nkAAAgBW4-A-960.jpg"
            />
          </div>
          <div>
            <img
              className={styles.carouselImages}
              src="https://a.d-cd.net/nkAAAgBW4-A-960.jpg"
            />
          </div>
          <div>
            <img
              className={styles.carouselImages}
              src="https://a.d-cd.net/nkAAAgBW4-A-960.jpg"
            />
          </div>
          <div>
            <img
              className={styles.carouselImages}
              src="https://a.d-cd.net/nkAAAgBW4-A-960.jpg"
            />
          </div>
          <div>
            <img
              className={styles.carouselImages}
              src="https://a.d-cd.net/nkAAAgBW4-A-960.jpg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselModule;
