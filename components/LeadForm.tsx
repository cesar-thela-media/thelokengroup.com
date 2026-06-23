"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface LeadFormProps {
  title?: string;
  titleRed?: string;
  subtitle?: string;
  submitLabel?: string;
  showMessage?: boolean;
  showNeedToSell?: boolean;
  compact?: boolean;
  source?: string;
}

const inputCls =
  "w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#BE1E2D] transition-colors";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm({
  title,
  titleRed,
  subtitle,
  submitLabel = "Submit",
  showMessage = false,
  showNeedToSell = false,
  compact = false,
  source = "website",
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      source,
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      needToSell: fd.get("needToSell") === "on",
      message: fd.get("message") ?? "",
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "",
    };

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[LeadForm] webhook error:", err);
      setErrorMsg("Something went wrong. Please call us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[#BE1E2D] flex items-center justify-center mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l5 5 7-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif font-bold text-xl text-[#1A1A1A] mb-2">
          We&apos;ll be in touch soon!
        </h3>
        <p className="font-sans text-sm text-gray-500">
          A specialist will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {(title || titleRed) && (
        <div className="mb-1">
          {title && (
            <h3 className="font-serif font-bold text-2xl text-[#1A1A1A] leading-tight">{title}</h3>
          )}
          {titleRed && (
            <h3 className="font-serif font-bold text-2xl text-[#BE1E2D] leading-tight">{titleRed}</h3>
          )}
        </div>
      )}
      {subtitle && (
        <p className="font-sans text-sm text-gray-500 mb-6 mt-2">{subtitle}</p>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className={`grid gap-3 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
          <input name="firstName" type="text" placeholder="First Name *" required className={inputCls} />
          <input name="lastName" type="text" placeholder="Last Name *" required className={inputCls} />
        </div>
        <input name="email" type="email" placeholder="Email Address *" required className={inputCls} />
        <input name="phone" type="tel" placeholder="Phone Number" className={inputCls} />
        {showNeedToSell && (
          <label className="flex items-center gap-2 cursor-pointer font-sans text-sm text-gray-600 py-1">
            <input name="needToSell" type="checkbox" className="accent-[#BE1E2D] w-4 h-4" />
            I also need to sell my current home
          </label>
        )}
        {showMessage && (
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows={4}
            className={inputCls + " resize-none"}
          />
        )}

        {status === "error" && (
          <div className="flex items-center justify-between bg-red-50 border border-red-200 px-4 py-3">
            <p className="font-sans text-xs text-red-700">{errorMsg}</p>
            <a href={BRAND.phoneHref} className="font-sans text-xs font-semibold text-[#BE1E2D] whitespace-nowrap ml-3">
              {BRAND.phone}
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#BE1E2D] hover:bg-[#a01825] disabled:opacity-70 disabled:cursor-not-allowed text-white font-sans font-semibold text-sm px-8 py-4 transition-colors w-full mt-1 tracking-wide flex items-center justify-center gap-2"
        >
          {status === "loading" && <Loader2 size={15} className="animate-spin" />}
          {status === "loading" ? "Sending…" : submitLabel}
        </button>
        <p className="font-sans text-[11px] text-gray-400 text-center leading-snug">
          By submitting, you agree to be contacted regarding your real estate needs.
        </p>
      </form>
    </div>
  );
}
