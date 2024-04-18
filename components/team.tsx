import Image from "next/image";
import member from "@/public/images/Member/onemember.jpg";
import member1 from "@/public/images/Member/member.jpg";

const members = [
  {
    id: 1,
    name: "Tiara Lyodra",
    role: "Co-Founder",
    image: member,
  },
  {
    id: 2,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 3,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 4,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 5,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 6,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 7,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
  {
    id: 8,
    name: "Landon Coleman",
    role: "Real Estate Expert",
    image: member,
  },
];

export default function TeamMembers() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
          aria-hidden="true"
        ></div> */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            {members.map((member) => (
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <Image
                  className="relative rounded-full"
                  src={member.image}
                  width={110}
                  height={110}
                  alt="Testimonial 01"
                  style={{ marginBottom: "20px", marginTop: "20px" }}
                />
                <h4 className="text-md font-bold leading-snug tracking-tight mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
