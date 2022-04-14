import React, { useState } from 'react'
import { Productos } from '../Productos';
import Cards from './Cards';

const SearchFilter = () => {

  const [filtrar, setFiltrar] = useState('');

  const clave = ['name', 'price', 'category']


  const Search = (data) => {
    return data.filter(item =>
      clave.some(clave => item[clave].toLowerCase().includes(filtrar.toLowerCase())))
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setFiltrar(e.target.value)}
      />

      <Cards data={Search(Productos)} />
    </div>
  )
}

export default SearchFilter