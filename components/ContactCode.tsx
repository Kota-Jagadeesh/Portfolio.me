import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'kota-jagadeesh.com',
    href: 'https://kota-jagadeesh.github.io',
  },
  {
    social: 'email',
    link: 'kota.jagadesh123@gmail.com',
    href: 'mailto:kota-jagadesh123@gmail.com',
  },
  {
    social: 'github',
    link: 'kota-jagadeesh',
    href: 'https://github.com/kota-jagadeesh',
  },
  {
    social: 'linkedin',
    link: 'Jagadeeshwar reddy Kota',
    href: 'https://www.linkedin.com/in/jagadeeshwar-reddy-kota/',
  },
  {
    social: 'X',
    link: 'VoidRaven18',
    href: 'https://x.com/VoidRaven18',
  },
  {
    social: 'telegram',
    link: '@Jagadeesh_kota',
    href: 'https://t.me/Jagadeesh_kota',
  },
  {
    social: 'peerlist',
    link: 'Kota Jagadeesh',
    href: 'https://peerlist.io/kotajagadeesh',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
