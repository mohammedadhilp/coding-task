import { useLoaderData, Form } from "@remix-run/react";
import { getProducts } from "../models/product";
import ProductList from "../components/ProductList";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get("sort");
  const category = url.searchParams.get("category");
  const products = await getProducts({ sort, category });
  return { products };
};

export default function Products() {
  const { products } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>
      <Form
        method="get"
        className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <label className="block text-lg font-medium text-gray-700">
            Sort by price:
            <select
              name="sort"
              className="mt-1 block w-full md:w-auto pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
          <label className="block text-lg font-medium text-gray-700 md:ml-4">
            Filter by category:
            <select
              name="category"
              className="mt-1 block w-full md:w-auto pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">All</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="tv">TV</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 md:mt-0 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply
        </button>
      </Form>
      <ProductList products={products} />
    </div>
  );
}
