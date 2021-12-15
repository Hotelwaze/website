import styled from 'styled-components';
import Head from 'next/head';
import { Column, Container, Row } from '../../styles/Grid.styled';
import { useRouter } from 'next/router';
import Link from 'next/link';
import breakpoints from '../../lib/breakpoints';
import grids from '../../lib/grids';
import { useEffect, useState } from 'react';
import { faGlobe, faMapMarkerAlt, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import httpService from '../../services/http';
import axios from 'axios';
import Map from '../../components/Map';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const HotelDetails = styled.div`
  margin-bottom: 24px;
`;

const HotelName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 12px;

  @media only screen and ${breakpoints.device.md} {
    font-size: 2rem;
  }
  
`;

const DetailRow = styled.div`
 display: flex;
  width: 100%;
  margin-bottom: 8px;
`;

const DetailsColumn = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
`;

const Detail = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 8px;
  
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.bodyColor}
  }

  & a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.primaryColor};
  }
`;

const MapWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  background: #FFFFFF;
  margin-bottom: 48px;
  height: 200px;

  @media only screen and ${breakpoints.device.md} {
    height: 390px;
  }
  
`;

const DescriptionWrapper = styled.div`
  font-size: 1rem;
`;

const Hotel = () => {
    const [hotel, setHotel] = useState(null);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const result = await httpService.getContent('hotel',{
                    status: 'active',
                    slug: router.query.slug
                });
                if (result.status === 200) {
                    setHotel(result.data.data);
                    return;
                }
                throw new Error("Failed to fetch countries");

            } catch (error) {
                if(axios.isCancel(error)){
                    console.log('Data fetching cancelled');
                }else{
                    console.log(error);
                }
            }
        }
        // once you have the slug, call `fetchData`
        if (slug) {
            fetchHotel();
        }
    }, [slug]);
    return (
        <>
            <Head>
                <title>{hotel && hotel.name ? `${hotel.name} - ` : ''}Hotelwaze</title>
            </Head>
            <Wrapper>
                {hotel &&
                <Container>
                    <Row>
                        <DetailsColumn>
                            <HotelDetails>
                                <HotelName>{hotel.name}</HotelName>
                                {hotel.Addresses.length > 0 &&
                                <DetailRow>
                                    <FontAwesomeIcon size="lg" color="#F61A88" icon={faMapMarkerAlt} fixedWidth={true} />
                                    <Detail>
                                        {hotel.Addresses[0].address1}
                                    </Detail>
                                </DetailRow>
                                }
                                {hotel.phone &&
                                <DetailRow>
                                    <FontAwesomeIcon size="lg" color="#F61A88" icon={faPhone} fixedWidth={true} />
                                    <Detail>
                                        <Link href={`tel:${hotel.phone}`}>{hotel.phone}</Link>
                                    </Detail>
                                </DetailRow>
                                }
                                {hotel.mobile &&
                                <DetailRow>
                                    <FontAwesomeIcon size="lg" color="#F61A88" icon={faMobile} fixedWidth={true} />
                                    <Detail>
                                        <Link href={`tel:${hotel.mobile}`}>{hotel.mobile}</Link>
                                    </Detail>
                                </DetailRow>
                                }
                                {hotel.website &&
                                <DetailRow>
                                    <FontAwesomeIcon size="lg" color="#F61A88" icon={faGlobe} fixedWidth={true} />
                                    <Detail>
                                        <Link href={hotel.website}>{hotel.website}</Link>
                                    </Detail>
                                </DetailRow>
                                }
                            </HotelDetails>
                        </DetailsColumn>
                        {hotel.Places &&
                        <DetailsColumn>
                            <MapWrapper>
                                <Map location={{lat: hotel.Places[0].coordinates.coordinates[1], lng: hotel.Places[0].coordinates.coordinates[0]}}/>
                            </MapWrapper>
                        </DetailsColumn>
                        }
                        {hotel.description &&
                        <Column>
                            <DescriptionWrapper>
                                {hotel.description}
                            </DescriptionWrapper>
                        </Column>
                        }
                    </Row>
                </Container>
                }
            </Wrapper>
        </>
    )
}

export default Hotel;
