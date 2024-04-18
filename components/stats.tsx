import { RiEmotionHappyLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { FcStatistics } from "react-icons/fc";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";

export default function Stats() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0  md:mt-1 lg:mt-0  pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "#F8F8F8" }}
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex pt-40">
        <div>
          <h2 className="expressa text-#212121 text-4xl font-bold mb-5">
            Let the Numbers Speak!
          </h2>
          <p className="text-#212121 text-start mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
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
        <div className="">
          {/* Items section 1*/}
          <div className="flex gap-5">
            {/* max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none */}
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60 mb-14">
              <div className="rounded-full border-transparent bg-white p-6 mb-3">
                <RiEmotionHappyLine size={40} />
              </div>
              <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa ">
                1005+
              </h4>
              <p className="text-gray-600 text-center">Happy Clients</p>
            </div>
            {/* 2do item */}
            <div className="relative flex flex-col items-center p-6 bg-white border rounded shadow-xl w-60 mt-14 ">
              <div
                className="rounded-full border-transparent bg-red p-6 mb-3"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <LuUser2 size={40} />
              </div>
              <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa ">
                20+
              </h4>
              <p className="text-gray-600 text-center">Specialits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Items section 2*/}
      <div className="flex justify-center ">
        <div className="flex gap-5 mb-20">
          {/* max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none */}
          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60 mb-14">
            <div className="rounded-full border-transparent bg-white p-6 mb-3">
              <LuClipboardCheck size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa ">
              10+
            </h4>
            <p className="text-gray-600 text-center">Years of operation</p>
          </div>
          {/* 2do item */}
          <div className="relative flex flex-col items-center p-6 bg-transparent border rounded shadow-xl w-60 mt-14 ">
            <div className="rounded-full border-transparent bg-white p-6 mb-3">
              <TfiStatsUp size={40} />
            </div>
            <h4 className="text-4xl font-bold leading-snug tracking-tight mb-1 expressa ">
              360+
            </h4>
            <p className="text-gray-600 text-center">Projects delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
