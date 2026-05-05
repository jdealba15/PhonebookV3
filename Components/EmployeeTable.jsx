import EmployeeRow from "./EmployeeRow";

const thStyle =
  "border-b border-[#ddd] bg-[#f1f3f5] p-[18px] text-left text-[16px]";

const headers = ["Name", "Position", "Department", "Tag", "Team User ID"];

export default function EmployeeTable({ filteredEmployees }) {
  return (
    <div className="min-h-screen bg-[#f8f8f8] p-6 font-sans">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}