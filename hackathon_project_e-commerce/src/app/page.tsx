import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeaderHeroSection from "@/components/home/HeaderHeroSection";
import InstagramSection from "@/components/home/InstagramSection";
import NewArrivals from "@/components/home/NewArrivals";
import BlogSection from "@/components/home/OurBlog";
import SideTable from "@/components/home/SideTable";
import TopPickForYou from "@/components/home/TopPickForYou";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderHeroSection />
      <SideTable />
      <TopPickForYou />
      <NewArrivals />
      <BlogSection />
      <InstagramSection />
      <Footer />
    </>
  );
};

export default Home;
