import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  ID: string;
  NAME: string;
  PRICE: string;
  count: number;
  totalCost: number;
  tableCellStyle: string;
  setCount: (e: { ID: string; count: number }) => void;
  removeFromCart: (e: string) => void;
};

export const CartItem = (props: Props) => {
  const {
    ID,
    NAME,
    PRICE,
    count,
    totalCost,
    tableCellStyle,
    setCount,
    removeFromCart,
  } = props;

  const [countValue, setCountValue] = useState<number>(1);

  useEffect(() => setCountValue(count), [count]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value || value === 0) {
      setCountValue(Number(e.target.value));
      setTimeout(
        () => setCount({ ID, count: Number(e.target.value) }),
        value === 0 ? 5000 : 0
      );
    }
  };

  return (
    <div className={styles.itemContainer}>
      <div className={tableCellStyle}>{NAME}</div>
      <div className={tableCellStyle}>
        <input type="text" value={countValue} onChange={onChange} />
      </div>
      <div className={tableCellStyle}>{PRICE} руб.</div>
      <div className={tableCellStyle}>{totalCost} руб.</div>
      <div onClick={() => removeFromCart(ID)} className={tableCellStyle}>
        <div className={styles.cross}>+</div>
      </div>
    </div>
  );
};
