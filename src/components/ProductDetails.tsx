import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();

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
      <td className="p-3 text-lg text-white ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/products/${product.id}/edit`)}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
