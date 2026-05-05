export async function GET() {
  const res = await fetch("https://randomuser.me/api/?results=100&nat=us", {
    cache: "no-store",
  });

  const data = await res.json();

  const departments = ["IT", "HR", "Sales", "Finance", "Customer Service", "Claims", "Operations"];

  const positions = ["Technician", "Manager", "Analyst", "Representative", "Coordinator", "Specialist"];

  const employees = data.results.map((user, index) => {
    const department = departments[index % departments.length];
    const position = positions[index % positions.length];

    return {
      id: index + 1,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      position,
      department,
      teamUserId: user.login.username,
      avatar: user.picture.thumbnail,
      tags: ["directory", "test-user"],
    };
  });

  return Response.json(employees);
}