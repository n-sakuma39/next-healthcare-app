import { Inter as InterFont, Lusitana as LusitanaFont } from 'next/font/google';

export const inter = InterFont({ subsets: ['latin'] });

export const lusitana = LusitanaFont({
  weight: ['400', '700'],
  subsets: ['latin'],
});
