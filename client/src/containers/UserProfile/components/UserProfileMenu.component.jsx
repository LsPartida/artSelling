import React from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './userProfileMenu.component.css';
import { Button } from 'antd';

const UserProfileMenuComponent = () => {
  return (
    <div className='gallery-menu-container'>
      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i
            className='fas fa-plus-circle fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Agregar Producto</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-list-ul fa-1x' style={{ color: '#222831' }}></i>
          <p>Mis productos</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i
            className='fas fa-hand-holding-usd fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Donaciones</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i
            className='fas fa-credit-card fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Metodos de pago</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i
            className='fas fa-user-edit fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Editar Perfil</p>
        </Button>
      </Link>
    </div>
  );
};

export default UserProfileMenuComponent;
