'use client';

import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon, AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Button } from '../common/Button';
import { useFormStatus } from 'react-dom';

export default function LoginForm() {
  return (
    <form>
      <div className="flex-1 rounded-lg bg-gray-50 px-10 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-5 text-1xl`}>
          以下のフォームからログインしてください。
        </h1>
        <div className="w-full">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <LoginButton />
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-[130px]" aria-disabled={pending}>
      ログイン <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}