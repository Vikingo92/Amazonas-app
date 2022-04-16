import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Productos } from '../Productos';
import Cards from './Cards';
import { Input, StyledNav, BtnLink, ImgMenu } from './styles/SearchFilter.Styled';

const SearchFilter = () => {

  const [filtrar, setFiltrar] = useState('');

  const clave = ['name', 'price', 'category']


  const Search = (data) => {
    return data.filter(item =>
      clave.some(clave => item[clave].toLowerCase().includes(filtrar.toLowerCase())))
  }

  return (
    <>
      <div>
        <StyledNav>
          <Link to='/'>
            <img src='/images/logo-amazon.png' alt='' />
          </Link>
          <img src='/images/hola.png' alt='' />
          <div>
            <Input
              type='text'
              placeholder='Search...'
              onChange={(e) => setFiltrar(e.target.value)}
            />
          </div>
          <BtnLink to='/Login'>
            <p>Hola, identifícate</p>
          </BtnLink>
          <img src='/images/Frame 25.png' alt='' />
          <img src='/images/section-3.png' alt='' />
        </StyledNav>
        <div>
          <ImgMenu src='/images/sub-menu.png' alt='' />
        </div>
        <div>
          <Cards data={Search(Productos)} />
        </div>
      </div>
    </>
  )
}

export default SearchFilter