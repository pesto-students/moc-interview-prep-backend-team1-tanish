import RazorPay from "razorpay";

const razorPay = new RazorPay({
    key_id: "rzp_test_vwNHNpvoK9Fkc4",
    key_secret: "Oobfkm13OxxCUYT6VUum2zTG",
  });


 const RazorpayControllerOrder = (req, res) => {
    let options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: "receipt#1",
    };
  
    razorPay.orders
      .create(options)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send({
          message: err.message || "Server Error, could not create order",
        });
      });
  };


  export {RazorpayControllerOrder};