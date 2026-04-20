import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: { default: 'FALAQ — Fine Dining, Moulvibazar', template: '%s — FALAQ' },
  description: 'Contemporary fine dining in the heart of Moulvibazar. Reserve your table or order via Duare.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
