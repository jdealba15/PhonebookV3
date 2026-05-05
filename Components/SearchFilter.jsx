"use client";

import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import EmployeeTable from "./EmployeeTable";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);
  const [searchType, setSearchType] = useState("name");

  useEffect(() => {
    async function fetchEmployees() {
      const res = await fetch("/api/employees");
      const data = await res.json();
      setEmployees(data);
  }
    fetchEmployees();
  }, []);

const suggestions = employees
  .filter((employee) => {
    const query = searchTerm.toLowerCase();

    return (
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query) ||
      employee.position.toLowerCase().includes(query)
    );
  })
  .slice(0, 5);
  
 const filteredEmployees = employees.filter((employee) => {
  const search = searchTerm.toLowerCase();

  const value = String(employee[searchType] || "").toLowerCase();

  return value.includes(search);
});

  return (
  <><div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <span className="text-[28px]">📘</span>
        <h1 className="m-0 text-[42px] text-[#123456]">
          AGI Directory
        </h1>
      </div>
      <div className="mb-6">
        <p className="mt-2.5 text-[18px] text-[#333]">
          Access a directory of team members, their roles, and contacts.
        </p>
      </div>
    </div><div>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchType={searchType}
          setSearchType={setSearchType}
          suggestions={suggestions} />
        {filteredEmployees.length === 0 ? (
          <p className="text-gray-500 mt-4">No results found</p>
        ) : (
          <EmployeeTable filteredEmployees={filteredEmployees} />
        )}
    </div></>
  );
}