import Head from 'next/head';
import HomeBanner from '../components/Home/Banner';
import AppSection from '../components/Home/AppSection';
import CarSection from '../components/Home/CarSection';
import HotelSection from '../components/Home/HotelSection';

export default function Home() {
  return (
      <>
        <Head>
          <title>Hotelwaze</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <HomeBanner />
          <AppSection />
          <CarSection />
          <HotelSection />
      </>
  );
}
