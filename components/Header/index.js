import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../styles/Button.styled';
import { useShowState } from '../../hooks';
import { useEffect } from 'react';
import breakpoints from '../../lib/breakpoints';
import { Container } from '../../styles/Grid.styled';
import logotype from '../../public/assets/images/logo-web.png';

const HeaderWrapper = styled.header`
  background: ${props => props.theme.primaryColor};
`;

const TopHeader = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;

  @media only screen and ${breakpoints.device.md}{
    display: none;
  }
`;

const TravelPackagesLink = styled.a`
  display: block;
  height: 34px;
  border: 1px solid ${props => props.theme.accentColor};
  color: #FFFFFF;
  font-size: 0.625rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  padding: 11px 24px;
  text-align: center;
  background: ${props => props.theme.accentColor};
  border-radius: 17px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.theme.accentColorDark};
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }

  @media only screen and ${breakpoints.device.sm}{
    display:inline-block;
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 0;
  }

  @media only screen and ${breakpoints.device.lg}{
    padding: 15px 24px;
    font-size: .75rem;
    height: 44px;
    border-radius: 22px;
  }
  
`;

const PartnerRegistrationLink = styled.a`
  display: block;
  height: 32px;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 0.625rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  padding: 10px 24px;
  text-align: center;
  background: ${props => props.theme.primaryColor};
  border-radius: 17px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  
  &:hover {
    background: #FFFFFF;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.primaryColor};
  }

  @media only screen and ${breakpoints.device.sm}{
    display:inline-block;
  }

  @media only screen and ${breakpoints.device.lg}{
    padding: 15px 24px;
    font-size: .75rem;
    height: 44px;
    border-radius: 22px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${breakpoints.device.lg}{
    height: 96px;
  }
`;

const Brand = styled.a`
  display: block;
  width: 156px;
  height: 25px;
  position: relative;
  margin-bottom: 6px;

  @media only screen and ${breakpoints.device.lg}{
    width: 200px;
    height: 80px;
    margin-bottom: 8px;
  }
  
    @media only screen and (max-width: 600px) {
      width: 100px;
       height: 25px;
    }
`;

const Navigation = styled.div`
  display: none;
  align-items: center;

  @media only screen and ${breakpoints.device.md}{
    display: flex;
  }
`;

const MenuToggleButton = styled(Button)`
  width: 44px;
  height: 44px;
  position: relative;

  @media only screen and ${breakpoints.device.md}{
    margin-left: 24px;
  }

  @media only screen and ${breakpoints.device.lg}{
    display: none;
  }
`;

const Bar = styled.div`
  height: 2px;
  background: #FFFFFF;
  position: absolute;
  right: 10px;

  &:nth-child(1) {
    width: 18px;
    top: 14px;
  }

  &:nth-child(2) {
    width: 22px;
    top: 21px;
  }

  &:nth-child(3) {
    width: 24px;
    top: 28px;
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  margin-right: -275px;
  width: 275px;
  background: #FFFFFF;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  z-index: 2;
  
  &.shown {
    margin-right: 0;
  }

  @media only screen and ${breakpoints.device.lg}{
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const MenuCloseButton = styled(MenuToggleButton)`
    opacity: 0.75;
    margin-right: 12px;
`;

const CloseIcon = styled(Image)`
    margin: 11px;
`;

const MobileMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

const MobileMenuItem = styled.li`
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  margin-top: -1px;
`;

const MobileMenuLink = styled.a`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  padding: 11px 24px;
  line-height: 1;
  text-decoration: none;
  color: ${props => props.theme.bodyColor};
`;

const PrimaryMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: none;
  margin-bottom: 0;

  @media only screen and ${breakpoints.device.lg}{
    display: block;
  }
`;

const PrimaryMenuItem = styled.li`
    display: inline-block;
`;

const PrimaryMenuLink = styled.a`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  padding: 11px 24px;
  line-height: 1;
  color: #FFFF;
  text-decoration: none;
`;

const Header = () => {
    const [isMobileMenuOpen, toggleMobileMenu] = useShowState();

    useEffect(() => {
        isMobileMenuOpen ? document.body.classList.add('menu-shown') : document.body.classList.remove('menu-shown');
    })

    return (
        <HeaderWrapper>
            <TopHeader>
                <Container>
                    <TravelPackagesLink href="/travel-packages">Travel Packages</TravelPackagesLink>
                    <PartnerRegistrationLink href="https://forms.gle/KVX2JbNwpVdvBWL88" target="_blank">Partner Registration</PartnerRegistrationLink>
                </Container>
            </TopHeader>
            <Container>
                <MainHeader>
                    <Brand href="/">
                        <Image src={logotype} alt="Hotelwaze" responsive="true" />
                    </Brand>
                    <Navigation>
                        <PrimaryMenu>
                            <PrimaryMenuItem>
                                <PrimaryMenuLink href="/hotels">Hotels</PrimaryMenuLink>
                            </PrimaryMenuItem>
                            <PrimaryMenuItem>
                                <PrimaryMenuLink href="/cars">Cars</PrimaryMenuLink>
                            </PrimaryMenuItem>
                            <PrimaryMenuItem>
                                <PrimaryMenuLink href="https://blog.hotelwaze.com">Blog</PrimaryMenuLink>
                            </PrimaryMenuItem>
                        </PrimaryMenu>
                        <TravelPackagesLink href="/travel-packages">Travel Packages</TravelPackagesLink>
                        <PartnerRegistrationLink href="https://forms.gle/KVX2JbNwpVdvBWL88" target="_blank">Partner Registration</PartnerRegistrationLink>
                    </Navigation>
                    <MenuToggleButton onClick={() => toggleMobileMenu(true)}>
                        <Bar className="bar"></Bar>
                        <Bar className="bar"></Bar>
                        <Bar className="bar"></Bar>
                    </MenuToggleButton>
                </MainHeader>
            </Container>
            <MobileMenuWrapper className={`${isMobileMenuOpen ? "shown" : ""}`}>
                <MobileMenuHeader>
                    <MenuCloseButton onClick={() => toggleMobileMenu(false)}>
                        <CloseIcon src="/assets/images/close-icon.svg" alt="Close" width="22" height="22" />
                    </MenuCloseButton>
                </MobileMenuHeader>
                <MobileMenu>
                    <MobileMenuItem>
                        <MobileMenuLink href="/hotels">Hotels</MobileMenuLink>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLink href="/cars">Cars</MobileMenuLink>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLink href="https://blog.hotelwaze.com">Blog</MobileMenuLink>
                    </MobileMenuItem>
                </MobileMenu>
            </MobileMenuWrapper>
        </HeaderWrapper>
    )
}

export default Header;
