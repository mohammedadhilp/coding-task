import PropTypes from "prop-types";

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-78 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 text-xl font-semibold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
