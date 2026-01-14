export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onOpen,
}) {
  return (
    <div className="card" onClick={onOpen}>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p className="price">₹ {product.price}</p>
      <p className="rating">⭐ {product.rating.rate}</p>

      <button
        type="button"
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
      >
        ❤️
      </button>
    </div>
  );
}
