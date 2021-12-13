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

const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageWrapper>
                                <h1>Car Rental Partners Privacy Policy</h1>
                            </PageWrapper>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default Privacy;
