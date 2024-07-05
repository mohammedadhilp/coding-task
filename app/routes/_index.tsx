import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">
          Welcome to the Product App
        </h1>
        <nav>
          <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <li>
              <Link
                to="/products"
                className="text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md transition duration-300"
              >
                Show Products
              </Link>
            </li>
            <li>
              <Link
                to="/new-product"
                className="text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md transition duration-300"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
