"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/description.module.css";
import { usePathname } from "next/navigation";

function Description() {
  const [isDesc, setisDesc] = useState(true);
  const firstPhone = "8234 5678";
  const secondPhone = "82345678";
  const [phone1, setphone1] = useState("");
  const [phone2, setphone2] = useState("");
  const [phone3, setphone3] = useState("");

  useEffect(() => {
    setisDesc(false);
    setphone1("8234xxxx");
    setphone2("8234xxxx");
    setphone3("8234xxxx");
  }, []);

  const handleOnClick = () => {
    setisDesc(isDesc ? false : true);
  };

  const handleMasking = (number: string, type: string) => {
    if (number.indexOf("x") > -1) {
      if (type == "first") {
        setphone1(firstPhone);
      } else if (type == "second") {
        setphone2(secondPhone);
      } else {
        setphone3(secondPhone);
      }
    } else {
      let num = "";
      if (type == "first") {
        num = number.replace(/\D/g, "");
        num = num.substring(0, 4);
        setphone1(num + "xxxx");
      } else if (type == "second") {
        num = number.substring(0, 4);
        setphone2(num + "xxxx");
      } else {
        num = number.substring(0, 4);
        setphone3(num + "xxxx");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.seeDescContainer}>
        <span className={styles.seeDesc} onClick={handleOnClick}>
          See Description
        </span>
      </div>

      {isDesc && (
        <div className={styles.descContainer}>
          <p className={styles.desc}>
            Phone number:{" "}
            <span
              onClick={() => {
                handleMasking(phone1, "first");
              }}
              className={styles.masking}
            >
              {phone1}
            </span>{" "}
            Superb 3 bedroom in sentosa for a very affordable price and a very
            nearby bus station. Please call Alex B (CEA No: R0123456) @{" "}
            <span
              onClick={() => {
                handleMasking(phone2, "second");
              }}
              className={styles.masking}
            >
              {phone2}
            </span>{" "}
            or the owner (
            <span
              onClick={() => {
                handleMasking(phone3, "third");
              }}
              className={styles.masking}
            >
              {phone3}
            </span>
            ) to arrange for a viewing.
          </p>
        </div>
      )}
    </div>
  );
}

export default Description;
