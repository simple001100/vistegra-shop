import classNames from "classnames";
import { useState } from "react";
import Select from "react-select";
import { Display } from "../../enums";

import styles from "./styles.module.css";

type Props = {
  ID: string;
  NAME: string;
  PICTURE: string;
  PRICE: string;
  TYPE: string;
  display: number;
  cardStyle?: string;
  SKU?: object;
  onClick: (e: {
    ID: string;
    NAME: string;
    PICTURE: string;
    PRICE: string;
    TYPE: string;
  }) => void;
};

export const ProductItem = (props: Props) => {
  const { ID, NAME, PICTURE, PRICE, TYPE, onClick, cardStyle, SKU, display } =
    props;

  const [product, setProduct] = useState<{
    ID: string;
    NAME: string;
    PRICE: string;
  } | null>();

  const options = Object.values(SKU || {}).map((el) => {
    return { value: el, label: `${el.NAME} - ${el.PRICE} руб.` };
  });

  return (
    <div
      className={classNames([
        styles.wrapper,
        cardStyle,
        { [styles.cardList]: display === Display.list },
      ])}
    >
      <div
        className={classNames([
          styles.textContainer,
          { [styles.textContainerList]: display === Display.list },
        ])}
      >
        <span className={styles.picture}>{PICTURE || ""}</span>
        <span className={styles.productName}>{NAME || ""}</span>
      </div>
      <div
        className={classNames([
          styles.buttonContainer,
          { [styles.list]: display === Display.list },
        ])}
      >
        {SKU ? (
          <div className={styles.subMenu}>
            <Select
              placeholder="Выбрать товар"
              options={options}
              onChange={(e) =>
                setProduct({
                  ID: e?.value.ID,
                  NAME: e?.value.NAME,
                  PRICE: e?.value.PRICE,
                })
              }
            />
          </div>
        ) : (
          <span className={styles.productPrice}>
            {Number(PRICE) || "0"} руб.
          </span>
        )}
        <button
          className={styles.button}
          onClick={() =>
            onClick({
              ID: product ? product.ID : ID,
              NAME: product ? product.NAME : NAME,
              PICTURE,
              PRICE: product ? product.PRICE : PRICE,
              TYPE,
            })
          }
          disabled={(SKU && !product) || !Number(PRICE)}
        >
          КУПИТЬ
        </button>
      </div>
    </div>
  );
};
