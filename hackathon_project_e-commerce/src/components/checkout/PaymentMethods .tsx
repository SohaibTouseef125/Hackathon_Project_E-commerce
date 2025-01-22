export default function PaymentMethods() {
    return (
      <div className="w-full max-w-md bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Payment Methods</h2>
        <div className="space-y-4">
          <div>
            <input type="radio" id="bank-transfer" name="payment" />
            <label htmlFor="bank-transfer" className="ml-2">Direct Bank Transfer</label>
            <p className="text-sm text-gray-600 mt-2">
              Make your payment directly into our bank account...
            </p>
          </div>
          <div>
            <input type="radio" id="cash-on-delivery" name="payment" />
            <label htmlFor="cash-on-delivery" className="ml-2">Cash on Delivery</label>
          </div>
        </div>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded mt-4">
     
      Place Order
      
     </button>
      </div>
    );
  }
  