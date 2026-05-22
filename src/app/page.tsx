const previewOptions = [
  {
    text: "今日は送らず、明日もう一度考える",
    recommended: true,
  },
  {
    text: "短く、相手を責めない言葉に整える",
    recommended: false,
  },
  {
    text: "今は下書きに残して、落ち着いてから見直す",
    recommended: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-zinc-950">
      <section className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col items-start">
          <p className="mb-5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
            追撃LINE防止AI
          </p>

          <h1 className="max-w-2xl text-[clamp(1.6rem,8vw,3.8rem)] font-semibold leading-[1.06] text-zinc-950 sm:text-[3.2rem] lg:text-[3.8rem]">
            <span className="block whitespace-nowrap">そのLINEを送る前に、</span>
            <span className="mt-1 block whitespace-nowrap">一度だけ整える。</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-8 text-zinc-600 sm:mt-8 sm:text-lg">
            ReplyMateは、返信が来ない不安や焦りで追撃LINEを送りそうなとき、
            感情と文章を整理するためのAIです。
          </p>

          <div className="mt-7 flex w-full flex-col items-start gap-3 sm:mt-8 sm:w-auto">
            <a
              href="#beta"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-800 px-8 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 sm:w-auto"
            >
              β版を試す
            </a>
            <p className="text-sm leading-6 text-zinc-500">
              登録無料。公開時に優先案内します。
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-0">
          <div className="mx-auto w-full max-w-sm rounded-[2.25rem] border border-slate-200 bg-slate-100/70 p-2 shadow-sm">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4">
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-zinc-200" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">ReplyMate</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    送る前の文章チェック
                  </p>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  まだ未送信
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-xs font-medium text-zinc-500">
                    今送りたいLINE
                  </p>
                  <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-800">
                    なんで返信くれないの？
                    <br />
                    もうどうでもいいってこと？
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-slate-500">
                      整理メモ
                    </p>
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-slate-500">
                      下書きとして整理
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-700">
                    今は、不安と焦りが少し強い状態です。まずは送らずに、言葉の強さだけ一緒に見直しましょう。
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium text-zinc-500">
                    送る前の選択肢
                  </p>
                  <ul className="space-y-2">
                    {previewOptions.map((option) => (
                      <li
                        key={option.text}
                        className={
                          option.recommended
                            ? "flex gap-2 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-sm leading-6 text-slate-900"
                            : "flex gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm leading-6 text-zinc-700"
                        }
                      >
                        <span
                          className={
                            option.recommended
                              ? "mt-2 size-1.5 shrink-0 rounded-full bg-emerald-600"
                              : "mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400"
                          }
                        />
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs leading-5 text-slate-500">
                  送信はまだされません。まず下書きとして整理します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
