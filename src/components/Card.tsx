"use client";
import React, { useState } from "react";
import styles from "../styles/card.module.css";
import DetailCard from "./DetailCard";
import Image from "next/image";
import Description from "./Description";

function Card(props: any) {
  const { pic } = props.data;
  const [isHover, setisHover] = useState(false);

  const handlingMouseEnter = () => {
    setisHover(true);
  };

  const handlingMouseLeave = () => {
    setisHover(false);
  };

  return (
    <div className={styles.card}>
      <div>
        <Image
          className={styles.flag}
          src="/assets/images/flag.png"
          alt="flag"
          height={30}
          width={130}
        />

        <Image
          placeholder="blur"
          blurDataURL="/assets/images/title-icon.png"
          className={styles.image}
          src={pic[0]}
          alt="header"
          // fill={true}
          height={500}
          width={400}
          onMouseEnter={handlingMouseEnter}
          onMouseLeave={handlingMouseLeave}
        />

        {isHover && (
          <>
            <Image
              className={styles.arrowRight}
              src="/assets/images/arrow-right.png"
              alt="flag"
              height={10}
              width={30}
            />
            <Image
              className={styles.arrowLeft}
              src="/assets/images/arrow-left.png"
              alt="flag"
              height={10}
              width={30}
            />
          </>
        )}
      </div>
      <DetailCard data={props.data} />
      <Description/>
    </div>
  );
}

export default Card;
