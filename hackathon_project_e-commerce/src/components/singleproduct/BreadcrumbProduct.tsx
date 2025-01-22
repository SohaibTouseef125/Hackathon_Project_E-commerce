import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className=" py-4 px-6 ">
      <p className="text-sm   ">
        <Link href="/" className="opacity-45">Home</Link> &gt;
        <Link href="/shop" className="opacity-45">Shop</Link>  &gt; <span className="w-12 border-r border-black opacity-40 mr-2"></span> Asgaard Sofa
      </p>
    </div>
  );
};

export default Breadcrumb;
