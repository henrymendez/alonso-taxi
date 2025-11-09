export default function Home() {
  return (
    <>
      <style>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          main {
            justify-content: flex-start;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
      <main>
      <a 
        href="https://wa.me/34666339982"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          cursor: 'pointer'
        }}
      >
        <img 
          src="/logo-white.jpg" 
          alt="Logo" 
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </a>
      <a 
        href="https://wa.me/34666339982"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#25D366',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}
      >
        666 339 982
      </a>
    </main>
    </>
  );
}
