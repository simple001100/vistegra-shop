import { FC } from "react";
import { Header } from "../Header";
import { CartPage } from "./cart";
import { Catalog } from "./catalog";

import styles from "./styles.module.css";

export const MainPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.catalogContainer}>
        <Catalog />
      </div>
      <div className={styles.cartContainer}>
        <CartPage />
      </div>
    </div>
  );
};
