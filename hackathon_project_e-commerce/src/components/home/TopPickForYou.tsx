"use client"
import { client } from "@/sanity/lib/client";
import Image from "next/image";


import { useEffect, useState } from "react";

const TopPickForYou = () => {
  const [products, setproducts] = useState<Products[]>([]);
  const  [view, setview] = useState(false)
     
    useEffect(() => {
      const getData = async () => {
        const queryURL = `*[_type == "product"] | order(_createdAt asc)[0..3]{
          _id,
          name,
          price,
          "imagePath": image.asset->url
        }`;
        const responseData: Products[] = await client.fetch(queryURL);
        setproducts(responseData);
        console.log(responseData);
      };
      getData();
    }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-8">
          Find a bright idea to suit your taste...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Add product cards here */}
          {products.map((item) => (
            <>
              <div key={item._id} className=" p-4 text-center">
                <Image
                  width={900}
                  height={192}
                  src={item.imagePath}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <h3 className="mt-2 font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
              </div>
            </>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 rounded-md underline" onClick={() => setview(true)}>

          
          
            
          {
            view && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Add product cards here */}
              {products.map((item) => (
                <>
                  <div key={item._id} className=" p-4 text-center">
                    <Image
                      width={900}
                      height={192}
                      src={item.imagePath}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <h3 className="mt-2 font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Rs. {item.price}</p>
                  </div>
                </>
              ))}
            </div>
            )
          }
          View More
        </button>
      </div>
    </section>
  );
};

export default TopPickForYou;
