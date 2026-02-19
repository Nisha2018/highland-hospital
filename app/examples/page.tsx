import DepartmentCard from "@/components/molecules/department-card";
import DoctorCard from "@/components/molecules/doctor-card";
import Review from "@/components/molecules/review";

export default function Examples() {
  const sampleDepartment = {
    id: "dept-1",
    name: "Dermatology",
    iconName: "Syringe",
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="max-w-[176px]">
        <DepartmentCard
          id={sampleDepartment.id}
          name={sampleDepartment.name}
          iconName={sampleDepartment.iconName}
        />
      </div>
      <br />
      <br />
      <DoctorCard
        id="doc-1"
        name="Dr. John Doe"
        specialty="Dermatologist"
        rating={4.5}
        reviewCount={120}
        imageUrl="https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvciUyMGlhbWdlfGVufDB8fDB8fHww" 
      />
      <br />
      <DoctorCard
        id="doc-1"
        name="Dr. Jane Smith"
        specialty="Dermatologist"
        rating={4.5}
        reviewCount={120}
        imageUrl="" 
      />
      <br />
      <Review 
        id="1"
        name="Ray Miller"
        date="2026/01/17" 
        rating={4}
        testimonial="Dr. Miller was fantastic! She took the time to listen to my concerns and provided clear explanations. The treatment plan she recommended worked wonders for my skin. I highly recommend her to anyone looking for a knowledgeable and caring dermatologist."
        imageSrc="https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvciUyMGlhbWdlfGVufDB8fDB8fHww"
        />
      <br />
      <br />
    </div>
  );
}
