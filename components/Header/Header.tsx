import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/header.module.css';

export default function Header() {
  const [ isNavOpen, setNavOpen ] = useState(false);

  function toggleNav() {
    setNavOpen(!isNavOpen);
  }


    return (
        <header className={styles["header-main"]}>
          <div className={styles["logo-container"]}>
           <img 
              src="/logo-dark.jpeg" 
              alt="2tyt logo [ we no dey see you seff ]"
              className={styles["logo-image"]}
            />
          </div>

          <nav className={[styles["navigation"], isNavOpen ? styles["show-nav"] : "" ].join(" ")}>
            <ul className={styles["navigation-list"]}>
              <li>
                Something
              </li>
              <li>
                Recruitment
              </li>
              <li>
                Events
              </li>
              <li>
                About
              </li>
            </ul>

            <div className={styles["header-buttons-wrapper"]}>
              <button className={styles["header-button"]}>Join Us</button>
              <button className={styles["header-button"]}>Hire Us</button>
            </div>
          </nav>

          <button className={styles["nav-toggle"]} onClick={toggleNav}>OOO</button>
        </header>
    );
}