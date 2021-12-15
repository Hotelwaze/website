import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';;
import breakpoints from '../../lib/breakpoints';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Wrapper = styled.a`
  display: block;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #FFFFFF;
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media only screen and ${breakpoints.device.sm} {
    height: 300px;
  }
  
  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const DetailsWrapper = styled.div`
  padding: 12px;
`;

const HotelName = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin-bottom: 4px;
  letter-spacing: -0.5px;
  min-height: 2.5rem;
`;

const HotelAddress = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  letter-spacing: -0.5px;
`;

const HotelCard = ({ hotel }) => {
    let address = '';
    if (Object.prototype.hasOwnProperty.call(hotel, 'Addresses') && hotel.Addresses.length > 0 ) {
        const addresses = hotel.Addresses[0];
        if (addresses) {
            if (Object.prototype.hasOwnProperty.call(addresses, 'address1')) {
                address = addresses.address1;
            } else if (Object.prototype.hasOwnProperty.call(addresses, 'address2')) {
                address = addresses.address2;
            }
        }
    }
    let image = {};
    if (hotel.Images.length > 0 ) {
        image = hotel.Images[0];
    } else {
        image = {
            name: 'hotel-image',
            file: 'no-hotel-image.jpg'
        }
    }

    return (
        <Link href={`/hotels/${hotel.slug}`}>
            <Wrapper>
                <ImageWrapper>
                    <Image width="600px" height="338px" src={`${process.env.NEXT_PUBLIC_ASSETS_URL}thumbnail/${image.file}`} alt={hotel.name}
                           responsive="true" layout="responsive"/>
                </ImageWrapper>
                <DetailsWrapper>
                    <HotelName>{hotel.name}</HotelName>
                    <HotelAddress>{address}</HotelAddress>
                </DetailsWrapper>
            </Wrapper>
        </Link>
    );
}

HotelCard.propTypes = {
    hotel: PropTypes.object.isRequired
}

export default HotelCard;
