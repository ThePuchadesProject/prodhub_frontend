import {
  array,
  boolean,
  number,
  object,
  pipe,
  string,
  transform,
  type InferOutput,
} from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: pipe(
    string(),
    transform((input) => Number(input)),
    number(),
  ),
  availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);

export type Product = InferOutput<typeof ProductSchema>;
