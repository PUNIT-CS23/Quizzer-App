async function checkUserPaymentStatus() {
    const user = JSON.parse(localStorage.getItem("user")); // Fetch user from local storage
    if (!user) return;
  
    const response = await fetch(`/api/user/${user._id}`);
    const data = await response.json();
  
    if (!data.isPaid) {
      document.querySelectorAll(".ag-courses_item").forEach((quiz) => {
        const premiumTag = document.createElement("span");
        premiumTag.innerHTML = "🔒 Premium";
        premiumTag.style.position = "absolute";
        premiumTag.style.top = "10px";
        premiumTag.style.right = "10px";
        premiumTag.style.backgroundColor = "gold";
        premiumTag.style.padding = "5px";
        premiumTag.style.borderRadius = "5px";
        quiz.appendChild(premiumTag);
  
        quiz.addEventListener("click", (e) => {
          e.preventDefault();
          initiatePayment(user._id);
        });
      });
    }
  }
  
  async function initiatePayment(userId) {
    const response = await fetch("/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
  
    const data = await response.json();
  
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Use the Razorpay key from the backend
      amount: 2900,
      currency: "INR",
      name: "Quizzer Premium",
      description: "Access all quizzes",
      order_id: data.orderId,
      handler: async function (response) {
        await fetch("/api/payment/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            orderId: data.orderId,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          }),
        });
  
        alert("Payment successful! You now have full access.");
        location.reload();
      },
    };
  
    const rzp = new Razorpay(options);
    rzp.open();
  }
  
  // Run check on page load
  checkUserPaymentStatus();
  