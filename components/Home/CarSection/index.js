import styled from 'styled-components';
import { Column, Container, Row } from '../../../styles/Grid.styled';
import Image from 'next/image';
import vehiclesGridImage from '../../../public/assets/images/vehicles-grid.png';
import mobileAppImage from '../../../public/assets/images/about-mobile-app.png';
import breakpoints from '../../../lib/breakpoints';
import grids from '../../../lib/grids';

const Wrapper = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
`;

const ContentRow = styled(Row)`
    align-items: center;
`;

const ImageColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.six}
  }
`;

const ImageWrapper = styled.div`
  height: 316px;
  
  @media only screen and ${breakpoints.device.sm}{
    height: 334px;  
  }

  @media only screen and ${breakpoints.device.md} {
    padding-bottom: 48px;
  }

  @media only screen and ${breakpoints.device.lg} {
    height: 424px;
  }

  @media only screen and ${breakpoints.device.xl} {
    height: 484px;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 90vw;
  height: 316px;
  background: ${props => props.theme.primaryColor};
  border-radius: 0 16px 16px 0;
  padding: 16px;

  @media only screen and ${breakpoints.device.sm}{
    width: 70vw;
    height: 334px;
  }

  @media only screen and ${breakpoints.device.md}{
    width: 45vw;
    height: 334px;
  }

  @media only screen and ${breakpoints.device.lg}{
    height: 424px;
  }
  
  @media only screen and ${breakpoints.device.xl}{
    height: 484px;
  }
  
`;

const ImageBoxInner = styled.div`
  width: 100%;
  max-width: 284px;
  float: right;

  @media only screen and ${breakpoints.device.sm} {
    max-width: 302px;
  }
  
  @media only screen and ${breakpoints.device.lg} {
    max-width: 392px;
  }

  @media only screen and ${breakpoints.device.xl} {
    max-width: 452px;
  }
`;

const ContentColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.six}
  }
`;

const ContentWrapper = styled.div`
  margin-top: 48px;
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

const CarSection = () => {
    return (
      <Wrapper>
          <Container>
              <ContentRow>
                  <ImageColumn>
                      <ImageWrapper>
                          <ImageBox>
                              <ImageBoxInner>
                                  <Image src={vehiclesGridImage} alt="Car rental images" responsive="true"  />
                              </ImageBoxInner>
                          </ImageBox>
                      </ImageWrapper>
                  </ImageColumn>
                  <ContentColumn>
                      <ContentWrapper>
                          <Title>Car Rentals Search</Title>
                          <Description>Hotelwaze will help you find and book a car rental in the Philippines. Simply enter your travel details to find the right vehicle for you.</Description>
                      </ContentWrapper>
                  </ContentColumn>
              </ContentRow>
          </Container>
      </Wrapper>
    );
}

export default CarSection;
