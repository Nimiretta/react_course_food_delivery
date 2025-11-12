import styles from './ImgTile.module.css';

export function ImgTile({ imgUrl, altText = 'Image' }) {
  return (
    <div className={styles.imgTile}>
      <img className={styles.img} src={imgUrl} alt={altText} />
    </div>
  );
}
