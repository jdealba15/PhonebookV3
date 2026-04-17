"use client";

import React, { useState } from "react";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "Andrea Amaya",
      email: "andreaam@adrianasinsurance.com",
      position: "Sales Agent",
      department: "Sales",
      tags: ["call center", "inbounder", "outbounder"],
      teamUserId: "andreaam@adrianasinsurance.com",
      avatar: "https://via.placeholder.com/56"
    },
    {
      id: 2,
      name: "Stephanie Alejandra Escobar Pimentel",
      email: "stephanies@agibusiness.com",
      position: "Phone Sales",
      department: "Immigration",
      tags: [
        "Immigration",
        "customer service",
        "consultations",
        "payments",
        "marketing",
        "sales",
        "FBI fingerprint",
        "Visas"
      ],
      teamUserId: "stephanies@agibusiness.com",
      avatar: "https://via.placeholder.com/56"
    },
    {
      id: 3,
      name: "Alexis Alberto Ortega Carrillo",
      email: "alexiso@agibusiness.com",
      position: "Training and Internal Communication",
      department: "Human Resources",
      tags: ["Recruitment", "interviews", "warnings", "hiring"],
      teamUserId: "alexiso@agibusiness.com",
      avatar: "https://via.placeholder.com/56"
    },
    {
      id: 4,
      name: "Josefina Contreras Hernandez",
      email: "josefinah@agibusiness.com",
      position: "Phone Sales",
      department: "Sales",
      tags: ["Closer", "outbounder", "inbounder", "call center"],
      teamUserId: "josefinah@agibusiness.com",
      avatar: "https://via.placeholder.com/56"
    }
  ];

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase();

    return (
      employee.name.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.position.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search) ||
      employee.teamUserId.toLowerCase().includes(search) ||
      employee.tags.join(" ").toLowerCase().includes(search)
    );
  });

  const SearchStyle = 
    "w-full max-w-[560px] rounded-[10px] border border-[#ccc] px-[18px] py-[14px] text-[16px] outline-none"
  
    return (
    <div className="min-h-screen bg-[#f8f8f8] p-6 font-sans">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[28px]">📘</span>
          <h1 className="m-0 text-[42px] text-[#123456]">AGI Directory</h1>
        </div>

        <p className="mt-2.5 text-[18px] text-[#333]">
          Access a directory of team members, their roles, and contacts.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={SearchStyle}
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-[#ddd] bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]">
                Name
              </th>
              <th className="border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]">
                Position
              </th>
              <th className="border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]">
                Department
              </th>
              <th className="border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]">
                Tag
              </th>
              <th className="border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]">
                Team User ID
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="border-b border-[#eee]">
                <td className="align-middle p-[18px]">
                  <div className="flex items-center gap-[14px]">
                    {employee.avatar ? (
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-14 w-14 rounded-full bg-[#ddd]" />
                    )}

                    <div>
                      <div className="mb-1.5 text-[18px] font-bold">
                        {employee.name}
                      </div>
                      <div className="text-[16px] text-[#1d4f91]">
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="align-middle p-[18px]">{employee.position}</td>

                <td className="align-middle p-[18px]">
                  <span className="inline-block rounded-lg border border-[#4a90e2] bg-[#dcecff] px-[18px] py-[10px] font-medium text-[#1d4f91]">
                    {employee.department}
                  </span>
                </td>

                <td className="align-middle p-[18px]">
                  {employee.tags.join(", ")}
                </td>

                <td className="align-middle p-[18px]">{employee.teamUserId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}