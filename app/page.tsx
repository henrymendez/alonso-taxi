"use client";

export default function Home() {
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp',
        value: 1
      });
    }
  };

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Phone',
        value: 1
      });
    }
  };

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
        
        .description-section {
          width: 100%;
          max-width: 800px;
          padding: 2rem;
          margin-top: -1rem;
          border-top: 1px solid rgba(227, 227, 227, 0.2);
          padding-top: 2rem;
        }
        
        .description-title {
          font-size: 2rem;
          font-weight: bold;
          color: #e3e3e3;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .description-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #e3e3e3;
          text-align: justify;
          opacity: 0.95;
        }
        
        .description-content p {
          margin-bottom: 1rem;
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
        
        .service-item .map-container {
          margin-top: 1rem;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .service-item iframe {
          width: 100%;
          height: 300px;
          border: 0;
          border-radius: 8px;
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
          
          .description-section {
            padding: 1.5rem 1rem;
            padding-top: 1.5rem;
            margin-top: -0.5rem;
            margin-left: 1rem;
            margin-right: 1rem;
            width: calc(100% - 2rem);
            box-sizing: border-box;
          }
          
          .description-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .description-content {
            font-size: 1rem;
            line-height: 1.6;
            text-align: left;
            padding: 0 0.5rem;
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
          
          .service-item iframe {
            height: 250px;
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
          onClick={trackWhatsAppClick}
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
          onClick={trackPhoneClick}
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
        <h2 className="services-title">Servicios de Taxi Profesional</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Transporte local e interprovincial 🚕</h3>
            <p>Zona de Ramirás, Celanova y sus alrededores</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116105.42545451889!2d-8.058568761862755!3d42.16479787910609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd255bbe1c53a4fd%3A0x151ef9d839465229!2sTerra%20de%20Celanova%2C%20Province%20of%20Ourense%2C%20Spain!5e0!3m2!1sen!2sus!4v1765148028816!5m2!1sen!2sus" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="service-item">
            <h3>Servicios a los aeropuertos de la región️ ✈️</h3>
            <p>Porto (OPO)</p>
            <p>Vigo (VGO)</p>
            <p>Santiago de Compostela (SCQ)</p>
          </div>
          <div className="service-item">
            <h3>Servicio 24/7 🕘</h3>
            <p>Disponible las 24 horas del día, 7 días de la semana.</p>
          </div>
        </div>
      </section>
      <section className="description-section">
        <div className="description-content">
          <p>
            Servicio de taxi de 5 plazas. Confiable y profesional que ofrece transporte de calidad 
            en la zona de Ramirás, Celanova y sus alrededores. Garantizo un servicio seguro, puntual y cómodo para 
            todas sus necesidades.
          </p>
          <p>
            Ofrezco traslados a los aeropuertos de la región.
            Aeropuertos de Porto (OPO), Vigo (VGO) y Santiago de Compostela (SCQ). 
          </p>
          <p>
            Contáctame por teléfono o WhatsApp para agendar tu viaje!
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
