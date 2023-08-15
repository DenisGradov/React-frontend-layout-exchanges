import useWindowSize from "../../hooks/useWindowSize";
import styles from "./top.module.css";
import logo from "../../data/img/logo.png";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Top() {
  const { width } = useWindowSize();
  function handleBurgerOpen() {
    document
      .getElementsByClassName(styles.burgerButton)[0]
      .classList.toggle(styles.close);
    document
      .getElementsByClassName(styles.burgerOverlay)[0]
      .classList.toggle(styles.overlay);
  }
  return (
    <div>
      {width > 1 && (
        <div className={styles.topPc}>
          <div className={styles.topPcleft}>
            <a href="#" className={styles.logo}>
              <img className={styles.logoImg} src={logo} alt="logo" />
            </a>
            {width > 699 && (
              <>
                <div className={styles.line}></div>
                <div className={styles.inputBox}>
                  <input className={styles.input} placeholder="Search"></input>
                  <h2 className={styles.inputIcon}>{<RiSearchLine />}</h2>
                </div>
              </>
            )}
          </div>

          {width > 1544 ? (
            <div className={styles.topPcRight}>
              <nav className={styles.navigation}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.isactive}` : `${styles.noActive}`
                  }
                >
                  Main
                </NavLink>
                <NavLink
                  to="p2p"
                  className={({ isActive }) =>
                    isActive ? `${styles.isactive}` : `${styles.noActive}`
                  }
                >
                  P2P
                </NavLink>
                <NavLink
                  to="partners"
                  className={({ isActive }) =>
                    isActive ? `${styles.isactive}` : `${styles.noActive}`
                  }
                >
                  Partners
                </NavLink>
                <NavLink
                  to="mining"
                  className={({ isActive }) =>
                    isActive ? `${styles.isactive}` : `${styles.noActive}`
                  }
                >
                  Mining
                </NavLink>
                <NavLink
                  to="academy"
                  className={({ isActive }) =>
                    isActive ? `${styles.isactive}` : `${styles.noActive}`
                  }
                >
                  Academy
                </NavLink>
              </nav>
              <div className={styles.line}></div>
              <button className={styles.blackButton}>Register</button>
              <button className={styles.blueButton}>Log in</button>
            </div>
          ) : (
            <>
              <a
                onClick={handleBurgerOpen}
                href="#"
                className={styles.burgerButton}
              >
                <span></span>
              </a>
              <div className={styles.burgerOverlay}>
                <nav className={styles.navigation}>
                  <NavLink
                    onClick={handleBurgerOpen}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${styles.isactive}` : `${styles.noActive}`
                    }
                  >
                    Main
                  </NavLink>
                  <NavLink
                    onClick={handleBurgerOpen}
                    to="p2p"
                    className={({ isActive }) =>
                      isActive ? `${styles.isactive}` : `${styles.noActive}`
                    }
                  >
                    P2P
                  </NavLink>
                  <NavLink
                    onClick={handleBurgerOpen}
                    to="partners"
                    className={({ isActive }) =>
                      isActive ? `${styles.isactive}` : `${styles.noActive}`
                    }
                  >
                    Partners
                  </NavLink>
                  <NavLink
                    onClick={handleBurgerOpen}
                    to="mining"
                    className={({ isActive }) =>
                      isActive ? `${styles.isactive}` : `${styles.noActive}`
                    }
                  >
                    Mining
                  </NavLink>
                  <NavLink
                    onClick={handleBurgerOpen}
                    to="academy"
                    className={({ isActive }) =>
                      isActive ? `${styles.isactive}` : `${styles.noActive}`
                    }
                  >
                    Academy
                  </NavLink>
                </nav>
                {width < 700 && (
                  <div className={styles.inputBoxBurger}>
                    <input
                      className={styles.input}
                      placeholder="Search"
                    ></input>
                  </div>
                )}
                <button className={styles.blackButton}>Register</button>
                <button className={styles.blueButton}>Log in</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Top;
