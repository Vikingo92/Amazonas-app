import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Productos } from '../Productos';
import { StyledDescription, StyledDetail, Precio, DetailNav } from './styles/CardDetails.Styled';

import ReactImageMagnify from 'react-image-magnify';
import { BtnLink } from './styles/SearchFilter.Styled';

const CardDetails = () => {

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const products = Productos.find(p => p.id.toString() === path);

  console.log(location);

  return (
    <div>
      <DetailNav>
        <Link to='/'>
          <img src='/images/logo-amazon.png' alt='' />
        </Link>
        <BtnLink to='/Login'>
          <p>Hola, identifícate</p>
        </BtnLink>
      </DetailNav>
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
    </div>
  )
}

export default CardDetails