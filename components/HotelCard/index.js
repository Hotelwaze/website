import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import noHotelImage from '../../public/assets/images/no-hotel-image.jpg';
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
  height: 200px;
  position: relative;
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

const HotelCard = ({ slug, name, address, image }) => (
    <Link  href={`/hotels/${slug}`}>
        <Wrapper>
            <ImageWrapper>
                <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}thumbnail/${image.file}`} alt={name} responsive="true" layout="fill" />
            </ImageWrapper>
            <DetailsWrapper>
                <HotelName>{name}</HotelName>
                <HotelAddress>{address}</HotelAddress>
            </DetailsWrapper>
        </Wrapper>
    </Link>
);

HotelCard.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.object,
}

HotelCard.defaultProps = {
    slug: '',
    name: '',
    address: '',
    image: {
        name: 'hotel-image',
        file: 'no-hotel-image.jpg'
    }
}

export default HotelCard;
