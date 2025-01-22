import Image from "next/image";

const BlogCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <Image src={image} alt={title} className=" object-cover" width={900} height={600} />
        <div className="p-4">
          <span className="opacity-40">Admin <span>14 Oct 2022 <span>Wood</span></span></span>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <a href="#" className="text-accent hover:underline">Read more</a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  