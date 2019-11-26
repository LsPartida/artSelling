import React from 'react';
// * Styles
import './servicesHome.component.css';
import logoLocalBri from '../../../../media/localbri-only-bri.png';

const ServicesHome = () => {
  return (
    <div className='services-home'>
      <img
        className='services-home-img'
        src={logoLocalBri}
        alt='logo-help-traffic'
      />
      <h2 className='services-home-title'>Nuestros Servicios:</h2>

      <h2 className='services-home-subtitle'>
        Brindar ayuda a nuestros vendedores locales es nuestra prioridad
      </h2>

      <h3 className='services-home-description'>
        LocalBri ayuda a vender las creaciones a los vendedores locales, tales
        como a artesanos, pintores, fotografos, gastronomos, joyeros, etc.
      </h3>

      <div className='services-home-options'>
        <div className='services-home-option'>
          <i 
            className="fas fa-palette fa-3x"
            style={{color:'#29a19c'}}
          >
          </i>
          <h2 className='services-home-option-title'>Pinturas</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-dove fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Artesanias</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-pepper-hot fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Comida tradicional</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

        <div className='services-home-option'>
          <i
            className='fas fa-gem fa-3x'
            style={{ color: '#29a19c' }}
          ></i>
          <h2 className='services-home-option-title'>Joyería artesanal</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

        <div className='services-home-option'>
          <i
            className='fas fa-tshirt fa-3x'
            style={{ color: '#29a19c' }}
          ></i>
          <h2 className='services-home-option-title'>Prendas locales</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

        <div className='services-home-option'>
          <i
            className='fas fa-fire-alt fa-3x'
            style={{ color: '#29a19c' }}
          ></i>
          <h2 className='services-home-option-title'>Otros</h2>
          <h3 className='services-home-option-desc'>
            Encuentra pinturas increibles realizadas por el talento local. (COMPLETAR)
          </h3>
        </div>

      </div>
    </div>
  );
};

export default ServicesHome;