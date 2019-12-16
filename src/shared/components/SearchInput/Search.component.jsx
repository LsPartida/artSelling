import React from 'react';
// * AntD
import { Input } from 'antd';
// * Styles
import './search.component.css';

const SearchComponent = () => {
  const { Search } = Input;
  return (
    <div className='search-input-container'>
      <Search
        placeholder='Buscar Producto'
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  );
};

export default SearchComponent;
