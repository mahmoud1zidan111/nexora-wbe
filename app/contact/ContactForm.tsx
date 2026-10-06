"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

type FormState = "idle" | "loading" | "success" | "error";

const fieldLabelClass =
  "!grid !gap-2.5 !font-[var(--font-mono)] !text-[12px] sm:!text-[13px] md:!text-[14px] !leading-[1.1] !font-bold !tracking-[0.1em] !text-[var(--text)]";

const inputClass =
  "!min-h-[54px] sm:!min-h-[58px] md:!min-h-[62px] !w-full !rounded-[6px] !border !border-transparent !bg-[#08111f] !px-[14px] sm:!px-[18px] md:!px-[20px] !py-[14px] !font-[var(--font-mono)] !text-[13px] sm:!text-[14px] md:!text-[15px] !font-bold !tracking-[0.06em] !text-[var(--text)] placeholder:!text-[var(--faint)] focus:!border-[rgba(105,215,255,.38)] focus:!outline-none focus:!ring-2 focus:!ring-[rgba(105,215,255,.08)]";

const selectClass =
  "!min-h-[54px] sm:!min-h-[58px] md:!min-h-[62px] !w-full !rounded-[6px] !border !border-transparent !bg-[#08111f] !px-[14px] sm:!px-[18px] md:!px-[20px] !py-[14px] !font-[var(--font-mono)] !text-[13px] sm:!text-[14px] md:!text-[15px] !font-bold !tracking-[0.06em] !text-[var(--text)] focus:!border-[rgba(105,215,255,.38)] focus:!outline-none focus:!ring-2 focus:!ring-[rgba(105,215,255,.08)]";

const textareaClass =
  "!min-h-[170px] sm:!min-h-[185px] md:!min-h-[205px] !w-full !resize-y !rounded-[6px] !border !border-transparent !bg-[#08111f] !px-[14px] sm:!px-[18px] md:!px-[20px] !py-[14px] !font-[var(--font-mono)] !text-[13px] sm:!text-[14px] md:!text-[15px] !leading-[1.55] !font-bold !tracking-[0.045em] !text-[var(--text)] placeholder:!text-[var(--faint)] focus:!border-[rgba(105,215,255,.38)] focus:!outline-none focus:!ring-2 focus:!ring-[rgba(105,215,255,.08)]";

export function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    ["name", "email", "service", "budget", "scope"].forEach((field) => {
      if (!String(formData.get(field) || "").trim()) {
        nextErrors[field] = t("Required");
      }
    });

    const email = String(formData.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t("Invalid email");
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setState("error");
      setFeedback("Please complete the required fields and fix any invalid input.");
      return;
    }

    setState("loading");
    setFeedback("");

    try {
      const payload = new FormData();
      payload.set("name", String(formData.get("name") || "").trim());
      payload.set("email", email);
      payload.set("company", String(formData.get("company") || "").trim());
      payload.set("service", String(formData.get("service") || "").trim());
      payload.set("budget", String(formData.get("budget") || "").trim());
      payload.set("scope", String(formData.get("scope") || "").trim());

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ||
            "Something went wrong while sending your message. Please try again later.",
        );
      }

      form.reset();
      setErrors({});
      setState("success");
      setFeedback(
        "Thank you for contacting Nexora. We’ve received your request and will get back to you shortly.",
      );
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong while sending your message. Please try again later.";

      setState("error");
      setFeedback(message);
    }
  }

  return (
    <form
      className="grid w-full min-w-0 grid-cols-1 gap-x-[clamp(16px,2vw,24px)] gap-y-[clamp(16px,2vw,22px)] rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-[clamp(18px,2.2vw,34px)]"
      onSubmit={submit}
      noValidate
    >
      <div className="col-span-full flex min-w-0 items-start justify-between gap-4 border-b border-[var(--line-soft)] pb-4 md:pb-5">
        <span className="min-w-0 font-[var(--font-mono)] text-[11px] font-bold leading-[1.45] tracking-[0.14em] text-[var(--accent-2)] sm:text-[12px] md:text-[13px]">
          {t("INGRESS_FORM // PARAMETERS")}
        </span>
        <span className="shrink-0 text-right font-[var(--font-mono)] text-[10px] font-bold leading-[1.45] tracking-[0.12em] text-[var(--faint)] sm:text-[11px] md:text-[12px]">
          {t("REV 4.2.0 // REQ_DISPATCH")}
        </span>
      </div>

      <label className={`${fieldLabelClass} md:col-span-1`}>
        <span className="flex items-center justify-between gap-3">
          <span className="min-w-0">{t("Full Name")}</span>
          <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
            {t("REQ_ID")} *
          </b>
        </span>
        <input
          name="name"
          placeholder={t("e.g., Alex Vance")}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />
        {errors.name ? (
          <em className="!text-[var(--danger)] !text-[11px] !not-italic">
            {errors.name}
          </em>
        ) : null}
      </label>

      <label className={`${fieldLabelClass} md:col-span-1`}>
        <span className="flex items-center justify-between gap-3">
          <span className="min-w-0">{t("Work Email")}</span>
          <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
            {t("COMM_URI")} *
          </b>
        </span>
        <input
          name="email"
          type="email"
          placeholder={t("alex@enterprise.domain")}
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
        />
        {errors.email ? (
          <em className="!text-[var(--danger)] !text-[11px] !not-italic">
            {errors.email}
          </em>
        ) : null}
      </label>

      <label className={`${fieldLabelClass} col-span-full`}>
        <span className="flex items-center justify-between gap-3">
          <span>{t("Company")}</span>
          <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
            {t("OPTIONAL")}
          </b>
        </span>
        <input
          name="company"
          placeholder={t("e.g., Nexus Data Systems")}
          className={inputClass}
        />
      </label>

      <div className="col-span-full grid grid-cols-1 gap-[clamp(16px,2vw,24px)] md:grid-cols-2">
        <label className={fieldLabelClass}>
          <span className="flex items-center justify-between gap-3">
            <span>{t("Service Interest")}</span>
            <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
              {t("TARGET_SPEC")} *
            </b>
          </span>
          <select
            name="service"
            defaultValue=""
            aria-invalid={Boolean(errors.service)}
            className={selectClass}
          >
            <option value="" disabled>
              {t("Select architecture scope")}
            </option>
            <option value="Professional Websites">
              {t("Professional Websites")}
            </option>
            <option value="Web Applications">{t("Web Applications")}</option>
            <option value="Custom Software">{t("Custom Software")}</option>
            <option value="SaaS Products">{t("SaaS Products")}</option>
          </select>
          {errors.service ? (
            <em className="!text-[var(--danger)] !text-[11px] !not-italic">
              {errors.service}
            </em>
          ) : null}
        </label>

        <label className={fieldLabelClass}>
          <span className="flex items-center justify-between gap-3">
            <span>{t("Budget Range")}</span>
            <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
              {t("ALLOCATION")} *
            </b>
          </span>
          <select
            name="budget"
            defaultValue=""
            aria-invalid={Boolean(errors.budget)}
            className={selectClass}
          >
            <option value="" disabled>
              {t("Select estimated tier")}
            </option>
            <option value="$3k - $8k">{t("$3k - $8k")}</option>
            <option value="$8k - $20k">{t("$8k - $20k")}</option>
            <option value="$20k+">{t("$20k+")}</option>
            <option value="Retainer">{t("Retainer")}</option>
          </select>
          {errors.budget ? (
            <em className="!text-[var(--danger)] !text-[11px] !not-italic">
              {errors.budget}
            </em>
          ) : null}
        </label>
      </div>

      <label className={`${fieldLabelClass} col-span-full`}>
        <span className="flex items-center justify-between gap-3">
          <span className="max-w-[72%] leading-[1.25]">
            {t("Project Scope & Challenges")}
          </span>
          <b className="shrink-0 !font-bold !text-[var(--accent-2)]">
            {t("PAYLOAD")} *
          </b>
        </span>
        <textarea
          name="scope"
          placeholder={t(
            "Describe technical challenges, timeline, or architecture requirements...",
          )}
          aria-invalid={Boolean(errors.scope)}
          className={textareaClass}
        />
        {errors.scope ? (
          <em className="!text-[var(--danger)] !text-[11px] !not-italic">
            {errors.scope}
          </em>
        ) : null}
      </label>

      <div className="col-span-full grid grid-cols-1 gap-3 border border-[var(--line-soft)] bg-[#08111f] px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[minmax(145px,auto)_1fr] md:items-center md:gap-x-7 md:px-6 md:py-6">
        <strong className="font-[var(--font-mono)] text-[11px] font-bold leading-[1.4] tracking-[0.12em] text-[var(--accent-2)] sm:text-[12px]">
          {t("SECURE_DISPATCH")}
        </strong>
        <span className="min-w-0 text-[14px] leading-[1.65] text-[var(--text)] sm:text-[15px] md:text-[16px]">
          {t(
            "Direct end-to-end encrypted packet transmission to Nexora Systems lead engineering.",
          )}
        </span>
      </div>

      <div className="col-span-full flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
        <span className="font-[var(--font-mono)] text-[10px] font-bold leading-[1.4] tracking-[0.12em] text-[var(--faint)] sm:text-[11px]">
          {t("ENCRYPTION: AES-GCM 256-BIT")}
        </span>
        <Button
          type="submit"
          disabled={state === "loading"}
          className="w-full sm:w-auto auto !rounded-[6px] !bg-[var(--accent-2)] !px-4 !py-3.5 !font-[var(--font-mono)] !text-[12px] !font-bold !leading-[1.45] !tracking-[0.11em] !text-[#08111f] sm:!px-5 sm:!py-4 sm:!text-[13px] md:!text-[14px] lg:!px-6 lg:!py-4"
        >
          {state === "loading"
            ? t("Dispatching...")
            : state === "success"
              ? t("Request Received")
              : t("Start a Project")}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="align-middle rtl-flip"
          />
        </Button>
      </div>

      {state === "success" || state === "error" ? (
        <p
          className={
            state === "success"
              ? "col-span-full !mb-0 rounded-[6px] border border-[rgba(110,216,255,.18)] bg-[rgba(110,216,255,.06)] px-4 py-3 !text-[13px] !leading-[1.6] !text-[var(--ok)]"
              : "col-span-full !mb-0 rounded-[6px] border border-[rgba(255,114,114,.2)] bg-[rgba(255,114,114,.06)] px-4 py-3 !text-[13px] !leading-[1.6] !text-[var(--danger)]"
          }
          role={state === "success" ? "status" : "alert"}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
