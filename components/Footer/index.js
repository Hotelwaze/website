import styled from 'styled-components';
import { Column, Container, Row } from '../../styles/Grid.styled';
import Image from 'next/image';
import brand from '../../public/assets/images/logo-web.png';
import logotype from '../../public/assets/images/logotype.svg';
import Link from 'next/link';
import breakpoints from '../../lib/breakpoints';
import grids from '../../lib/grids';

const Wrapper = styled.footer`
  background: ${props => props.theme.primaryColor};
  padding-top: 48px;
  padding-bottom: 48px;
`;

const FooterBrand = styled.div`
  margin-bottom: 60px;
`;

const Brand = styled.div`

  margin: 0 auto;
  
  @media only screen and ${breakpoints.device.md} {
    width: 170px;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 200px;
  }
`;

const Copyright = styled.span`
  display: block;
  text-align: center;
  color: #FFFFFF;
  font-size: .75rem;
  margin-top: 12px;
`;

const BrandColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.three}
  }
`;

const NavColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.nine}
  }
`;

const NavOneColumn = styled(Column)`
  @media only screen and ${breakpoints.device.sm} {
    ${grids.col.six}
  }
`;

const NavTwoColumn = styled(Column)`
  @media only screen and ${breakpoints.device.sm} {
    ${grids.col.six}
  }
`;

const TextOneColumn = styled(Column)`
  @media only screen and ${breakpoints.device.sm} {
    ${grids.col.six}
  }
`;

const TextTwoColumn = styled(Column)`
  @media only screen and ${breakpoints.device.sm} {
    ${grids.col.six}
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: 48px;
  margin-bottom: 24px;

  @media only screen and ${breakpoints.device.sm}{
    margin-left: 0;
  }
`;
const NavItem = styled.li``;

const NavLink = styled.a`
  display: block;
  padding: 0.5rem 0;
  color: #FFFFFF;
  font-size: 1rem;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
`;

const Content = styled.div`
  margin: 0 0 24px 48px;

  @media only screen and ${breakpoints.device.sm} {
    margin-left: 0;
  }
`;

const Heading = styled.h5`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Text = styled.p`
    color: #FFFFFF;
`;

const Footer = () => (
    <Wrapper>
        <Container>
            <Row>
                <BrandColumn>
                    <FooterBrand>
                        <Brand>
                            <Image src={brand} alt="Hotelwaze" responsive="true" />
                        </Brand>
                        <Copyright>© 2021 Hotelwaze Travel Agency</Copyright>
                    </FooterBrand>
                </BrandColumn>
                <NavColumn>
                    <Row>
                        <NavOneColumn>
                            <NavList>
                                <NavItem>
                                    <Link href="/hotels" passHref>
                                        <NavLink>Hotels</NavLink>
                                    </Link>
                                    <Link href="/cars" passHref>
                                        <NavLink>Cars</NavLink>
                                    </Link>
                                    <Link href="https://blog.hotelwaze.com" passHref>
                                        <NavLink>Blog</NavLink>
                                    </Link>
                                    <Link href="/travel-packages" passHref>
                                        <NavLink>Travel Packages</NavLink>
                                    </Link>
                                    <Link href="/partner-registration" passHref>
                                        <NavLink>Partner Registration</NavLink>
                                    </Link>
                                </NavItem>
                            </NavList>
                        </NavOneColumn>
                        <NavTwoColumn>
                            <NavList>
                                <NavItem>
                                    <Link href="/terms" passHref>
                                        <NavLink>Terms</NavLink>
                                    </Link>
                                    <Link href="/privacy" passHref>
                                        <NavLink>Privacy</NavLink>
                                    </Link>
                                    <Link href="/about" passHref>
                                        <NavLink>About</NavLink>
                                    </Link>
                                    <Link href="/faqs" passHref>
                                        <NavLink>FAQs</NavLink>
                                    </Link>
                                    <Link href="/contact-us" passHref>
                                        <NavLink>Contact Us</NavLink>
                                    </Link>
                                </NavItem>
                            </NavList>
                        </NavTwoColumn>
                        <TextOneColumn>
                            <Content>
                                <Heading>Hotelwaze Philippines</Heading>
                                <Text>2084 San Antonio Subdivision,<br />
                                San Antonio, Floridablanca<br />
                                2006 Pampanga, Philippines</Text>
                                <Text>Email: info@hotelwaze.com<br/>
                                    Call or SMS: +63 970 134 0934</Text>
                            </Content>
                        </TextOneColumn>
                        <TextTwoColumn>
                            <Content>
                                <Heading>Hotelwaze USA</Heading>
                                <Text>Ice Skate Place, San Diego<br />
                                    California 92126, USA</Text>
                                <Text>Email: info@hotelwaze.com<br/>
                                    Phone: +1 858 322 3378</Text>
                            </Content>
                        </TextTwoColumn>
                    </Row>
                </NavColumn>
            </Row>
        </Container>
    </Wrapper>
);

export default Footer;
