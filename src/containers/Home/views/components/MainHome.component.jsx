import React from 'react';
import { Link } from 'react-router-dom';
// * Ant Design Components
import { Button } from 'antd';
// * Styles
import './mainHome.component.css';
import MainImgHome from '../../../../media/localbri.png';

const MainHome = () => {
  return (
    <div className='main-home'>
      <div className='main-home-img-backround'></div>
      <div className='main-home-info'>
        <h2 className='main-home-title'>Apoya tu gente, consume local</h2>
        <h3 className='main-home-description'>
          Somos tu ayuda vial en los momentos dificiles que no sabes a quien
          acudir por ayuda, no lo pienses mas nosotros te auxiliaremos lo antes
          posible en tu emergencia vial.
        </h3>
        <div className='main-home-btns'>
          <Link to='/register'>
            <Button className='main-home-btn1' icon='tool' type='primary'>
              Solicitar
            </Button>
          </Link>

          <Link to='/about'>
            <Button
              className='main-home-btn2'
              icon='question-circle'
              type='primary'
            >
              Saber mas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
