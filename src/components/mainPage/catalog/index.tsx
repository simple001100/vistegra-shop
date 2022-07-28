import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToCart } from "../../../store/slices/cartSlice/cartSlice";
import { getProducts } from "../../../store/slices/productSlice/productSlice";
import { ProductItem } from "./components/productItem/productItem";

import { Display } from "./enums";

import styles from "./styles.module.css";

export const Catalog: FC = () => {
  const dispatch = useAppDispatch();

  const [display, setDisplay] = useState<number>(Display.tail);

  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableDisplay}>
        <div
          onClick={() => setDisplay(Display.tail)}
          className={classNames([
            styles.displayButton,
            { [styles.buttonActive]: display === Display.tail },
          ])}
        >
          Плитка
        </div>
        <div
          onClick={() => setDisplay(Display.list)}
          className={classNames([
            styles.displayButton,
            { [styles.buttonActive]: display === Display.list },
          ])}
        >
          Список
        </div>
      </div>
      <div
        className={classNames([
          styles.table,
          { [styles.list]: display === Display.list },
        ])}
      >
        {products.map((el, index) => (
          <ProductItem
            key={index}
            ID={el.ID}
            NAME={el.NAME}
            PICTURE={el.PICTURE}
            PRICE={el.PRICE || ""}
            TYPE={el.TYPE}
            SKU={el.SKU}
            cardStyle={styles.cardStyle}
            display={display}
            onClick={(e: {
              ID: string;
              NAME: string;
              PICTURE: string;
              PRICE: string;
              TYPE: string;
            }) => {
              dispatch(addToCart(e));
            }}
          />
        ))}
      </div>
    </div>
  );
};
