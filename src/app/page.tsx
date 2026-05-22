import { BetaSignupForm } from "./BetaSignupForm";

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

const empathyItems = [
  {
    title: "返信が来ない理由を考え続けてしまう",
    text: "画面を閉じても、また開いてしまう夜があります。",
  },
  {
    title: "短く送るつもりが、長文になってしまう",
    text: "伝えたいことほど、言葉が強く見えてしまうことがあります。",
  },
  {
    title: "送ったあと、急に不安になる",
    text: "送る前に一呼吸あれば、少し違ったかもしれないと思う瞬間に。",
  },
];

const safetyItems = [
  "下書きとして見直せます",
  "返信を急がせる設計ではありません",
  "落ち着いて判断する時間を作ります",
];

const howItWorksItems = [
  {
    phase: "01",
    title: "送ろうとしている文章を入れる",
    description: "送信前のLINEやDMを、そのまま貼り付けます。",
  },
  {
    phase: "02",
    title: "感情と文章を整理する",
    description: "強くなりすぎている部分や、焦りを一緒に整理します。",
  },
  {
    phase: "03",
    title: "落ち着いてから見直す",
    description:
      "そのまま送るのではなく、一度ワンクッション置ける状態を作ります。",
  },
];

const reassuranceItems = [
  "入力内容はそのまま相手に送信されません",
  "まずは下書きとして整理します",
  "β版公開時に案内します",
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-zinc-950">
      <section className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[1fr_440px] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col items-start">
          <p className="mb-5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
            追撃LINE防止AI
          </p>

          <h1 className="max-w-2xl text-[clamp(1.75rem,8vw,3.8rem)] font-semibold leading-[1.06] text-zinc-950 sm:text-[3.2rem] lg:text-[3.8rem]">
            <span className="block whitespace-nowrap">そのLINEを送る前に、</span>
            <span className="mt-1 block whitespace-nowrap">一度だけ整える。</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-8 text-zinc-600 sm:mt-8 sm:text-lg">
            返信が来ない不安や焦りで、感情のまま送ってしまいそうなときに。
            ReplyMateは、言葉と気持ちを下書きとして整えるAIです。
          </p>

          <div className="mt-7 flex w-full flex-col items-start gap-3 sm:mt-8 sm:w-auto">
            <a
              href="#beta"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-800 px-8 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 sm:w-auto"
            >
              送る前に整理する
            </a>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
              {reassuranceItems.slice(0, 2).map((item) => (
                <span
                  className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-0">
          <div className="mx-auto w-full max-w-sm rounded-[2.25rem] border border-slate-200 bg-slate-100/70 p-2 shadow-sm">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-zinc-200" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">
                    ReplyMate
                  </p>
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
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-800">
                    なんで返信くれないの？
                    <br />
                    もうどうでもいいってこと？
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-slate-500">
                      整理メモ
                    </p>
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-slate-500">
                      下書きとして整理
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-700">
                    返信が来ないと、いろいろ考えてしまいますよね。まずは送らずに、言葉の強さだけ一緒に見直してみましょう。
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium text-zinc-500">
                    送る前の選択肢
                  </p>
                  <ul className="space-y-2">
                    {previewOptions.map((option) => (
                      <li
                        className={
                          option.recommended
                            ? "flex gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3 text-sm leading-6 text-slate-900"
                            : "flex gap-2 rounded-2xl border border-zinc-200 bg-white p-3 text-sm leading-6 text-zinc-700"
                        }
                        key={option.text}
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

                <p className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs leading-5 text-slate-500">
                  送信はまだされません。まず下書きとして整理します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium leading-6 text-slate-500">
              送る前の違和感
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
              <span className="block">送ったあとに、</span>
              <span className="mt-1 block">後悔したくないから。</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
              返信が遅いだけかもしれない。でも、何度も画面を見てしまう。
              「もう一通だけ」と思ったあとで、少し重かったかもと不安になる。
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {empathyItems.map((item) => (
              <article
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                key={item.title}
              >
                <p className="text-base font-semibold leading-7 text-zinc-900">
                  {item.title}
                </p>
                <p className="mt-3 text-pretty text-sm leading-7 text-zinc-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-9 max-w-2xl text-pretty text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
            そんな瞬間に、すぐ送る前のワンクッションを置けるようにします。
          </p>
        </div>
      </section>

      <section className="bg-stone-50 px-5 py-18 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium leading-6 text-slate-500">
              安心設計
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
              <span className="block">焦っているときほど、</span>
              <span className="mt-1 block">下書きに戻れるように。</span>
            </h2>
            <div className="mt-5 space-y-4 text-pretty text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
              <p>
                ReplyMateは、返信するかどうかを急かすためのものではありません。
              </p>
              <p>
                言葉を少し離して見られるように、送る前の余白を作ります。
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
            <ul className="space-y-3">
              {safetyItems.map((item) => (
                <li
                  className="flex items-start gap-3 rounded-2xl bg-stone-50 px-4 py-3 text-sm leading-6 text-zinc-700"
                  key={item}
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium leading-6 text-slate-500">
              使い方
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
              <span className="block">送る前に、</span>
              <span className="mt-1 block">少しだけ間を置く。</span>
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {howItWorksItems.map((item) => (
              <article
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                key={item.phase}
              >
                <p className="text-xs font-semibold leading-5 text-slate-400">
                  {item.phase}
                </p>
                <h3 className="mt-4 text-base font-semibold leading-7 text-zinc-900 sm:text-lg sm:leading-8">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-5 py-18 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-medium leading-6 text-slate-500">
              ミニ体験
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
              <span className="block">少し整えるだけで、</span>
              <span className="mt-1 block">言葉は軽くなる。</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
              ReplyMateの価値は、正解を出すことではありません。送る前に、
              いまの言葉を一度下書きとして置き直せることです。
            </p>
            <div className="mt-7 flex w-full flex-col items-start gap-3 sm:w-auto">
              <a
                href="#beta"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-800 px-8 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 sm:w-auto"
              >
                送る前に整理する
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                未送信
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                下書き
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                自動送信なし
              </span>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-red-100 bg-red-50/40 p-5">
                <p className="text-xs font-medium leading-5 text-zinc-500">
                  入力前
                </p>
                <p className="mt-3 text-pretty text-lg font-medium leading-8 text-zinc-900">
                  なんで返信くれないの？
                  <br />
                  もうどうでもいいってこと？
                </p>
              </div>

              <div className="flex justify-center" aria-hidden="true">
                <div className="h-8 w-px bg-slate-200" />
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-medium leading-5 text-zinc-500">
                    整理後
                  </p>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-emerald-700">
                    下書きに保存
                  </span>
                </div>
                <p className="mt-3 text-pretty text-lg font-medium leading-8 text-zinc-900">
                  少し気になってたので、
                  <br />
                  また落ち着いたら話せたら嬉しいです。
                </p>
              </div>
            </div>

            <p className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-zinc-600">
              まずは下書きとして、言葉だけを見直せます。
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-5 py-18 sm:px-8 sm:py-24 lg:px-10"
        id="beta"
      >
        <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-stone-50 p-5 shadow-sm sm:p-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-sm font-medium leading-6 text-slate-500">
              β版受付
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
              <span className="block">送る前に、</span>
              <span className="mt-1 block">一度だけ整える。</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
              返信が来ない不安や、感情のまま送ってしまいそうな瞬間に。
              まずは下書きとして、言葉と気持ちを整理してみてください。
            </p>

            <div className="mt-7 grid gap-2 text-sm leading-6 text-zinc-600">
              {reassuranceItems.map((item) => (
                <div className="flex items-start gap-2.5" key={item}>
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:mt-0">
            <div className="mb-5">
              <h2 className="text-balance text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
                必要な人へ、静かに届けるために。
              </h2>
              <p className="mt-4 text-pretty text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
                使いたい場面を教えてください。β版公開時に、案内をお送りします。
              </p>
            </div>

            <BetaSignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
