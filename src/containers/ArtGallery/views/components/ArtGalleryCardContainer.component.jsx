import React, { useState, useEffect } from 'react';
// * Component
import Card from '../../../../shared/components/ImageCard/ImageCard.component';
import images from '../../../../utils/images';
// * Styles
import './artGalleryCardContainer.component.css';

const ArtGalleryCardContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  const getItems = async () => {
    setLoading(true);
    const res = await fetch('/products');
    const data = await res.json();

    setItems(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Cargando...</h4>;
  }

  return (
    <div className='art-gallery-card-container'>
      {!loading && items.length === 0 ? (
        <p>No hay productos publicados</p>
      ) : (
        items.map(card => {
          return (
            <Card
              key={card.id}
              images={card.urlImage}
              title={card.productName}
              price={card.productPrice}
              ubication={card.productUbication}
              userRouter={card.urlDetails}
              likes={card.productLikes}
              footer={true}
            />
          );
        })
      )}
    </div>
  );
};

export default ArtGalleryCardContainer;
