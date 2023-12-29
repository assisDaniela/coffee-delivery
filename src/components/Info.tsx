import { IconProps } from "@phosphor-icons/react";
import styles from './Info.module.css';

interface InfoProps {
    color: string;
    IconComponent: IconProps;
    text: string;
}

const colors = new Map([
    ["#C47F17", styles.yellowDark],
    ["#DBAC2C", styles.yellow],
    ["#8047F8", styles.purple],
    ["#574f4d", styles.gray],
]);

export function Info({ color, IconComponent, text }: InfoProps) {
    
    const colorToUse = colors.has(color) ? colors.get(color) : styles.default;

    return (
        <div className={styles.info}>
            <div className={colorToUse}>
                <>
                    {IconComponent}
                </>
            </div>
            <p>{text}</p>
        </div>
    );
}