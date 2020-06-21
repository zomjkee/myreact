import { combineReducers } from 'redux';
import laptops from './laptops';
import cart from './cart';
import filter from './filter';

export default combineReducers({
	laptops,
	cart,
	filter,
});