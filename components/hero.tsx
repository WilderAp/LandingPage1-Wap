import Image from "next/image";
import man from "../public/images/man.png";
import texts from "@/components/utils/sections.json";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
            <circle cx="700" cy="243" r="15" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-4.5xl font-extrabold leading-tighter tracking-tighter mb-4 expressa"
              data-aos="zoom-y-out"
            >
              {texts["section-two"].title}{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {texts["section-two"].body}
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
                    Discover Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-10 mt-10">
          {/* <Image
            className="md:max-w-none mx-auto rounded"
            src={texts["section-two"].image}
            width={300}
            height="150"
            alt="Business man"
          /> */}
          <img src={texts["section-two"].image} alt="1" />
        </div>
      </div>
    </section>
  );
}
