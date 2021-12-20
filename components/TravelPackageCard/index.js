import styled from 'styled-components';
import breakpoints from '../../lib/breakpoints';
import Image from 'next/image';
import Link from 'next/link';
import common from '../../helpers/common';
import Button from '../../styles/Button.styled';
import ButtonLink from '../../styles/ButtonLink.styled';

const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #FFFFFF;
  margin-bottom: 24px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const DetailsWrapper = styled.div`
  padding: 12px;
`;

const PackageTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin-bottom: 4px;
  letter-spacing: -0.5px;
  position: relative;
  height: 4.125rem;
  overflow: hidden;

  &::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%;
    height: 1.375em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

const PackageDetails = styled.p`
  letter-spacing: -0.5px;
  position: relative;
  height: 5.25rem;
  overflow: hidden;

  &::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.5em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

const DetailsButton = styled(ButtonLink)`
  background-color: ${(props) => props.theme.accentColor};
  border-color: ${(props) => props.theme.accentColor};
  color: #FFFFFF;
  font-size: .875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.875rem 0.75rem;
  margin-top: 24px;
  margin-bottom: 12px;
  display: block;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.20);
    border-color: ${(props) => props.theme.accentColorDark};
  }
`;

const TravelPackageCard = ({ travelPackage }) => {
    const excerpt = common.getContentExcerpt(travelPackage.description);
    let image = {};
    if (travelPackage.Images.length > 0 ) {
        image = travelPackage.Images[0];
    } else {
        image = {
            name: 'hotel-image',
            file: 'no-travel-package-image.jpg'
        }
    }
    return (
        <Wrapper>
            <ImageWrapper>
                <Image width="600px" height="338px" src={`${process.env.NEXT_PUBLIC_ASSETS_URL}thumbnail/${image.file}`} alt={travelPackage.title}
                       responsive="true" layout="responsive"/>
            </ImageWrapper>
            <DetailsWrapper>
                <PackageTitle>{travelPackage.title}</PackageTitle>
                <PackageDetails>{excerpt}</PackageDetails>
                <Link href={`/travel-packages/${travelPackage.slug}`}>
                    <DetailsButton>Details</DetailsButton>
                </Link>
            </DetailsWrapper>
        </Wrapper>
    )
};

export default TravelPackageCard;
