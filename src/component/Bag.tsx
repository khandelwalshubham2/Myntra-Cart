import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import { RootState } from "../store";

const Bag = () => {
  const cartItems = useSelector((store: RootState) => store.cart);
  return (
    <main className="home-container">
      <div className="bag-page">
        {cartItems.length === 0 ? (
          <h1 className="text-center">Currently, No items in cart</h1>
        ) : (
          <>
            <div className="bag-items-container">
              {cartItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
            <BagSummary />
          </>
        )}
      </div>
    </main>
  );
};

export default Bag;
