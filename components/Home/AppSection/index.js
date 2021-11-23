import styled from 'styled-components';
import { Column, Container, Row } from '../../../styles/Grid.styled';
import Image from 'next/image';
import mobileAppImage from '../../../public/assets/images/about-mobile-app.png';
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
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.four}
    order: 2;
  }
`;

const ImageWrapper = styled.div`
  width: 216px;
  margin: 0 auto 48px;

  @media only screen and ${breakpoints.device.md}{
    margin-bottom: 0;
  }

  @media only screen and ${breakpoints.device.lg}{
    width: 260px;
  }
`;

const ContentColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.seven}
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

const AppSection = () => {
    return (
        <Wrapper>
            <Container>
                <ContentRow>
                    <ImageColumn>
                        <ImageWrapper>
                            <Image src={mobileAppImage} alt="Hotelwaze mobile app" responsive="true"  />
                        </ImageWrapper>
                    </ImageColumn>
                    <ContentColumn>
                        <ContentWrapper>
                            <Title>Hotelwaze Mobile App</Title>
                            <Description>Hotelwaze will help you find and book a car rental in the Philippines. Simply enter your travel details to find the right vehicle for you.</Description>
                        </ContentWrapper>
                    </ContentColumn>
                </ContentRow>
            </Container>
        </Wrapper>
    );
}

export default AppSection;
