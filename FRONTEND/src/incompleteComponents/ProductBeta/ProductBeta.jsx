import { useState } from "react";
import styles from "./ProductBeta.module.css";

// CSS STYLES

const mainDiv = [styles.mainDiv].join("");
const products = [styles.products].join("");
const carousel = [styles.carousel].join("");
const buttons = [styles.buttons].join("");

const Product = () => {
  const [id, setId] = useState(1);

  const setActive = (id) => {
    const product = document.getElementById(id);
    const alreadyActive = product.classList.contains(styles.active);
    const products = document.getElementsByClassName(styles.products);
    for (const product of products) {
      product.classList.remove(styles.active);
    }
    if (alreadyActive) {
      product.classList.remove(styles.active);
    } else {
      product.classList.add(styles.active);
    }
  };

  const changeImage = (value) => {
    if (id + value === 0) setId(5);
    else if (id + value === 6) setId(1);
    else if (value === -1) {
      setId(id - 1);
    } else {
      setId(id + 1);
    }

    const product = document.getElementById(`product${id}`);
    console.log(product);
    product.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={mainDiv}>
      <div className={buttons}>
        <button onClick={() => changeImage(-1)}>Prev</button>
        <button onClick={() => changeImage(1)}>Next</button>
      </div>
      <div className={carousel}>
        <img
          className={products}
          src="/images/services/service1.jpg"
          alt="product"
          id="product1"
          onClick={() => setActive("product1")}
        />
        <img
          className={products}
          src="/images/services/service2.jpg"
          alt="product"
          id="product2"
          onClick={() => setActive("product2")}
        />
        <img
          className={products}
          src="/images/services/service3.jpg"
          alt="product"
          id="product3"
          onClick={() => setActive("product3")}
        />
        <img
          className={products}
          src="/images/services/service4.jpg"
          alt="product"
          id="product4"
          onClick={() => setActive("product4")}
        />
        <img
          className={products}
          src="/images/services/service5.jpg"
          alt="product"
          id="product5"
          onClick={() => setActive("product5")}
        />
      </div>
    </div>
  );
};

export default Product;
