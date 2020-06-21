import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import LaptopCard from '../containers/LaptopCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card, } from 'semantic-ui-react';

class App extends Component {
	componentWillMount() {
		const {setLaptops} = this.props;
		axios.get('/laptops.json').then(({data}) => {
			setLaptops(data);
		});
	}
	render () {
		const {laptops, isReady } = this.props;
		return (
			<Container>
        		<Menu />
        		<Filter />
        		<Card.Group itemPerRows={4}>
        			{!isReady ? 'loading...': laptops.map((laptop, i) => <LaptopCard key={i} {...laptop} />)}
				</Card.Group>
			</Container	>	
		);
	}

}

export default App;

