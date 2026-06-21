import './globals.css';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

export const metadata = {
  title: 'Alexander Winkler — Security Researcher & Software Engineer',
  description: 'Portfolio showcasing security research, distributed systems, and full-stack engineering projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingScreen />
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
