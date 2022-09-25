import styled from 'styled-components';
import Head from 'next/head';
import { Column, Container, Row } from '../../styles/Grid.styled';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const PageWrapper = styled.div``;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 48px;
`;

const About = () => {
    return (
        <>
            <Head>
                <title>About - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageWrapper>
                                <PageTitle>About Hotelwaze</PageTitle>
                                <p>Hotelwaze.com is your most reliable directory of hotels. We have verified the official hotel websites which are regularly checked and updated. We assure clients to receive the most affordable and reasonable price available straight from hotels’ page.</p>
                                <h2>Mission</h2>
                                <p>To be the top directory of hotel websites where clients can find the most affordable and reasonable price available straight from hotels’ page.</p>
                                <h2>Vision</h2>
                                <p>Provide a stress free and hassle free link from clients to partnered hotels’ official websites through easier access to information, user-friendly mobile app, and quality customer service.</p>
                                <h2>Goals</h2>
                                <h3>The company aims:</h3>
                                <p>To direct customers to hotels’ website and provide them with the best available rate and value for money;</p>
                                <p>To offer hassle free transaction, support, endorsement, and promotions to the partnered hotels while creating new opportunities and business ventures; and</p>
                                <p>To advocate the tourism industry by sponsoring, organizing, and publishing events and campaigns.</p>
                                <h2>Core Values</h2>
                                <h3>Accessibility</h3>
                                <p>We can assure clients to experience easy access to reliable information through our company website and user-friendly mobile app available for android and ios users. We guarantee to offer the latest deals and best available price straight from our partnered hotels’ page.</p>
                                <h3>Integrity</h3>
                                <p>We verify the official hotel websites to give clients the comfort and security when making bookings and reservations. We also certify that the images we advertise are legit and realistic. We affirm that information are regularly updated.</p>
                                <h3>Optimistic</h3>
                                <p>We focus on the solutions together, thus we believe that everything could be possible. We take pride in our friendly, upbeat, innovative, and resourceful attitude which we apply when we connect with our clients to achieve our common purpose.</p>
                                <h3>Excellence</h3>
                                <p>We always intend to give quality service to reach our clients’ satisfaction. We exert our fullest effort because we value time and we respect commitment. Lastly, we give importance to excellence, hence we keep striving to be more competent in this industry.</p>
                            </PageWrapper>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default About;
