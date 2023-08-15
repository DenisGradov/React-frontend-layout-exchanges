import styles from "./footer.module.css";
import fb from "../../data/img/footer/fb.svg";
import tw from "../../data/img/footer/tw.svg";
import tg from "../../data/img/footer/tg.svg";
import logo from "../../data/img/footer/logo.svg";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksLeft}>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className={styles.footerLinksLeftLogo}
            >
              <img src={logo} className={styles.footerLinksLeftLogoImg} />
            </a>
            <div className={styles.footerLinksLeftSocialBlock}>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksLeftSocialBlockSocial}
              >
                <img
                  src={tg}
                  className={styles.footerLinksLeftSocialBlockSocialImg}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksLeftSocialBlockSocial}
              >
                <img
                  src={fb}
                  className={styles.footerLinksLeftSocialBlockSocialImg}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksLeftSocialBlockSocial}
              >
                <img
                  src={tw}
                  className={styles.footerLinksLeftSocialBlockSocialImg}
                />
              </a>
            </div>
            <div className={styles.footerLinksLeftButtons}>
              <button className={styles.blackButton}>Register</button>
              <button className={styles.blueButton}>Log in</button>
            </div>
          </div>
          <div className={styles.footerLinksRight}>
            <div className={styles.footerLinksRightBlock}>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Trade
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                P2P
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Partners
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Mining
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Academy
              </a>
            </div>
            <div className={styles.footerLinksRightBlock}>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Privacy policy
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className={styles.footerLinksRightBlockLink}
              >
                Terms of rules
              </a>
            </div>
          </div>
        </div>
        <h2 className={styles.footerRights}>Bitlist© All Rights Reserved</h2>
      </div>
    </>
  );
}

export default Footer;
