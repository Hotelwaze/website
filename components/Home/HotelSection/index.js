import styled from 'styled-components';
import { Column, Container, Row } from '../../../styles/Grid.styled';
import Image from 'next/image';
import hotelBuildingImage from '../../../public/assets/images/hotel-building.png';
import breakpoints from '../../../lib/breakpoints';
import grids from '../../../lib/grids';

const Wrapper = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #FFFFFF;
`;

const ContentRow = styled(Row)`
    align-items: center;
`;

const ImageColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.five}
    order: 2;
  }
`;

const ImageWrapper = styled.div`
  width: 276px;
  margin: 0 auto 48px;

  @media only screen and ${breakpoints.device.md}{
    margin-bottom: 0;
    width: 100%;
  }
`;

const ContentColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.six}
    order: 1;
    margin-left: ${grids.size.one};
  }
  @media only screen and ${breakpoints.device.xxl}{
    ${grids.col.six}
  }
`;

const ContentWrapper = styled.div`
  margin-right: 12px;
  margin-left: 12px;

  @media only screen and ${breakpoints.device.sm} {
    max-width: 346px;
    margin-right: auto;
    margin-left: auto;
  }

  @media only screen and ${breakpoints.device.md} {
    max-width: none;
    margin-right: auto;
    margin-left: auto;
  }
`;

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

const HotelSection = () => {
    return (
        <Wrapper>
            <Container>
                <ContentRow>
                    <ImageColumn>
                        <ImageWrapper>
                            <Image src={hotelBuildingImage} alt="Hotelwaze mobile app" responsive="true"  />
                        </ImageWrapper>
                    </ImageColumn>
                    <ContentColumn>
                        <ContentWrapper>
                            <Title>Hotels Search</Title>
                            <Description>Hotelwaze is your one stop destination for hotel search, helping you easily find a hotel near your current location or for your next trip. Search by city, country, hotel name, or map for hotels in more than 90 countries around the world.</Description>
                        </ContentWrapper>
                    </ContentColumn>
                </ContentRow>
            </Container>
        </Wrapper>
    );
}

export default HotelSection;
