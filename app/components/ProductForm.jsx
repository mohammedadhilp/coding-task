import { useState } from "react";
import { Form } from "@remix-run/react";
import PropTypes from "prop-types";

export default function ProductForm({ categories }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImagePreview = (event) => {
    const imageUrl = event.target.value;
    setImagePreview(imageUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: formData,
    });

    if (response.ok) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.href = "/";
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Product Added Successfully!
            </h3>
            <button
              onClick={handleClosePopup}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Form
        method="post"
        encType="multipart/form-data"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="product_name"
              className="block text-lg font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image"
              onChange={handleImagePreview}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md shadow-sm max-h-70"
              />
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
      </Form>
    </div>
  );
}
ProductForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
