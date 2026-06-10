import styles from "./GalleryPage.module.css";
import { Header } from "../../widgets/Header/Header";
import { GalleryGrid } from "../../widgets/GalleryGrid/GalleryGrid";

export const GalleryPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Header />
        <GalleryGrid />
      </div>
    </main>
  );
};  