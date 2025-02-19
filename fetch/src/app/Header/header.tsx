import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.textContainer}> 
        <h1 className={styles.title}>Fetch!</h1>
        <h2 className={styles.subtitle}>A dog walker's friend</h2>
      </div>
      <Image 
        src="/border-terrier.png" 
        alt="border terrier illustration"
        width={100}
        height={100}
        className={styles.image}
      />
    </div>
  );
}

export default Header;
