import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
// import Image from "next/image";

const Featured = () => {
    // const images = [
    //  "/images/featured.png",
    // "/images/featured2.png",
    // "/images/featured3.png",
    // ];
  return (
    <div className={styles.container}>
      <Image src="/images/arrowl.png" alt="" layout='fill'/>
      <div className={styles.wrapper}>
        <div className= {styles.imgContainer}>
            {/* {images.map((images,i) =>  */}
            <Image src = "/images/bike.png"  layout = 'fill'/>
            {/* )} */}
        </div>
      </div>
      <Image src = "/images/arrowr.png" alt = "" layout = 'fill'/>
    </div>
  );
};

export default Featured;
