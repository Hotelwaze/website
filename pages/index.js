import Head from 'next/head';
import HomeBanner from '../components/Home/Banner';
import AppSection from '../components/Home/AppSection';
import CarSection from '../components/Home/CarSection';
import HotelSection from '../components/Home/HotelSection';

const Home = () => {
    return (
        <>
            <Head>
                <title>Hotelwaze</title>
            </Head>
            <HomeBanner/>
            <AppSection/>
            <CarSection/>
            <HotelSection />
        </>
    );
}

export default Home;
