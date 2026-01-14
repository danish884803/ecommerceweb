export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ₹ {product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating.rate}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
