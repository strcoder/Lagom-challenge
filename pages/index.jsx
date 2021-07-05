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
              <img src='/ggg.svg' alt='Lagom logo' />
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
        <Image src='/Frame-2.png' alt='Frame-2' width={320} height={320} />
        <Image src='/Lagggom.png' alt='Frame-2' width={320} height={320} />
      </section>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
