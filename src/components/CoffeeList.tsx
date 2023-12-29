import { CoffeeCard } from './CoffeeCard';
import styles from './CoffeeList.module.css';

export function CoffeeList() {
    return (
        <section className={styles.container}>
            <h1>Nossos cafés</h1>
            <div className={styles.list}>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </div>
        </section>
    );
}