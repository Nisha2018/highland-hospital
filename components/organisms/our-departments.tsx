import { departmentData } from "@/db/dummydata";
import DepartmentCard from "../molecules/department-card";
 
export default function DepartmentsSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <h2 className="text-center text-text-title mb-8">
          Our Departments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {departmentData.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
              name={department.name}
              iconName={department.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
