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

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms - Hotelwaze</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageWrapper>

                            </PageWrapper>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default Terms;
