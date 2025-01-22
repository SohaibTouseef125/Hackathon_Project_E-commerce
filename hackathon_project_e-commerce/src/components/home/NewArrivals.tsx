import Image from "next/image";
import Image9 from "./../../../public/assest/Image9.png";

const NewArrivals = () => {
    return (
      <section className="py-16 bg-customProucts">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <Image src={Image9} alt="Asgaard Sofa" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <p className="text-gray-600 my-4">Asgaard Sofa</p>
            <button className="px-6 py-3 bg-black text-white rounded-md">Order Now</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewArrivals;
  