import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-white">{product.name}</td>
      <td className="p-3 text-lg text-white text-center">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-white text-center">
        {isAvailable ? "Available" : "Not Available"}
      </td>
      <td className="p-3 text-lg text-white "></td>
    </tr>
  );
}
