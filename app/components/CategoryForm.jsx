import { Form } from "@remix-run/react";

export default function CategoryForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Add Category
      </h2>
      <Form method="post" className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="category-name"
            className="block text-lg font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Category
          </button>
        </div>
      </Form>
    </div>
  );
}
