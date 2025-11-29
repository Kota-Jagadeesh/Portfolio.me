import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Kota Jagadeesh is an avid Android & web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Jagadeesh Kota, kota, Jagadeesh, web developer portfolio, Android developer portfolio, Jagadeesh Android Developer, Jagadeesh developer, mern stack, kota jagadeesh portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Kota Jagadeesh's Portfolio" />
      <meta
        property="og:description"
        content="A developer building websites & Applications that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jagadeesh Kota',
};
