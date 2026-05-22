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
      <section className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col items-start">
          <p className="mb-5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600">
            追撃LINE防止AI
          </p>

          <h1 className="max-w-2xl text-balance text-[2.75rem] font-semibold leading-[1.08] text-zinc-950 sm:text-[3.4rem] lg:text-[4rem]">
            そのLINEを送る前に、
            <br />
            一度だけ整える。
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-base leading-8 text-zinc-600 sm:mt-8 sm:text-lg">
            ReplyMateは、返信が来ない不安や焦りで追撃LINEを送りそうなとき、
            感情と文章を整理するためのAIです。
          </p>

          <div className="mt-8 flex w-full flex-col items-start gap-3 sm:w-auto">
            <a
              href="#beta"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-zinc-950 px-8 text-base font-semibold text-white transition-colors duration-150 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 sm:w-auto"
            >
              β版を試す
            </a>
            <p className="text-sm leading-6 text-zinc-500">
              登録無料。公開時に優先案内します。
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="mx-auto w-full max-w-sm rounded-[2.25rem] border border-zinc-200 bg-zinc-100/70 p-2 shadow-sm">
            <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-4">
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-zinc-200" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">ReplyMate</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    送る前の文章チェック
                  </p>
                </div>
                <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-500">
                  未送信
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

                <div className="rounded-lg border border-zinc-200 p-4">
                  <p className="mb-2 text-xs font-medium text-zinc-500">
                    整理メモ
                  </p>
                  <p className="text-sm leading-7 text-zinc-700">
                    今は、不安と焦りが少し強い状態です。このまま送ると、相手を責める印象になるかもしれません。
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
                            ? "flex gap-2 rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-sm leading-6 text-zinc-900"
                            : "flex gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm leading-6 text-zinc-700"
                        }
                      >
                        <span
                          className={
                            option.recommended
                              ? "mt-2 size-1.5 shrink-0 rounded-full bg-zinc-900"
                              : "mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400"
                          }
                        />
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="rounded-lg bg-zinc-50 px-3 py-2 text-xs leading-5 text-zinc-500">
                  ここで入力した内容が、そのまま送信されることはありません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
