import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { BsArrowReturnRight } from 'react-icons/bs';
import styles from '../styles/Menu.module.scss';

const Menu = ({ items, open, active, setOpen, setActive }) => {
  return (
    <section className={`${styles.menu} slideInDown`}>
      <div className={styles.menuBody}>
        <button
          type='button'
          title='Close menu'
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        {items.map((item) => (
          <Link href='/' key={item}>
            <a
              className={active === item ? `color-white bounceIn` : ''}
              onClick={() => {
                setOpen(false);
                setActive(item);
              }}
            >
              {active === item && (
                <span>
                  <BsArrowReturnRight />
                </span>
              )}
              <span>{item}</span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Menu;
