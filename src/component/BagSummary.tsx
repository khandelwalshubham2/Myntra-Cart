import { useSelector } from "react-redux";
import { RootState } from "../store";

const BagSummary = () => {
  const cartItems = useSelector((store: RootState) => store.cart);
  const cartSummary = {
    totalItem: cartItems.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  const convenienceFee = 99;

  cartItems.forEach((item) => {
    cartSummary.totalMRP = cartSummary.totalMRP + item.original_price;
    cartSummary.totalDiscount =
      cartSummary.totalDiscount + (item.original_price - item.current_price);
  });

  cartSummary.finalPayment = cartSummary.totalMRP - cartSummary.totalDiscount;

  cartSummary.finalPayment = cartSummary.finalPayment + convenienceFee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({cartSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{cartSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{cartSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{cartSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
