export default function EmployeeRow({ employee }) {
  return (
    <tr className="border-b border-[#eee]">
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
        <span className=
          "inline-block rounded-lg border border-[#4a90e2] bg-[#dcecff] px-[18px] py-[10px] font-medium text-[#1d4f91]"
          >
          {employee.department}
        </span>
      </td>

      <td className="align-middle p-[18px]">
        {employee.tags.join(", ")}
      </td>

      <td className="align-middle p-[18px]">{employee.teamUserId}</td>
    </tr>
  );
}