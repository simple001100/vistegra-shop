import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setCount,
  removeFromCart,
} from "../../../store/slices/cartSlice/cartSlice";
import { CartItem } from "./components/cartItem";
import styles from "./styles.module.css";

export const CartPage = () => {
  const dispatch = useAppDispatch();

  const { cartProducts } = useAppSelector((state) => state.cartReducer);

  return (
    <div className={styles.wrapper}>
      <h2>Корзина</h2>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableСell}>Наименование</div>
          <div className={styles.tableСell}>Кол-во</div>
          <div className={styles.tableСell}>Цена/шт</div>
          <div className={styles.tableСell}>Сумма</div>
          <div className={styles.tableСell}></div>
        </div>
        {cartProducts.map((el) => (
          <CartItem
            key={Number(el.ID)}
            ID={el.ID}
            NAME={el.NAME}
            PRICE={el.PRICE}
            count={el.count}
            totalCost={el.totalCost}
            tableCellStyle={styles.tableСell}
            setCount={(e: { ID: string; count: number }) => {
              dispatch(setCount(e));
            }}
            removeFromCart={(e: string) => {
              dispatch(removeFromCart(e));
            }}
          />
        ))}
      </div>
    </div>
  );
};
