import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// * Component
import Card from '../../../../shared/components/ImageCard/ImageCard.component';
import images from '../../../../utils/images';
// * Styles
import './artGalleryCardContainer.component.css';
// * Actions
import { getAllProducts } from '../../../../actions/productActions';

const ArtGalleryCardContainer = ({ getAllProducts, products, loading }) => {
  const [productsData, setProductsData] = useState([]);

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
      ) : (
        products.map(card => {
          return (
            <Card
              key={card.id}
              images={[card.urlImage]}
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
  loading: state.products.loading
});

export default connect(mapStateToProps, {
  getAllProducts
})(ArtGalleryCardContainer);
