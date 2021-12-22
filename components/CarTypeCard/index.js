import styled from 'styled-components';
import Image from 'next/image';
import breakpoints from '../../lib/breakpoints';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const Wrapper = styled.a`
  display: block;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #FFFFFF;
  margin-bottom: 24px;
  overflow: hidden;
  cursor: pointer;

  @media only screen and ${breakpoints.device.md} {
    height: 480px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const DetailsWrapper = styled.div`
  padding: 24px;
`;

const CarType = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
`;

const Description = styled.div``;

const CarTypeCard = ({ carType }) => {
    let image = {};
    if (carType.Images.length > 0 ) {
        image = carType.Images[0];
    } else {
        image = {
            name: 'hotel-image',
            file: 'no-hotel-image.jpg'
        }
    }

    return (
        <Wrapper>
            <ImageWrapper>
                <Image width="640px" height="360px" src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image.file}`} alt={carType.name}
                       responsive="true" layout="responsive"/>
            </ImageWrapper>
            <DetailsWrapper>
                <CarType>{carType.name}</CarType>
                <Description>
                    {parse(carType.description)}
                </Description>
            </DetailsWrapper>
        </Wrapper>
    );
}

CarTypeCard.propTypes = {
    carType: PropTypes.object.isRequired
}

export default CarTypeCard;
