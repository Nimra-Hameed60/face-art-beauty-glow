export const SALON = {
  name: "Face Art Beauty parlor",
  tagline: "Professional Beauty Care & Styling in Pakistan",

  addressLines: [
    "Punjab Pakistan",
  ],

  phoneDisplay: "0300 1234567",
  phoneTel: "+923001234567",
  whatsappNumber: "923001234567",

  instagramHandle: "Instagram",
  instagramUrl: "https://instagram.com",
};

export function buildWhatsappUrl(message) {
  return `https://wa.me/${SALON.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWhatsappMessage =
  "Hello Face Art Beauty Salon, I'd like to book an appointment.";

export const mapsEmbedUrl =
  "https://www.google.com/maps?q=Seven+Seas+Marriage+Hall+Street+No+2+Jaranwala+Punjab+Pakistan&output=embed";

export const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Seven+Seas+Marriage+Hall+Street+No+2+Jaranwala+Punjab+Pakistan";

export const SERVICES = [
  "Bridal Makeup",
  "Party & Event Makeup",
  "Hair Styling",
  "Hair Treatments",
  "Facials & Skin Care",
  "Threading",
  "Waxing",
  "Manicure & Pedicure",
  "Nail Art",
  "Makeup & Beauty Packages",
];