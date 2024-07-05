import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { createProduct } from "../models/product";
import { getCategories } from "../models/category";
import ProductForm from "../components/ProductForm";

export const loader = async () => {
  const categories = await getCategories();
  return json({ categories });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const price = parseFloat(formData.get("price"));
  const category = formData.get("category");
  const image = formData.get("image");

  await createProduct({ name, description, price, category, image });

  return new Response(null, {
    status: 200,
  });
};

export default function NewProduct() {
  const { categories } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Add Product
      </h2>
      <ProductForm categories={categories} />
    </div>
  );
}
