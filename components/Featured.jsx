import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import {useState} from 'react' ;
// import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0)
  const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
  ];

  const handleArrow = (direction) =>{
    if(direction==="l"){
      setIndex(index !== 0 ? index -1 : 2)
      
    }
    if(direction==="r"){
      setIndex(index !== 2 ? index +1 : 0)
    }
  }
  console.log(images[index]);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} >
        {/* {images.map((img, i) => ( */}
          <div className={styles.imgContainer}>
          <Image src={images[index]}  alt = "" layout="fill" objectFit="contain" />
          </div>
        {/* ))} */}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}  onClick={()=>handleArrow("r")}>
        <Image src="/images/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
