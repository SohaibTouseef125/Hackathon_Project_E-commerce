import { ourBolg } from "@/app/data";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
        <p className="text-gray-600 mb-8">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add blog cards here */}
          {ourBolg.map((item) => (
            <>
              <div key={item.id} className=" p-4 text-center ">
                <Image
                  width={393}
                  height={393}
                  src={item.image}
                  alt={item.name}
                  className="w-[393px] h-[393px] object-cover rounded-md"
                />
                <h3 className="mt-2 font-semibold underline ">{item.heading}</h3>

                <span className="text-gray-600 ">{item.min}</span>
                <span className="pl-5">{item.date}</span>
              </div>
            </>
          ))}
        </div>
        <button className="mt-8 px-6 py-3  rounded-md underline">
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
