"use client";

import texts from "@/components/utils/sections.json";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef, useEffect } from "react";

const cardsInfo = [
  {
    id: 1,
    title: "Mission",
    description:
      "Our mission is to transform the way leadership skills are developed, providing an unparalleled learning experience that transcends the boundaries of convention. We strive to empower the leaders of tomorrow with the tools and confidence necessary to meet the challenges of the ever-evolving business world.",
    icon: <HiOutlineLightBulb size={75} />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "We envision a future where every leader has access to a revolutionary platform that allows them to practice, hone and master their management skills in a realistic virtual environment. We want to be recognized as the gold standard in leadership training, driving individual and organizational success around the world.",
    icon: <ImStatsBars size={75} />,
  },
  {
    id: 3,
    title: "What makes us different",
    description:
      "At Leadsculpt, we not only offer a virtual reality platform for management skills training, but we also provide a complete and personalized experience. Our attention to detail, our focus on quality and our passion for innovation set us apart in the market. In addition, our platform adapts to the specific needs of each client, guaranteeing effective and relevant learning.",
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
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20">
        <div className="text-left pb-12">
          <h1 className="h2 mb-4 expressa">{texts["section-three"].title}</h1>
          <p
            className="text-xl text-gray-600 mb-8 text-left"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            {texts["section-three"].body}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardsInfo.map((card) => (
              <div
                key={card.id}
                className="max-w-sm bg-gray-200 border-transparent rounded-lg shadow hover:bg-white dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700"
              >
                <div className="p-6">
                  <div className="mr-4">{card.icon}</div>
                  <div>
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black expressa">
                        {card.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
