import { ArtworkCard } from "../../entities/Artwork";
import { artworksMock } from "../../shared/api/artworksApi";
import styles from "./GalleryGrid.module.css";

export const GalleryGrid = () => {
  return (
    <section className={styles.grid}>
      {artworksMock.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </section>
  );
};
