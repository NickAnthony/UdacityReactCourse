import ShoppingListItem from "./ShoppingListItem.js";
import PropTypes from 'prop-types';

const ShoppingList = ({items}) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <ShoppingListItem key={index} index={index} item={item} />
        ))}
      </ol>
    </div>
  );
}

ShoppingList.propTypes = {
  items: PropTypes.array
};

export default ShoppingList;
