import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchProducts = ({ searchProducts }: { searchProducts: Products[] }) => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-11">
        {searchProducts?.length > 0 ? (
          <>
            {searchProducts.map((item: Products) => (
              <div key={item?._id} className="text-center  p-4">
                <Link href={`/shop/${item._id}`}>
                  <Image
                    src={item?.imagePath}
                    alt={item?.name}
                    width={200}
                    height={200}
                    className="h-40 mx-auto"
                  />
                </Link>
                <h3 className="mt-2 font-semibold">{item?.name}</h3>
                <p className="text-gray-500">Rs. {item?.price}</p>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">No Related Products Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
