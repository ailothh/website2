import './globals.css'

export const metadata = {
  title: 'Alexander Winkler - Portfolio',
  description: 'Portfolio website showcasing security research and development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="loading-screen" id="loading-screen">
          <div className="loading-spinner"></div>
          <div className="loading-text">LOADING</div>
        </div>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Loading screen
            window.addEventListener('load', function() {
              setTimeout(function() {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                  loadingScreen.classList.add('hidden');
                  setTimeout(function() {
                    loadingScreen.style.display = 'none';
                  }, 500);
                }
              }, 1500);
            });
          `
        }} />
      </body>
    </html>
  )
}
