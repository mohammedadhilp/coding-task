import { useLoaderData, redirect } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getCategories, createCategory } from "../models/category";
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

export default function Categories() {
  const { categories } = useLoaderData();

  return (
    <div>
      <h2>Categories</h2>
      <CategoryForm categories={categories} />
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <p>{category.name}</p>
            {category.parentCategory && (
              <p>Parent: {category.parentCategory.name}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
