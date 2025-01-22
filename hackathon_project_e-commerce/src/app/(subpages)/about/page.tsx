// import BlogCard from "@/components/blog/BlogCard"
import { blogs } from "@/app/data";
import BlogCard from "@/components/blog/BlogCard";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import Sidebar from "@/components/blog/Sidebar";
import FeaturesShop from "@/components/shop/FeaturesShop";
import PaginationShop from "@/components/shop/PaginationShop";

const About = () => {
  return (
    <>
      <BlogHeroSection />
      <div className="container mx-auto grid grid-cols-4 gap-4 my-8">
        <main className="col-span-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </main>

        <Sidebar />
      </div>
      <div className="mx-auto">
        <PaginationShop />
        <FeaturesShop />
      </div>
    </>
  );
};

export default About;
