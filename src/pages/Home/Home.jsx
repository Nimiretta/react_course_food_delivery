import { Button } from '../../components/Button';
import styles from './Home.module.css';
import Trustpilot from '../../assets/img/trustpilot.svg?react';
import bannerImg from '../../assets/img/bannerImg.png';
import bgBanner from '../../assets/background/bg_banner.svg';

export function Home() {
  return (
    <div style={{ backgroundImage: `url("${bgBanner}")` }}>
      <section className={`container page ${styles.home_section}`}>
        <div className={styles.home_section_left}>
          <h1 className="heading-1">
            Beautiful food & takeaway,{' '}
            <span className="highlight-text">delivered</span> to your door.
          </h1>
          <p className={`${styles.home_section_subtitle} subtext`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <Button text="Place an Order" />
          <div className={styles.trustpilot_block}>
            <Trustpilot />
            <p className={styles.trustpilot_text}>
              <span className="highlight-text">4.8 out of 5</span> based on
              2000+ reviews
            </p>
          </div>
        </div>
        <img src={bannerImg} alt="Food picture" />
      </section>
    </div>
  );
}
