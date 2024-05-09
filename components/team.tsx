import Image from "next/image";
import member from "@/public/images/Member/onemember.jpg";
import texts from "@/components/utils/sections.json";

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
            <h2 className="h2 mb-4">{}</h2>
            <p className="text-xl text-gray-600">
              {texts["section-seven"].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
