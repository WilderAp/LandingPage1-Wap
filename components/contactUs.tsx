import texts from "@/components/utils/sections.json";

export default function ContactUs() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2">
          <h2 className="expressa text-white text-4xl font-bold mb-5">
            {texts["section-five"].title}
          </h2>
          <p className="text-white text-start mb-5 pr-5">
            {texts["section-five"].body}
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <svg width="122" height="17" className="mx-2">
              <line
                x1="0"
                y1="5"
                x2="90%"
                y2="5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            {/* <h2 className="expressa text-white text-4xl font-bold mx-2">OR</h2> */}
            <svg width="122" height="17" className="mx-2">
              <line
                x1="6"
                y1="5"
                x2="90%"
                y2="5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* <h2 className="expressa text-white text-3xl font-bold mt-5">
            Call Us +123 456 789
          </h2> */}
        </div>
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="max-w-xs mx-auto">
              <a
                className="btn text-white bg-black hover:bg-black-700 shadow w-full"
                href="mailto:executivemastery@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ¡Contact!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
