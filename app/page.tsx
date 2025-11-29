export default function Home() {
  return (
    <>
      <style>{`
        html, body {
          background-color: #3e3a37 !important;
          margin: 0 !important;
          padding: 0 !important;
          height: auto !important;
          min-height: 100vh !important;
          width: 100% !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          display: block !important;
        }
        
        main {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          max-width: 100vw;
          margin: 0;
          padding: 2rem 0;
          gap: 2rem;
          background-color: #3e3a37;
          box-sizing: border-box;
        }
        
        @media (min-width: 769px) {
          main {
            padding: 3rem 0;
          }
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
          color: #e3e3e3;
        }
        
        .services-section {
          width: 100%;
          max-width: 800px;
          padding: 2rem;
          margin-top: -1rem;
        }
        
        .services-title {
          font-size: 2rem;
          font-weight: bold;
          color: #e3e3e3;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .service-item {
          background-color: rgba(227, 227, 227, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(227, 227, 227, 0.2);
        }
        
        .service-item h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #e3e3e3;
          margin: 0 0 0.5rem 0;
        }
        
        .service-item p {
          font-size: 1rem;
          color: #e3e3e3;
          margin: 0;
          opacity: 0.9;
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
          
          .services-section {
            padding: 1.5rem 1rem;
            margin-top: -0.5rem;
          }
          
          .services-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .service-item {
            padding: 1rem;
          }
          
          .service-item h3 {
            font-size: 1.1rem;
          }
          
          .service-item p {
            font-size: 0.9rem;
          }
        }
      `}</style>
      <main>
      <a 
        href="tel:+34666339982"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          cursor: 'pointer'
        }}
      >
        <img 
          src="/logo-yellow.png" 
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
            textDecoration: 'none'
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
      <section className="services-section">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Servicio de Taxi Regular</h3>
            <p>Transporte local e interprovincial.</p>
          </div>
          <div className="service-item">
            <h3>Servicios al Aeropuerto</h3>
            <p>Servicio a los aeropuertos de O Porto, Vigo, y Santiago de Compostela.</p>
          </div>
          <div className="service-item">
            <h3>Servicio 24 Horas</h3>
            <p>Disponible las 24 horas del día, 7 días de la semana.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
