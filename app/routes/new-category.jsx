import { useLoaderData, redirect } from "@remix-run/react";
import { json } from "@remix-run/node";
import { createCategory, getCategories } from "../models/category";
import CategoryForm from "../components/CategoryForm";

export const loader = async () => {
  const categories = await getCategories();
  return json({ categories });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const parentCategory = formData.get("parentCategory") || null;

  await createCategory({ name, parentCategory });

  return redirect("/categories");
};

export default function NewCategory() {
  const { categories } = useLoaderData();

  return (
    <div>
      <h2>Add Category</h2>
      <CategoryForm categories={categories} />
    </div>
  );
}
