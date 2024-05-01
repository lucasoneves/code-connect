import { Aside } from '@/components/Aside';
import './globals.css'
import { Work_Sans } from 'next/font/google';

export const metadata = {
  title: "Code Connect",
  description: "A socal network for devs",
};

const worksans = Work_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={worksans.className}>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
