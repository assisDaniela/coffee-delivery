import { ShoppingCart } from '@phosphor-icons/react';
import expressoImg from '../assets/coffees/expresso.svg';
import styles from './CoffeeCard.module.css';

export function CoffeeCard() {
    return (
        <div className={styles.card}>
            <img src={expressoImg} alt='Café Expresso' />

            <div className={styles.tags}>
                <span>tradicional</span>
                <span>com leite</span>
                <span>gelado</span>
            </div>

            <h2>Expresso tradicional</h2>
            <p className={styles.description}>Bebida preparada com café expresso e cubos de gelo</p>

            <div className={styles.buy}>
                <p>R$ <span>9,90</span></p>
                <div className={styles.cart}>
                    <input type="number" />
                    <div className={styles.iconContainer}>
                        <ShoppingCart size={22} weight='fill' color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}