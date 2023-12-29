import { Cart } from '../components/Cart';
import logoImg from '../assets/logo.svg';
import styles from './Header.module.css';
import { MapPin } from '@phosphor-icons/react';

export function Header() {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <img src={logoImg} />
                <div className={styles.action}>
                    <div className={styles.location}>
                        <MapPin size={22} weight='fill' color='#8047F8' />
                        <span>Porto Alegre, RS</span>
                    </div>
                    <Cart />
                </div>
            </nav>
        </div>
    );
}