import {
  Form,
  useNavigate,
  type ActionFunctionArgs,
  redirect,
  useFetcher,
} from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-white">{product.name}</td>

      <td className="p-3 text-lg text-white text-center">
        {formatCurrency(product.price)}
      </td>

      <td className="p-3 text-lg text-white text-center">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${isAvailable ? "text-white" : "text-red-400"} hover:cursor-pointer rounded-lg p-2 text-xs uppercase font-bold w-full border border-white`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </button>
        </fetcher.Form>
      </td>

      <td className="p-3 text-white">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/products/${product.id}/edit`)}
            className="flex-1 h-9 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg uppercase font-bold text-xs leading-none flex items-center justify-center cursor-pointer"
          >
            Edit
          </button>

          <Form
            className="flex-1 flex"
            method="POST"
            onSubmit={(e) => {
              if (!confirm("¿Remove?")) {
                e.preventDefault();
              }
            }}
            action={`products/${product.id}/remove`}
          >
            <input
              type="submit"
              className="w-full h-9 bg-red-600 hover:bg-red-500 text-white rounded-lg uppercase font-bold text-xs leading-none text-center cursor-pointer"
              value="Remove"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
