import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact Us | The Loken Group",
  description: "Get in touch with The Loken Group — Houston's #1 real estate team.",
};

const contactInfo = [
  {
    icon: <MapPin size={16} className="text-[#BE1E2D] shrink-0 mt-0.5" />,
    label: "Office Address",
    value: "19708 Northwest Freeway, Suite 2800\nHouston, Texas 77065",
  },
  {
    icon: <Phone size={16} className="text-[#BE1E2D] shrink-0" />,
    label: "Phone",
    value: "(281) 861-4624",
    href: "tel:2818614624",
  },
  {
    icon: <Mail size={16} className="text-[#BE1E2D] shrink-0" />,
    label: "Email",
    value: "info@thelokengroup.com",
    href: "mailto:info@thelokengroup.com",
  },
  {
    icon: <Clock size={16} className="text-[#BE1E2D] shrink-0" />,
    label: "Office Hours",
    value: "Mon – Fri: 8am – 6pm\nSat: 9am – 4pm",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="Our team is available Monday through Saturday to answer your questions and help you take the next step."
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — wider col */}
          <div className="lg:col-span-3">
            <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] mb-1">Send Us a Message</h2>
            <div className="w-8 h-[2px] bg-[#BE1E2D] mb-8" />
            <LeadForm
              source="contact-page"
              submitLabel="Send Message"
              showMessage
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] mb-1">Office Information</h2>
            <div className="w-8 h-[2px] bg-[#BE1E2D] mb-8" />

            <div className="flex flex-col gap-7">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-sans text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-sm text-[#1A1A1A] hover:text-[#BE1E2D] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-[#1A1A1A] whitespace-pre-line leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 w-full aspect-[4/3] bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-2">
              <MapPin size={24} className="text-gray-300" />
              <p className="font-sans text-xs text-gray-400">Houston, TX</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
