import Image from "next/image";
import Image1 from "../../../public/assest/Image1.png";
import Link from "next/link";
const HeaderHeroSection = () => {
  return (
    <section className="bg-customHeader py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-medium mb-4">Rocket Single Seater</h1>
          <Link href="/shop">
          <button className="px-6 py-3 rounded-md underline text-[24px] font-medium">
            Shop Now
          </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src={Image1} alt="Rocket Single Seater" />
        </div>
      </div>
    </section>
  );
};

export default HeaderHeroSection;
