import { Aside } from '@/components/Aside';
import { Work_Sans } from 'next/font/google';
import './globals.css'
import { SearchSidebar } from '@/components/SearchBar';

export const metadata = {
  title: "Code Connect",
  description: "A social network for devs",
};

const worksans = Work_Sans({ subsets: ['latin'], weight: ["400", "600"]})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={worksans.className}>
        <div className='app-container'>
          <Aside />
          <div className='app-content'>
            <SearchSidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
