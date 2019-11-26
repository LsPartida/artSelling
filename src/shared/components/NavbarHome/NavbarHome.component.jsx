import React from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './navbarHome.component.css';
import { Popover, Icon } from 'antd';
import logo from '../../../media/localbri.png';

const NavbarHomeComponent = () => {
  // * MOBILE Content
  const content = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Sobre Nosotros</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Iniciar Sesión</label>
      </Link>

      <Link to='/register'>
        <label className='navbarHome-sub2-btn-login'>Registrarse</label>
      </Link>
    </div>
  );
  // * MOBILE
  const contentSizeMobile = (
    <div className='navbarHome-sub2'>
      <Popover
        className='popover'
        placement='bottomRight'
        content={content}
        trigger='click'
      >
        <Icon type='menu' />
      </Popover>
    </div>
  );

  // * COMPUTER
  const contentSizeComputer = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Sobre Nosotros</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Iniciar Sesión</label>
      </Link>

      <Link to='/register'>
        <label className='navbarHome-sub2-btn-login'>Registrarse</label>
      </Link>
    </div>
  );

  return (
    <div className='navbarHome-container'>
      <div className='navbarHome-sub1'>
        <Link to='/'>
          <img src={logo} alt='Localbri Arte Local' />
          <h1 className='title-store'>LocalBri</h1>
        </Link>
      </div>
      {/* Show the menu for mobile or laptop depends the display size */}
      {/* const isMobile = /iPhone|Android/i.test(navigator.userAgent); */}
      {window.innerWidth <= 630 ? contentSizeMobile : contentSizeComputer}
    </div>
  );
};

export default NavbarHomeComponent;
