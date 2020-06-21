import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import LaptopCard from '../components/LaptopCard';

const mapStateToProps = ({cart}, {id}) => ({
	addedCount: cart.items.reduce(
		(count, laptop) => count + (laptop.id === id ? 1 : 0), 0),
});
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cartActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LaptopCard);
