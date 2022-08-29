import PropTypes from 'prop-types';

const ShoppingListItem = ({item, index}) => {
  return (
    <li key={index}>{item}</li>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ShoppingListItem;
