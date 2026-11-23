import type { Product } from "../types";

type ProductFormProps = {
  product?: Product;
};
export default function ProductForm({ product }: ProductFormProps) {
  return (
    <>
      <div className="mb-4">
        <label className="text-white" htmlFor="name">
          Product Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 text-black"
          placeholder="Product Name"
          name="name"
          defaultValue={product?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-white" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          className="mt-2 block w-full p-3 bg-gray-50 text-black"
          placeholder="Product Price. Example: 200, 300"
          name="price"
          defaultValue={product?.price}
        />
      </div>
    </>
  );
}
