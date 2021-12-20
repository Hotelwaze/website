import styled from 'styled-components';
import Head from 'next/head';
import { Column, Container, Row } from '../../styles/Grid.styled';
import { useRouter } from 'next/router';
import breakpoints from '../../lib/breakpoints';
import { useEffect, useState } from 'react';

import httpService from '../../services/http';
import axios from 'axios';
import Image from 'next/image';
import parse from 'html-react-parser';
import grids from '../../lib/grids';
import FormGroup from '../../styles/FormGroup.styled';
import Label from '../../styles/Label.styled';
import ControlInput from '../../styles/ControlInput.styled';
import ControlTextArea from '../../styles/ControlTextArea.styled';
import Button from '../../styles/Button.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '../../styles/Alert.styled';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const DetailsColumnLeft = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
  @media only screen and ${breakpoints.device.xl} {
    ${grids.col.seven}
  }
`;

const DetailsColumnRight = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.five}
  }
`;

const PackageDetails = styled.div`
  margin-bottom: 24px;
`;

const PackageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 48px;

  @media only screen and ${breakpoints.device.md} {
    font-size: 2rem;
  }
  
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Details = styled.div``;

const InquiryWrapper = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
`;

const InquiryHeader = styled.h2`
  font-weight: 700;
  letter-spacing: -1px;
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: ${(props) => props.theme.accentColor};
`;

const NameColumn = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
`;
const EmailColumn = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
`;
const MobileColumn = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
`;
const PackageColumn = styled(Column)`
  @media only screen and ${breakpoints.device.lg} {
    ${grids.col.six}
  }
`;

const SendButtonColumn = styled(Column)`
    text-align: right;
`;

const SendButton = styled(Button)`
  background-color: ${(props) => props.theme.accentColor};
  border-color: ${(props) => props.theme.accentColor};
  color: #FFFFFF;
  font-size: .875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.875rem 0.75rem;
  margin-top: 24px;
  display: block;
  width: 100%;

  @media only screen and ${breakpoints.device.lg} {
    display: inline;
    padding: .875rem 4rem;
    width: auto;
  }
`;

const TravelPackage = () => {
    const [travelPackage, setTravelPackage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { slug } = router.query;

    const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter your name.'),
        email: yup.string().required('Please enter your email.').email('Please provide a valid email.'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const submitForm = async (data) => {
        setIsSubmitting(true);
        try {
            const result = await httpService.sendEmail('travel-package-inquiry',{
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                packageName: data.packageName,
                query: data.query,
            });
            if (result.status === 200) {
                setSuccess(result.data.message);
                reset({
                    name: '',
                    email: '',
                    mobile: '',
                    query: '',
                });
                setIsSubmitting(false);
                return;
            }

            throw new Error("Failed to send message.");

        } catch (error) {
            setIsSubmitting(false);
            if(axios.isCancel(error)){
                setError('Sending message has been cancelled.');
            }else{
                setError(error.message);
            }
        }
    };

    const onSubmit = (data) => {
        submitForm(data);
    }

    useEffect(() => {
        const fetchTravelPackage = async () => {
            try {
                const result = await httpService.getContent('travel-package',{
                    status: 'active',
                    slug: router.query.slug
                });
                if (result.status === 200) {
                    setTravelPackage(result.data.data);
                    return;
                }
                throw new Error("Failed to fetch countries");

            } catch (error) {
                if(axios.isCancel(error)){
                    console.log('Data fetching cancelled');
                }else{
                    console.log(error);
                }
            }
        }
        // once you have the slug, call `fetchData`
        if (slug) {
            fetchTravelPackage();
        }

    }, [slug]);
    return (
        <>
            <Head>
                <title>{travelPackage && travelPackage.title ? `${travelPackage.title} - ` : ''}Hotelwaze</title>
            </Head>
            <Wrapper>
                {travelPackage &&
                <Container>
                    <Row>
                        <Column>
                            <PackageTitle>{travelPackage.title}</PackageTitle>
                        </Column>
                        {travelPackage.Images[0] &&
                        <DetailsColumnLeft>
                            <PackageDetails>

                                <ImageWrapper>
                                    <Image width="1440px" height="810px"
                                           src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${travelPackage.Images[0].file}`}
                                           alt={travelPackage.title}
                                           priority={true}
                                           responsive="true" layout="responsive"/>
                                </ImageWrapper>
                            </PackageDetails>
                        </DetailsColumnLeft>
                        }
                        {travelPackage.description &&
                            <DetailsColumnRight>
                                <PackageDetails>
                                    <Details>
                                        {parse(travelPackage.description)}
                                    </Details>
                                </PackageDetails>
                            </DetailsColumnRight>
                        }
                        <Column>
                            <InquiryWrapper>
                                <InquiryHeader>Inquire</InquiryHeader>
                                <p>To know more about about this travel package, send us a message and we will get back to you as soon as possible.</p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        {success &&
                                        <Column>
                                            <Alert className="success">
                                                {success}
                                            </Alert>
                                        </Column>
                                        }
                                        {error &&
                                        <Column>
                                            <Alert className="danger">
                                                {error}
                                            </Alert>
                                        </Column>
                                        }
                                        <NameColumn>
                                            <FormGroup>
                                                <Label htmlFor="name">Name</Label>
                                                <ControlInput
                                                    type="text"
                                                    id="name"
                                                    {...register('name')}
                                                    className={`${errors.name ? 'is-invalid' : ''}`}
                                                    disabled={isSubmitting}
                                                />
                                                <div className={`invalid-feedback ${errors.name ? 'has-error' : ''}`}>{errors.name?.message}</div>
                                            </FormGroup>
                                        </NameColumn>
                                        <EmailColumn>
                                            <FormGroup>
                                                <Label htmlFor="email">Email</Label>
                                                <ControlInput
                                                    type="email"
                                                    id="email"
                                                    {...register('email')}
                                                    className={`${errors.email ? 'is-invalid' : ''}`}
                                                    disabled={isSubmitting}
                                                />
                                                <div className={`invalid-feedback ${errors.email ? 'has-error' : ''}`}>{errors.email?.message}</div>
                                            </FormGroup>
                                        </EmailColumn>
                                        <MobileColumn>
                                            <FormGroup>
                                                <Label htmlFor="mobile">Mobile (optional)</Label>
                                                <ControlInput
                                                    type="tel"
                                                    id="mobile"
                                                    {...register('mobile')}
                                                    disabled={isSubmitting}
                                                />
                                            </FormGroup>
                                        </MobileColumn>
                                        <PackageColumn>
                                            <FormGroup>
                                                <Label htmlFor="package">Travel Package</Label>
                                                <ControlInput
                                                    type="text"
                                                    id="package"
                                                    disabled defaultValue={travelPackage.title}
                                                />
                                                <ControlInput
                                                    type="hidden"
                                                    defaultValue={travelPackage.title}
                                                    {...register('packageName')}
                                                />
                                            </FormGroup>
                                        </PackageColumn>
                                        <Column>
                                            <FormGroup>
                                                <Label htmlFor="query">Message (optional)</Label>
                                                <ControlTextArea
                                                    rows="4"
                                                    id="query"
                                                    {...register('query')}
                                                    disabled={isSubmitting}
                                                />
                                            </FormGroup>
                                        </Column>
                                        <SendButtonColumn>
                                            <SendButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</SendButton>
                                        </SendButtonColumn>
                                    </Row>
                                </form>
                            </InquiryWrapper>
                        </Column>
                    </Row>
                </Container>
                }
            </Wrapper>
        </>
    )
}

export default TravelPackage;
