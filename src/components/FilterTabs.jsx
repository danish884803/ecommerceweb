export default function FilterTabs({ active, setActive }) {
  return (
    <div className="tabs">
      <button
        className={active === "all" ? "active" : ""}
        onClick={() => setActive("all")}
      >
        All Products
      </button>

      <button
        className={active === "best" ? "active" : ""}
        onClick={() => setActive("best")}
      >
        Best Products
      </button>

      <button
        className={active === "least" ? "active" : ""}
        onClick={() => setActive("least")}
      >
        Least Products
      </button>
    </div>
  );
}
