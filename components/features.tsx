"use client";

import { IoMdPaper } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import { title } from "process";

const cardsInfo = [
  {
    id: 1,
    title: "We Innovate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <HiOutlineLightBulb size={75} />,
  },
  {
    id: 2,
    title: "Performance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <ImStatsBars size={75} />,
  },
  {
    id: 3,
    title: "A Full Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <IoMdPaper size={75} />,
  },
];

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="  text-left pb-12 ">
            <h1 className="h2 mb-4 expressa">
              The Professional Consultation Platform For Your Real Estate and
              Finance
            </h1>
            <div className="flex gap-4">
              {cardsInfo.map((card) => (
                <div>
                  <div
                    key={card.id}
                    className="flex items-center block max-w-sm p-6 bg-gray-200 border-transparent rounded-lg shadow hover:bg-white dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700"
                  >
                    {" "}
                    <div className="mr-4"> {card.icon}</div>
                    <div className="">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black expressa">
                          {card.title}
                        </h5>
                        <p className="font-normal text-#8A8A8A-700 dark:text-#8A8A8A-400">
                          {card.description}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
