import Image from "next/image";
import Image9 from "./../../../public/assest/Image9.png";

const BlogCard = () => {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <Image src={Image9} alt="sofa" className=" object-cover" width={900} height={600} />
        <div className="p-4">
          <span className="opacity-40">Admin <span>14 Oct 2022 <span>Wood</span></span></span>
          <h2 className="text-xl font-bold mb-2"></h2>
          <p className="text-gray-600 mb-4"></p>
          <a href="#" className="text-accent hover:underline">Read more</a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  