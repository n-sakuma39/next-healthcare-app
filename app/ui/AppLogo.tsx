import { lusitana } from '@/app/ui/fonts';

export default function AppLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <p className="text-[30px]">健康管理アプリ</p>
    </div>
  );
}
