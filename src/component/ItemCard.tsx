import { useState } from "react";
import { ItemCardProps } from "../types";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../store";
import { cartAction } from "../store/cartSlice";

const ItemCard = (props: ItemCardProps) => {
  const { item } = props;
  const cartItems = useSelector((store: RootState) => store.cart);
  // const [showAddBtn, setShowAddBtn] = useState(!cartItems.includes(item));
  var showAddBtn = !cartItems.includes(item);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartAction.addTocart(item));
  };
  const removeFromCart = () => {
    dispatch(cartAction.removeFromCart(item));
  };
  return (
    <div className="card">
      <img
        src={`/src/assets/${item.image}`}
        className="card-img-top card-image"
        alt="..."
      />
      <div className="card-content">
        <div>
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div>{item.company}</div>
        <div>{item.item_name}</div>
        <div className="price-box">
          <span>Rs.{item.current_price}</span>
          <span className="original-price">Rs.{item.original_price}</span>
          <span>({item.discount_percentage}%off)</span>
        </div>
        {showAddBtn ? (
          <button
            type="button"
            className="btn btn-success card-button"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-danger card-button"
            onClick={removeFromCart}
          >
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
