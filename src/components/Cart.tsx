import { ShoppingCart } from '@phosphor-icons/react';
import styles from './Cart.module.css';

export function Cart() {
    return(
        <div className={styles.container}>
            <div className={styles.cart}>
                <ShoppingCart size={22} weight='fill' color='#C47F17' />
            </div>
            <div className={styles.counter}>
                <span>3</span>
            </div>
        </div>
    );
}