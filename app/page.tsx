import Link from 'next/link';
import AppLogo from '@/app/ui/AppLogo';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <AppLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 w-full md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>日々健康を管理するためのアプリです。</strong>
          </p>
          <p>
            テレワークなどで働き方が変わり、家にいることが増えました。
            <br />
            なるべく休みの日や時間がある時は、外に出て体を動かすようにしてはいますが、
            <br />
            歳を取るにつれ、健康の衰えは、避けては通れません。
            <br />
            このアプリを通じて、日々の体重管理を目的としたアプリになります。
          </p>
          <div>
            このアプリは以下の機能を持っています。
            <li>
              <strong>認証機能</strong>：各ユーザにパーソナライズされています。
            </li>
            <li>
              <strong>カレンダー機能</strong>：毎日の体重を数値で管理することができます。
            </li>
            <li>
              <strong>グラフ機能</strong>：毎日の体重の増減をグラフで視覚的に見ることができます。
            </li>
            <li>
              <strong>チャット機能</strong>：優れたAIによる対話を行うことができます。
            </li>
          </div>

          <Link
            href="/signin"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>サインイン</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
