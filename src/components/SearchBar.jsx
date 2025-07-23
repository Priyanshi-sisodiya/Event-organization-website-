export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search events..."
      value={value}
      onChange={onChange}
      className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}
