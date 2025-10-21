import { LinkList } from '../LinkList';
import styles from './Footer.module.css';
import { footerLinkBlocks, footerSocialLinks } from '../../data.config';
import { Logo } from '../Logo';
import bgFooter from '../../assets/background/bg_footer.svg';

export function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url("${bgFooter}")` }}
    >
      <div className={`container ${styles.footer_links}`}>
        <div>
          <Logo />
          <p className={`base-text ${styles.footer_subtitle}`}>
            Takeaway & Delivery template
            <br /> for small - medium businesses.
          </p>
        </div>
        <div className={styles.link_blocks}>
          {footerLinkBlocks.map((block) => (
            <LinkList
              key={block.title}
              title={block.title}
              items={block.items}
            />
          ))}
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        <p>
          Built by <span className="highlight-text">Flowbase</span> · Powered by{' '}
          <span className="highlight-text">Webflow</span>
        </p>
        <ul className={styles.socials}>
          {footerSocialLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href}>
                <link.imgComponent />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
