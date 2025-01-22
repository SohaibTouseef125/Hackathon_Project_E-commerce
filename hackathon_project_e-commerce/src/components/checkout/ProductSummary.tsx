export default function ProductSummary() {
    return (
      <div className="w-full max-w-md bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Product</h2>
        <div className="flex justify-between mb-4">
          <span>Asgaard Sofa x 1</span>
          <span className="font-semibold">Rs. 250,000.00</span>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
          <span className="font-semibold">Total</span>
          <span className="text-xl text-yellow-600 font-bold">Rs. 250,000.00</span>
        </div>
      </div>
    );
  }
  