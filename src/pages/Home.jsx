import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import FilterTabs from "../components/FilterTabs";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products
  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Unable to load products"))
      .finally(() => setLoading(false));
  }, []);

  
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id]
    );
  };

  // Filter products
  const getFilteredProducts = () => {
    let list = [...products];

    if (view === "best") {
      return list
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 5);
    }

    if (view === "least") {
      return list
        .sort((a, b) => a.rating.rate - b.rating.rate)
        .slice(0, 5);
    }

    return list;
  };

  
  if (loading) return <h2 className="status">Loading products...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🛒 E-Commerce</h1>
        <div className="fav-count">❤️ Favorites: {favorites.length}</div>
      </div>

      <FilterTabs active={view} setActive={setView} />

      <div className="grid">
        {getFilteredProducts().map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={toggleFavorite}
            onOpen={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
