import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';;
import breakpoints from '../../lib/breakpoints';
import PropTypes from 'prop-types';

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
    let address = hotel.addresses.length > 0 ? hotel.addresses[0].address1 : '';
    let image = {};
    if (hotel.images.length > 0 ) {
        image = hotel.images[0];
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
                    <Image width="600px" height="338px" src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image.file}`} alt={hotel.name}
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
