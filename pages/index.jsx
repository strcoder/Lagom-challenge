import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { IoMdMenu, IoMdArrowRoundForward } from 'react-icons/io';
import { useState } from 'react';
import Menu from '../components/Menu';

export default function Home() {
  const items = ['Home', 'About', 'Work'];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(items[0]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lagom</title>
        <meta name='description' content='Lagom challenge' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/ggg.svg' />
      </Head>

      {open && (
        <Menu
          open={open}
          items={items}
          active={active}
          setOpen={setOpen}
          setActive={setActive}
        />
      )}

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <picture>
              <source
                media='(min-width: 415px)'
                srcSet='/Lagom.svg'
                sizes='100px'
              />
              <img src='/ggg.svg' alt='Lagom logo' loading='lazy' />
            </picture>
            <button
              type='button'
              onClick={() => setOpen(true)}
            >
              <IoMdMenu />
            </button>
          </div>
          <hr />
          <div className={styles.heroBody}>
            <h1>Digital products lovingly made with a human touch</h1>
          </div>
        </section>
      </main>

      <figure className={styles.mainImage}>
        <img src='/Holding-Phone.png' alt='Vercel Logo' />
      </figure>

      <section className={styles.links}>
        <Link href='/'>
          <a>
            <span>Dribbble</span>
            <span><IoMdArrowRoundForward /></span>
          </a>
        </Link>
        <hr />
        <Link href='/'>
          <a>
            <span>Twitter</span>
            <span><IoMdArrowRoundForward /></span>
          </a>
        </Link>
      </section>

      <section className={styles.images}>
        <Image src='/Frame-2.png' alt='Frame-2' width={320} height={320} loading='lazy' />
        <Image src='/Lagggom.png' alt='Frame-2' width={320} height={320} loading='lazy' />
      </section>
    </div>
  );
}
