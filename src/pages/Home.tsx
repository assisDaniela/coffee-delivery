import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import coffeeImg from '../assets/coffee-image.png';
import styles from './Home.module.css';
import { Info } from '../components/Info';
import { Header } from '../components/Header';
import { CoffeeList } from '../components/CoffeeList';

export function Home() {
    return(
        <div className={styles.background}>
            <Header />
            
            <main className={styles.container}>
                <div className={styles.hero}>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div className={styles.about}>
                        <Info
                            IconComponent={<ShoppingCart weight='fill' size={16} color='#FAFAFA' />}
                            color='#C47F17'
                            text='Compra mais simples e segura'
                        />
                        <Info
                            IconComponent={<Package weight='fill' size={16} color='#FAFAFA' />}
                            color='#574F4D'
                            text='Embalagem mantém o café intacto'
                        />
                        <Info
                            IconComponent={<Timer weight='fill' size={16} color='#FAFAFA' />}
                            color='#DBAC2C'
                            text='Entrega rápida e rastreada'
                        />
                        <Info
                            IconComponent={<Coffee weight='fill' size={16} color='#FAFAFA' />}
                            color='#8047F8'
                            text='O café chega fresquenho até você'
                        />
                    </div>
                </div>
                <div className={coffeeImg}>
                    <img src={coffeeImg} alt="" />
                </div>
            </main>

            <CoffeeList />
        </div>
    )
}