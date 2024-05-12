import texts from "./utils/sections.json";

function Projects() {
  return (
    <main className="py-[100px] px-2 max-w-[1440px] mx-auto">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-14">
        <h1 className="text-5xl font-bold mb-7">
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-200 h-auto">
          <img
            content="cover"
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715485555/VR%20Executive/vhngakthjt9d4f9ghnwq.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            FOOD WASTE REDUCTION THROUGH AUGMENTED REALITY
          </h2>
          <p>
            Imagine a world where reducing food waste is as simple as looking
            through your smartphone. Our innovative solution harnesses the power
            of augmented reality (AR) to tackle one of the most pressing global
            challenges: food waste. With our AR technology, users can easily
            visualize and track their food inventory, receive real-time
            expiration alerts, and access personalized recipes based on
            ingredients they already have. By empowering individuals to make
            informed decisions about their food consumption and storage, we're
            not only saving money and resources but also contributing to a more
            sustainable future for all.
          </p>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-primary">
              Go
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
