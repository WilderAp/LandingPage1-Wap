export default function ContactUs() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex py-40">
        <div>
          <h2 className="expressa text-white text-4xl font-bold mb-5">
            Make An Appointment Experience Elegance
          </h2>
          <p className="text-white text-start mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <div className="flex  items-center justify-start">
            <svg width="122" height="17">
              <line
                x1="0"
                y1="5"
                x2="90%"
                y2="5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <h2 className="expressa text-white text-4xl font-bold mb-3 ">
              <h2 className="">OR</h2>
            </h2>
            <svg width="122" height="17">
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
          <h2 className="expressa text-white text-3xl font-bold mb-3">
            Call Us +123 456 789
          </h2>
        </div>
        <div className="py-12 md:py-20 px-20">
          {/* Items */}
          <div className="">
            {/* max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none */}
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl py-20">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0 ">
                <a
                  className="btn text-white  hover:bg-black-700 shadow w-80"
                  style={{ backgroundColor: "#191919" }}
                  href="mailto:correo@example.com"
                  target="_blank"
                >
                  ¡Contact!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
