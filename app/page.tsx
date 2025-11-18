export default function Home() {
  return (
    <>
      <style>{`
        body {
          background-color: #3e3a37;
          margin: 0;
          padding: 0;
        }
        
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
          background-color: #3e3a37;
        }
        
        .icons-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .whatsapp-icon {
          width: 300px;
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        .phone-icon {
          height: 69px;
          width: auto;
          display: block;
        }
        
        .phone-text {
          font-size: 1.6rem;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          main {
            justify-content: flex-start;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .icons-container {
            gap: 1rem;
            width: 100%;
            max-width: 100vw;
            padding: 0 1rem;
          }
          
          .whatsapp-icon {
            width: 140px;
          }
          
          .phone-icon {
            height: 32px;
          }
          
          .phone-text {
            font-size: 1.2rem;
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
          src="/logo-yellow.jpg" 
          alt="Logo" 
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </a>
      <div className="icons-container">
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
            src="/Digital_Inline_Green.svg" 
            alt="WhatsApp Icon" 
            className="whatsapp-icon"
          />
        </a>
        <a 
          href="tel:+34666339982"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <img 
            src="/phone_icon.svg" 
            alt="Phone Icon" 
            className="phone-icon"
          />
          <span className="phone-text">
            Teléfono
          </span>
        </a>
      </div>
    </main>
    </>
  );
}
