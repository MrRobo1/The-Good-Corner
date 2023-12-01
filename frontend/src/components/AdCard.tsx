import styles from '../styles/AdCard.module.css';
import axios from 'axios';

export type AdCardProps = {
    id: number,
    title: string;
    imageUrl: string;
    price: number;
    link?: string;
    description: string;
    owner: string;
    location: string;
    category: {
      id: number;
      name: string;
    }
};

const AdCard = ({ title, imageUrl, price, link, description, owner }: AdCardProps) => {

    return (
        <div className={styles.container}>
          <a className={styles.link} href={link}>
            <img className={styles.image} src={imageUrl} />
            <div className={styles.text}>
              <div className={styles.title}>{title}</div>
              <div className="ad-card-price">{price}</div>
            </div>
          </a>
        </div>
    );
};

export default AdCard;