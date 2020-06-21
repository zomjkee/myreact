import React from 'react';
import { Input, Menu, } from 'semantic-ui-react';



const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => (
    <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}
        >All</Menu.Item>
        <Menu.Item
          active={filterBy === 'price_high'}
          onClick={setFilter.bind(this, 'price_high')}
        >Price (expensive)</Menu.Item>
        <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this, 'price_low')}
        >Price (cheap)</Menu.Item>
        <Menu.Item
          active={filterBy === 'manufacturer'}
          onClick={setFilter.bind(this, 'manufacturer')}
        >Manufacturer</Menu.Item>
        <Menu.Item>
          <Input 
            icon="search" 
            onChange={e => setSearchQuery(e.target.value)} 
            value={searchQuery} 
            placeholder="Search..."
          />
        </Menu.Item>
      </Menu>
  );



export default Filter;