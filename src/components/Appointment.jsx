import { useEffect, useState } from "react";
import { CheckCircle, MessageCircle, Send } from "lucide-react";
import { SERVICES, buildWhatsappUrl } from "../data/salon";
import Reveal from "../components/Reveal";

const EMPTY_FORM = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function Appointment({ presetService }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (presetService) {
      setForm((prev) => ({
        ...prev,
        service: presetService,
      }));
    }
  }, [presetService]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const whatsappMessage = `Hello Face Art Beauty Salon, I'd like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.preferredDate || "Not specified"}
Preferred Time: ${form.preferredTime || "Not specified"}
Message: ${form.message || "No additional message"}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.service
    ) {
      return;
    }

    setStatus("success");

    // Open WhatsApp with booking details
    window.open(
      buildWhatsappUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="appointment"
      className="bg-ink-900 py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium">
            Book Now
          </span>

          <h2 className="font-display text-4xl lg:text-5xl text-white mt-4 mb-5 leading-tight">
            Ready for Your Beauty Transformation?
          </h2>

          <p className="text-cream-100/80 leading-relaxed">
            Book your appointment today and let Face Art Beauty Salon
            help you look and feel your best.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="bg-cream-50 rounded-[1.75rem] p-6 sm:p-10 shadow-2xl">

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-10">

                <div className="w-14 h-14 rounded-full bg-success-50 flex items-center justify-center mb-5">
                  <CheckCircle
                    className="w-7 h-7 text-success-600"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-2xl text-ink-900 mb-2">
                  Booking Request Ready
                </h3>

                <p className="text-ink-600 max-w-md">
                  Your booking details have been prepared for WhatsApp.
                  Please send the message to confirm your appointment.
                </p>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm(EMPTY_FORM);
                  }}
                  className="mt-6 text-sm font-medium text-gold-700 hover:text-gold-600"
                >
                  Book another appointment
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid sm:grid-cols-2 gap-5"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 outline-none focus:border-gold-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="03XX XXXXXXX"
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 outline-none focus:border-gold-500"
                  />
                </div>

                {/* Service */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Service *
                  </label>

                  <select
                    required
                    value={form.service}
                    onChange={handleChange("service")}
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 outline-none focus:border-gold-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange("preferredDate")}
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    value={form.preferredTime}
                    onChange={handleChange("preferredTime")}
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-ink-800 mb-2">
                    Message
                  </label>

                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    rows={3}
                    placeholder="Tell us a bit more about what you're looking for"
                    className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 outline-none focus:border-gold-500 resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">

                  <button
                    type="submit"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium tracking-wide text-cream-50 transition-all duration-300 hover:bg-gold-600 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Book Appointment
                  </button>

                  <a
                    href={buildWhatsappUrl(
                      "Hello Face Art Beauty Salon, I'd like to book an appointment."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-full border border-ink-900 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-all duration-300 hover:bg-ink-50 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message on WhatsApp
                  </a>

                </div>

              </form>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  );
}