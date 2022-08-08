import React from "react";

// React Currency format
import CurrencyFormat from "react-currency-format";

// Styles
import "./Subtotal.css";

// Context
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        value={getBasketTotal(basket)}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
