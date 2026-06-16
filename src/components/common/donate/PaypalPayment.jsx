import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = ({ amount, frequency }) => {
  
  // Custom design configurations for the PayPal button overlay
  const buttonStyle = {
    layout: "vertical",
    color: "blue",     // 'gold', 'blue', 'silver', 'white', 'black'
    shape: "rect",     // 'rect' or 'pill'
    label: "donate"    // 'donate', 'paypal', 'buynow', 'checkout'
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `Donation to Margaret Robi Foundation (${frequency})`,
          amount: {
            currency_code: "USD",
            value: amount, // Pulls dynamically from the parent state
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log("Success Details:", order);
    
    // Smooth user feedback
    alert(`Thank you ${order.payer.name.given_name} for supporting the Margaret Robi Foundation!`);
    
    // Optional: Here you can route them to a /thank-you page or trigger an email
  };

  const onError = (err) => {
    console.error("PayPal Execution Error:", err);
    alert("Something went wrong with the connection. Please try again.");
  };

  return (
    <div className="paypal-button-container" style={{ marginTop: "20px" }}>
      <PayPalButtons
        style={buttonStyle}
        forceReRender={[amount, frequency]} // Force redraws buttons if the amount shifts
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </div>
  );
};

export default PayPalPayment;