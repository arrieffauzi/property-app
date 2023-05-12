import React from "react";
import styles from "../styles/detailCard.module.css";
import Image from "next/image";

function DetailCard(props: any) {
  const {
    title,
    address,
    project_type,
    year,
    ownership_type,
    availabilities_label,
    psf_min,
    psf_max,
    subprice_label
  } = props.data;
  
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.iconTitle}>
          <div>
            <Image
              src="/assets/images/title-icon.png"
              alt="icon"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.titleContainer}>
            <div>
              <span className={styles.title}>{title}</span>
            </div>
            <div>
              <span className={styles.address}>{address}</span>
            </div>
          </div>
        </div>
        <div className={styles.typeLabelContainer}>
          <span className={styles.typeLabel}>
            {project_type} . {year} . {ownership_type}
          </span>
          <span className={styles.typeLabel}>{availabilities_label}</span>
        </div>
      </div>

      <div className={[styles.section, styles.priceContainer].join(' ')}>
        <span className={styles.price}>${psf_min} - ${psf_max} psf</span>
        <span className={styles.subPrice}>{subprice_label}</span>
      </div>
    </div>
  );
}

export default DetailCard;
