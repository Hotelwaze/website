import styled from 'styled-components';
import { Column, Container, Row } from '../../../styles/Grid.styled';
import breakpoints from '../../../lib/breakpoints';

const Wrapper = styled.section`
  width: 100vw;
  background: linear-gradient(180deg, rgba(2, 59, 107, 0.9) 53.29%, rgba(0, 74, 137, 0.9) 100%), url('/assets/images/home-banner-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const BannerRow = styled(Row)`
  height: 370px;
  align-items: center;

  @media only screen and ${breakpoints.device.md} {
    height: 404px;
  }

  @media only screen and ${breakpoints.device.lg} {
    height: 604px;
  }
`;

const Content = styled.div`
  margin-right: 12px;
  margin-left :12px;
  text-align: center;
  color: #FFFFFF;

  @media only screen and ${breakpoints.device.md} {
    max-width: 672px;
    margin-right: auto;
    margin-left: auto;
  }

  @media only screen and ${breakpoints.device.lg} {
    max-width: 760px;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.1875;
  margin-bottom: 12px;

  @media only screen and ${breakpoints.device.md} {
    font-size: 2.625rem;
    line-height: 1.2;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 3rem;
    line-height: 1.1675;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 600;

  @media only screen and ${breakpoints.device.md} {
    font-size: 1.25rem;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.5rem;
    max-width: 700px;
  }
`;

const BrowseCarsLink = styled.a`
  display: inline-block;
  height: 44px;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  padding: 14px 48px;
  text-align: center;
  border-radius: 22px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  margin-top: 12px;
  
  &:hover {
    background: #FFFFFF;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.primaryColor};
  }

  @media only screen and ${breakpoints.device.lg} {
    height: 56px;
    padding: 18px 72px;
    font-size: .875rem;
    border-radius: 28px;
    margin-top: 24px;
  }
`;

const HomeBanner = () => {
    return (
        <Wrapper>
            <Container>
                <BannerRow>
                    <Column>
                        <Content>
                            <Title>The smartest way to rent a car in the Philippines today.</Title>
                            <Description>Find a car rental with us and drive away in the fastest, most convenient and safest way possible.</Description>
                            <BrowseCarsLink href="/cars">Browse Cars</BrowseCarsLink>
                        </Content>
                    </Column>
                </BannerRow>
            </Container>
        </Wrapper>
    );
}

export default HomeBanner;
