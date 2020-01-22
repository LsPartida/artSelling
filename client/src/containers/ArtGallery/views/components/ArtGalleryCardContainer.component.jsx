import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// * Component
import Card from '../../../../shared/components/ImageCard/ImageCard.component';
import images from '../../../../utils/images';
// * Styles
import './artGalleryCardContainer.component.css';
// * Actions
import { getAllProducts } from '../../../../actions/productActions';

const ArtGalleryCardContainer = ({
  getAllProducts,
  products,
  loading,
  filteredProducts
}) => {
  useEffect(() => {
    getAllProducts();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h4>Cargando...</h4>;
  }

  return (
    <div className='art-gallery-card-container'>
      {!loading && products.length === 0 ? (
        <p>No hay productos publicados</p>
      ) : filteredProducts !== null ? (
        filteredProducts.map(card => {
          console.log(card.galeryImgUrls);
          return (
            <Card
              key={card._id}
              images={card.galeryImgUrls.length !== 0 && card.galeryImgUrls}
              title={card.productName}
              description={card.productDescripcion}
              price={card.productPrice}
              ubication={card.productUbication}
              userRouter={card.urlDetails}
              likes={card.productLikes}
              footer={true}
            />
          );
        })
      ) : (
        products.map(card => {
          return card.galeryImgUrls.length !== 0 ? (
            <Card
              key={card._id}
              images={card.galeryImgUrls}
              title={card.productName}
              description={card.productDescripcion}
              price={card.productPrice}
              ubication={card.productUbication}
              userRouter={card.urlDetails}
              likes={card.productLikes}
              footer={true}
            />
          ) : (
            <Card
              key={card._id}
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

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  filteredProducts: state.products.filteredProducts
});

export default connect(mapStateToProps, {
  getAllProducts
})(ArtGalleryCardContainer);
