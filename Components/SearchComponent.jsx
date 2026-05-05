"use client";

function SearchComponent({ searchTerm, setSearchTerm, suggestions }) {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name, email, department..."
        className="w-full rounded-lg border px-4 py-2 pr-10"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 top-2 text-gray-500"
        >
          ✕
        </button>
      )}

      {searchTerm && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border bg-white shadow-md">
          {suggestions.map((employee) => (
            <li
              key={employee.id}
              onClick={() => setSearchTerm(employee.name)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              <p className="font-medium">{employee.name}</p>
              <p className="text-sm text-gray-500">
                {employee.department} — {employee.email}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;