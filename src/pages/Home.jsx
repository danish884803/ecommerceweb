import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import FilterTabs from "../components/FilterTabs";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(() => setError("Unable to load products"))
      .finally(() => setLoading(false));
  }, []);

  const getFilteredProducts = () => {
    let list = [...products];

    if (view === "best") {
      list.sort((a, b) => b.rating.rate - a.rating.rate);
      return list.slice(0, 5);
    }

    if (view === "least") {
      list.sort((a, b) => a.rating.rate - b.rating.rate);
      return list.slice(0, 5);
    }

    return list;
  };

  if (loading) return <h2 className="status">Loading products...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <div className="container">
      <h1>🛒Store </h1>

      <FilterTabs active={view} setActive={setView} />

      <div className="grid">
        {getFilteredProducts().map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
