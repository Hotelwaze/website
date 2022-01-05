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
import { useRouter } from 'next/router';

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
  font-size: 1.25rem;

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.125rem;
  }
`;

const HotelResults = styled.div``;

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

const Hotels = () => {
    const [offset, setOffset] = useState(0);
    const [args, setArgs] = useState({
        CountryId: 175,
        limit: 100,
        status: 'active'
    });
    const skeletonCardCount = [...Array(12).keys()];
    const {
        list,
        loading,
        error,
        hasMore,
    } = useFetchContents('hotels', args, offset);

    const handleQuery = (event) => {
        const args = {
            limit: 100,
            status: 'active'
        };

        if (event.name) {
            args.name = event.name;
        }

        if (event.CountryId) {
            args.CountryId = event.CountryId;
        }

        if (event.StateId) {
            args.StateId = event.StateId;
        }

        if (event.CityId) {
            args.CityId = event.CityId;
        }

        setArgs(args);
    }

    const observer = useRef();

    const lastHotelElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 100)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const listHotels = list.map((hotel, index) => {
            if (list.length === index + 1) {
                return (
                    <CardColumn ref={lastHotelElementRef} key={hotel.id}>
                        <HotelCard
                            hotel={hotel}
                        />
                    </CardColumn>
                )
            } else {
                return (
                    <CardColumn key={hotel.id}>
                        <HotelCard
                            hotel={hotel}
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
                <title>Hotels Search - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageHeader>
                                <Title>Hotels Search</Title>
                                <Description>Hotelwaze is your one stop destination for hotel search, helping you easily find a hotel near your current location or for your next trip. Search by city, country, hotel name, or map for hotels in more than 90 countries around the world.</Description>
                            </PageHeader>
                            <HotelSearch initialCountryId="175" initialCountryName="Philippines" handleQuery={handleQuery} />
                        </Column>
                    </Row>
                </Container>
                <HotelResults>
                    <Container>
                        <Row>
                            {listHotels}
                        </Row>
                    </Container>
                </HotelResults>
                { loading && (
                    <HotelResults>
                        <Container>
                            <Row>
                                {listSkeletonCards}
                            </Row>
                        </Container>
                    </HotelResults>
                )}
                <div>{error && 'Error'}</div>
            </Wrapper>
        </>
    );
}

export default Hotels;