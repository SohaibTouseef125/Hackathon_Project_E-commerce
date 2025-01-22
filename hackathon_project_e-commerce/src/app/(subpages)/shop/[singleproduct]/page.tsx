import AddToCart from "@/components/singleproduct/addToCart";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const query = `*[_type == "product"]{ _id }`;
  const products = await client.fetch(query);

  return products.map((product: { _id: string }) => ({
    singleproduct: product._id,
  }));
}

export default function ProductDetail({
  params,
}: {
  params: { singleproduct: string };
}) {
  
  return <AddToCart params={params} />;
}
