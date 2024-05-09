import { RiEmotionHappyLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import texts from "@/components/utils/sections.json";

export default function Stats() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 md:mt-1 lg:mt-0 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "#F8F8F8" }}
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2">
          <h2 className="expressa text-#212121 text-4xl font-bold mb-5">
            {texts["section-six"].title}
          </h2>
          <p className="text-#212121 text-start mb-5">
            {texts["section-six"].body}
          </p>
          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="flex justify-start">
              <a
                className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-0"
                href="#0"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Items section 1*/}
          <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60 mb-14 md:mb-0">
            <div className="rounded-full border-transparent bg-white p-6 mb-3">
              <RiEmotionHappyLine size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa">
              1005+
            </h4>
            <p className="text-gray-600 text-center">Happy Clients</p>
          </div>
          <div className="relative flex flex-col items-center p-6 bg-white border rounded shadow-xl w-60">
            <div
              className="rounded-full border-transparent bg-red p-6 mb-3"
              style={{ backgroundColor: "#F8F8F8" }}
            >
              <LuUser2 size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa">
              20+
            </h4>
            <p className="text-gray-600 text-center">Specialists</p>
          </div>
        </div>
      </div>

      {/* Items section 2*/}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-5 mb-20">
          <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60 mb-14 md:mb-0">
            <div className="rounded-full border-transparent bg-white p-6 mb-3">
              <LuClipboardCheck size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa">
              10+
            </h4>
            <p className="text-gray-600 text-center">Years of operation</p>
          </div>
          <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60">
            <div className="rounded-full border-transparent bg-white p-6 mb-3">
              <TfiStatsUp size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa">
              360+
            </h4>
            <p className="text-gray-600 text-center">Projects delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
