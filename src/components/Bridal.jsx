import Reveal from "../components/Reveal";

export default function Bridal({ onBookBridal }) {
  return (
    <section
      id="bridal"
      className="relative bg-ink-900 py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.pexels.com/photos/34250444/pexels-photo-34250444.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Bridal makeup look"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium">
            Bridal Collection
          </span>

          <h2 className="font-display text-4xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
            Your Dream Bridal Look
            <br />
            <span className="italic text-gold-300">Starts Here</span>
          </h2>

          <p className="text-cream-100/85 leading-relaxed text-base lg:text-lg mb-10 max-w-lg">
            From timeless elegance to modern glamour, our bridal beauty
            services are designed to create a look that feels uniquely yours.
            Let us make your special day even more beautiful.
          </p>

          <button
            onClick={onBookBridal}
            className="inline-flex items-center rounded-full bg-gold-500 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Bridal Appointment
          </button>
        </Reveal>

        <Reveal delay={150} className="hidden lg:block">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ml-auto max-w-sm">
            <img
              src="https://images.pexels.com/photos/36216935/pexels-photo-36216935.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Bridal jewelry and henna detail"
              className="w-full h-[440px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}