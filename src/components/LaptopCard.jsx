import React, {Component} from 'react';
import {Card, Button, Icon, Image, List} from 'semantic-ui-react';

const CartComponent = () => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>
  </List>
)

const LaptopCard = laptop => {
const {title, image, price, manufacturer, addToCart, addedCount} = laptop;
  return (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{manufacturer}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
    <Button onClick={addToCart.bind(this, laptop)}>
      Add to cart{addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
);
};

export default LaptopCard;

