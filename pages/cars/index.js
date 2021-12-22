import Head from 'next/head';
import styled from 'styled-components';
import { Column, Container, Row } from '../../styles/Grid.styled';
import breakpoints from '../../lib/breakpoints';
import HotelSearch from '../../components/HotelSearch';
import HotelCard from '../../components/HotelCard';
import grids from '../../lib/grids';
import { useRef, useState, useCallback, useEffect } from 'react';
import SkeletonHotelCard from '../../components/SkeletonLoaders/SkeletonHotelCard';
import { useFetchContents } from '../../hooks';
import CarTypeCard from '../../components/CarTypeCard';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const PageHeader = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 1.25rem;
`;

const CarTypeResults = styled.div``;

const CardColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.six}
  }
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.four}
  }
`;

const Cars = () => {
    const [offset, setOffset] = useState(0);
    const [args, setArgs] = useState({
        country: 'Philippines',
        limit: 100,
        status: 'active'
    });
    const skeletonCardCount = [...Array(12).keys()];
    const {
        list,
        loading,
        error,
        hasMore,
    } = useFetchContents('car-rental-types', args, offset);

    const handleQuery = (event) => {
        setArgs({
            limit: 100,
            status: 'active'
        })
    }

    const observer = useRef();

    const lastCarTypeElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 100)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const listCarTypes = list.map((carType, index) => {
            if (list.length === index + 1) {
                return (
                    <CardColumn ref={lastCarTypeElementRef} key={carType.id}>
                        <CarTypeCard
                            carType={carType}
                        />
                    </CardColumn>
                )
            } else {
                return (
                    <CardColumn key={carType.id}>
                        <CarTypeCard
                            carType={carType}
                        />
                    </CardColumn>
                )
            }
        }
    );

    const listSkeletonCards = skeletonCardCount.map((skeletonCard) =>
        <CardColumn key={skeletonCard + 1}>
            <SkeletonHotelCard />
        </CardColumn>
    );

    return (
        <>
            <Head>
                <title>Cars - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageHeader>
                                <Title>Cars</Title>
                            </PageHeader>
                        </Column>
                    </Row>
                </Container>
                <CarTypeResults>
                    <Container>
                        <Row>
                            {listCarTypes}
                        </Row>
                    </Container>
                </CarTypeResults>
                { loading && (
                    <CarTypeResults>
                        <Container>
                            <Row>
                                {listSkeletonCards}
                            </Row>
                        </Container>
                    </CarTypeResults>
                )}
                <div>{error && 'Error'}</div>
            </Wrapper>
        </>
    );
}

export default Cars;