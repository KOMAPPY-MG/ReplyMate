"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const intentOptions = [
  "返信が来なくて不安なとき",
  "感情のまま送ってしまいそうなとき",
  "長文LINEを書いてしまったとき",
  "友達に相談する前に整理したいとき",
];

export function BetaSignupForm() {
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState(intentOptions[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("メールアドレスを入力してください。");
      return;
    }

    if (!event.currentTarget.checkValidity()) {
      setError("メールアドレスの形式を確認してください。");
      return;
    }

    setError("");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6"
        role="status"
        aria-live="polite"
      >
        <p className="text-base font-semibold leading-7 text-zinc-950">
          登録ありがとうございます
        </p>
        <p className="mt-2 text-pretty text-sm leading-7 text-zinc-600">
          β版公開時に案内します。ここでの内容は、受付の参考として扱います。
        </p>
      </div>
    );
  }

  return (
    <form
      className="border-t border-slate-100 pt-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label
          className="text-sm font-medium leading-6 text-zinc-900"
          htmlFor="beta-email"
        >
          メールアドレス
        </label>
        <input
          id="beta-email"
          name="email"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 text-base text-zinc-950 outline-none transition-colors duration-150 placeholder:text-zinc-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
          aria-describedby={
            error ? "beta-email-error beta-form-help" : "beta-form-help"
          }
          aria-invalid={Boolean(error)}
        />
        {error ? (
          <p
            className="mt-2 text-sm leading-6 text-red-600"
            id="beta-email-error"
            aria-live="polite"
          >
            {error}
          </p>
        ) : null}
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium leading-6 text-zinc-900">
          今使いたい場面
        </legend>
        <div className="mt-3 space-y-2.5">
          {intentOptions.map((option) => (
            <label
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-transparent bg-slate-50/80 px-3 py-2.5 text-sm leading-6 text-zinc-700 transition-colors duration-150 has-[:checked]:border-slate-200 has-[:checked]:bg-white"
              key={option}
            >
              <input
                className="mt-1 size-4 shrink-0 accent-slate-700"
                type="radio"
                name="intent"
                value={option}
                checked={intent === option}
                onChange={(event) => setIntent(event.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label
          className="text-sm font-medium leading-6 text-zinc-900"
          htmlFor="beta-note"
        >
          今ほしい機能や悩み
          <span className="ml-2 text-xs font-normal text-zinc-400">任意</span>
        </label>
        <textarea
          id="beta-note"
          name="note"
          className="mt-2 min-h-24 w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-base leading-7 text-zinc-950 outline-none transition-colors duration-150 placeholder:text-zinc-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="例: 送る前に強すぎる言葉だけ教えてほしい"
        />
      </div>

      <button
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-800 px-8 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
        type="submit"
      >
        β版の案内を受け取る
      </button>

      <p
        className="mt-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-pretty text-xs leading-5 text-zinc-500"
        id="beta-form-help"
      >
        入力内容は受付の参考にします。相手に送信されることはありません。
      </p>
    </form>
  );
}
