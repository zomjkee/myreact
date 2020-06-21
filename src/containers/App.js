import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as laptopsActions from '../actions/laptops';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (laptops, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(laptops, 'price', 'desc');
    case 'price_low':
      return orderBy(laptops, 'price', 'asc');
    case 'manufacturer':
      return orderBy(laptops, 'manufacturer', 'asc');
    default:
      return laptops;
  }
};

const filterLaptops = (laptops, searchQuery) =>
  laptops.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.manufacturer.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchLaptops = (laptops, filterBy, searchQuery) => {
  return sortBy(filterLaptops(laptops, searchQuery), filterBy);
};

const mapStateToProps = ({ laptops, filter }) => ({
  laptops: 
    laptops.items && 
    searchLaptops(laptops.items, filter.filterBy, filter.searchQuery),
  isReady: laptops.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(laptopsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);