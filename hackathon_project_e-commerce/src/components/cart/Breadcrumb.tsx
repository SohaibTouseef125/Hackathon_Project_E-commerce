import Link from "next/link";

const Breadcrumb = () => {
    return (
      <section className="bg-gray-100 py-12" style={{backgroundImage : "url('/assest/bgShopImage15.png')",backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
          <p className="text-gray-600"><Link href="/">Home</Link> &gt; Cart</p>
        </div>
      </section>
    );
  };
  
  export default Breadcrumb;
  