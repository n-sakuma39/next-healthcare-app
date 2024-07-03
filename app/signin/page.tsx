import { Metadata } from 'next';
import SignInForm from '@/app/ui/signin/SignInForm';
import AppLogo from '@/app/ui/AppLogo';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サインイン',
};

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-500 p-5 md:h-28"
          href="/"
        >
          <div className="w-auto text-white">
            <AppLogo />
          </div>
        </Link>
        <SignInForm />
      </div>
    </main>
  );
}
