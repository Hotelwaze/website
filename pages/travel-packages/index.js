import styled from 'styled-components';
import { useRef, useState, useCallback } from 'react';
import Head from 'next/head';
import breakpoints from '../../lib/breakpoints';
import { Column, Container, Row } from '../../styles/Grid.styled';
import grids from '../../lib/grids';
import TravelPackageCard from '../../components/TravelPackageCard';
import { useFetchContents } from '../../hooks';
import HotelCard from '../../components/HotelCard';
import SkeletonHotelCard from '../../components/SkeletonLoaders/SkeletonHotelCard';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const PageHeader = styled.div``;

const Title = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
  margin-bottom: 12px;

  @media only screen and ${breakpoints.device.lg} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.125rem;
  }
`;

const TravelPackagesResults = styled.div``;

const CardColumn = styled(Column)`
  @media only screen and ${breakpoints.device.sm} {
    ${grids.col.six}
  }
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.four}
  }
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.three}
  }
`;

const TravelPackages = () => {
    const [offset, setOffset] = useState(0);
    const [args, setArgs] = useState({
        limit: 100,
        status: 'active'
    });
    const skeletonCardCount = [...Array(12).keys()];
    const {
        list,
        loading,
        error,
        hasMore,
    } = useFetchContents('travel-packages', args, offset);

    const observer = useRef();

    const lastPackageElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 100)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const listPackages = list.map((travelPackage, index) => {
            if (list.length === index + 1) {
                return (
                    <CardColumn ref={lastPackageElementRef()} key={travelPackage.id}>
                        <TravelPackageCard
                            travelPackage={travelPackage}
                        />
                    </CardColumn>
                )
            } else {
                return (
                    <CardColumn key={travelPackage.id}>
                        <TravelPackageCard
                            travelPackage={travelPackage}
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
                <title>Travel Packages - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageHeader>
                                <Title>Travel Packages</Title>
                            </PageHeader>
                        </Column>
                    </Row>
                </Container>
                <TravelPackagesResults>
                    <Container>
                        <Row>
                            {listPackages}
                        </Row>
                    </Container>
                </TravelPackagesResults>
                { loading && (
                    <TravelPackagesResults>
                        <Container>
                            <Row>
                                {listSkeletonCards}
                            </Row>
                        </Container>
                    </TravelPackagesResults>
                )}
                <div>{error && 'Error'}</div>
            </Wrapper>
        </>
    )
}

export default TravelPackages;
