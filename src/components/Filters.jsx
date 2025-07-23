export default function Filters({ category, setCategory, date, setDate }) {
  const categories = ['All', 'Music', 'Comedy', 'Kids', 'Business'];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      />
    </div>
  );
}
