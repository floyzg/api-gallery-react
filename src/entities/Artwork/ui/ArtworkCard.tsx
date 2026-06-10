import type { Artwork } from "../model/types";
import styles from "./ArtworkCard.module.css";

type ArtworkCardProps = {
  artwork: Artwork;
};

export const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={artwork.imageUrl}
        alt={artwork.title}
      />

      <div className={styles.info}>
        <div className={styles.line} />

        <div>
          <h2 className={styles.title}>{artwork.title}</h2>
          <p className={styles.year}>{artwork.year}</p>
        </div>

        <button className={styles.button} type="button">
          →
        </button>
      </div>
    </article>
  );
};
