import React from 'react';
import { useLocation } from 'react-router-dom';
import { Productos } from '../Productos';
import { StyledDescription, StyledDetail, Precio } from './styles/CardDetails.Styled';

import ReactImageMagnify from 'react-image-magnify';

const CardDetails = () => {

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const products = Productos.find(p => p.id.toString() === path);

  console.log(location);

  return (
    <StyledDetail>
      <div key={products.id}>
        <div>
          {/* <img src={products.image} alt='' /> */}
          <ReactImageMagnify {...{
            smallImage: {
              alt: `${products.name}`,
              isFluidWidth: true,
              src: `${products.image}`,
            },
            largeImage: {
              src: `${products.image}`,
              width: 1200,
              height: 1800
            }
          }} />
        </div>
        <div>
          <h2>{products.name}</h2>
          <h4>Categoría: {products.category}</h4>
          <Precio>Precio: $ {products.price}</Precio>
          <p>Envio GRATIS</p>
          <p>Hasta 18 meses sin intereses</p>
          <StyledDescription>
            <h3>Acerca de este artículo</h3>
            <p>{products.description}</p>
          </StyledDescription>
        </div>
      </div>
    </StyledDetail>
  )
}

export default CardDetails