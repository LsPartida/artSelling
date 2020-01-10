import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './navbarHome.component.css';
import { Popover, Icon } from 'antd';
import logo from '../../../media/localbri.png';

const NavbarHomeComponent = ({ userData }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    console.log(userData);
    if (userData) {
      setSession(() => userData);
    }
  }, [userData]);

  // * CONTENT WITHOUT SESSION
  const contentWithoutSession = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Nosotros</label>
      </Link>
      <Link to='/details'>
        <label className='navbarHome-sub2-btn-login'>Nosotros</label>
      </Link>
      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Servicios</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Iniciar Sesión</label>
      </Link>

      <Link to='/register'>
        <label className='navbarHome-sub2-btn-login'>Registrarse</label>
      </Link>
    </div>
  );

  // * CONTENT WITH SESSION
  const contentWithSession = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Nosotros</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Servicios</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>| 😊 Juan</label>
      </Link>
    </div>
  );

  // * MOBILE
  const contentSizeMobile = (
    <div className='navbarHome-sub2'>
      <Popover
        className='popover'
        placement='bottomRight'
        content={session ? contentWithSession : contentWithoutSession}
        trigger='click'
      >
        <Icon type='menu' />
      </Popover>
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
      {window.innerWidth <= 630
        ? contentSizeMobile
        : session
        ? contentWithSession
        : contentWithoutSession}
    </div>
  );
};

export default NavbarHomeComponent;
