import { NextResponse } from "next/server";

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

export async function GET() {
    return NextResponse.json(employees);
}