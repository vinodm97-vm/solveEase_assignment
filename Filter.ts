const [filters, setFilters] = useState({ price: '', type: '' });const matchesFilters = (worker, filters) => {
  const priceMatch = !filters.price || worker.price <= Number(filters.price);
  const typeMatch = !filters.type || worker.type === filters.type;
  return priceMatch && typeMatch;
};
const filteredWorkers = workers.filter(w => matchesFilters(w, filters));const handleFilterChange = (newFilters) => {
  setFilters(newFilters);
  setCurrentPage(1);
};
<select value={filters.type} onChange={e => handleFilterChange({ ...filters, type: e.target.value })}>
  <option value="">All</option>
  <option value="Plumber">Plumber</option>
  <option value="Electrician">Electrician</option>
  {/* Add more types as needed */}
</select>
<input type="number" value={filters.price} onChange={e => handleFilterChange({ ...filters, price: e.target.value })} placeholder="Max price/day" />const totalPages = Math.ceil(filteredWorkers.length / ITEMS_PER_PAGE);
const paginatedWorkers = filteredWorkers.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);