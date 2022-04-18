import Head from 'next/head';
import styled from 'styled-components';
import { Column, Container, Row } from '../../styles/Grid.styled';
import FormGroup from '../../styles/FormGroup.styled';
import Label from '../../styles/Label.styled';
import ControlInput from '../../styles/ControlInput.styled';
import Button from '../../styles/Button.styled';
import breakpoints from '../../lib/breakpoints';
import grids from '../../lib/grids';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import httpService from '../../services/http';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const PageHeader = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
  margin-bottom: 24px;
`;

const FormGroupColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.four}
  }
`;

const ButtonColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.four}
  }
`;

const ResetPasswordButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border-color: ${(props) => props.theme.primaryColor};
  color: #FFFFFF;
  font-size: .875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.875rem 0.75rem;
  margin-top: 24px;
  display: block;
  width: 100%;
`;

const PasswordReset = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const { token } = router.query;

  useEffect(() => {
    if (token) {
      passwordResetLinkCheck(token); 
    }
  }, [token]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatches(checkPasswordMatches(event.target.value, confirmPassword));
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatches(checkPasswordMatches(password, event.target.value));
  }

  const checkPasswordMatches = (password, confirm) => {
    return password === confirm;
  }

  const passwordResetLinkCheck = async (token) => {

    try {
      setErrorMessage('');
      const result = await httpService.checkPasswordResetLink({
        token
      });

      if (result.status === 200) {
        setUserEmail(result.data.userEmail);
        return;
      }

    } catch (err) {
        setErrorMessage('Password reset link is invalid or has expired. Please send another password reset request.');
    }
  };

  const handleSubmitPasswordReset = async () => {
    try {
      setErrorMessage('');
      const result = await httpService.resetPassword({
        email: userEmail,
        token,
        password
      });

      if (result.status === 200) {
        setSuccessMessage(result.data.message);
        return;
      }

    } catch (err) {
        setErrorMessage('Password reset link is invalid or has expired. Please send another password reset request.');
    }
  }

  return (
    <>
      <Head>
        <title>Password Reset</title>
      </Head>
      <Wrapper>
        <Container>
            <Row>
                <Column>
                    <PageHeader>
                        <Title>Password Reset</Title>
                    </PageHeader>
                </Column>
            </Row>
        </Container>
        {errorMessage ?
          <Container>
            <Row>
              <Column>
                <p>{errorMessage}</p>
              </Column>
            </Row>
          </Container> :
          <Container>
              <Row>
                {successMessage ?
                  <>
                    <Column>
                      <p>{successMessage}</p>
                    </Column>
                  </> :
                  <>
                    <FormGroupColumn>
                        <FormGroup>
                            <Label>Email</Label>
                            <ControlInput type="email" defaultValue={userEmail} disabled />
                        </FormGroup>
                    </FormGroupColumn>
                    <FormGroupColumn>
                        <FormGroup>
                            <Label>Password</Label>
                            <ControlInput type="password" value={password} onChange={handlePasswordChange} />
                        </FormGroup>
                    </FormGroupColumn>
                    <FormGroupColumn>
                        <FormGroup>
                            <Label>Confirm Password</Label>
                            <ControlInput type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                            {!passwordMatches && <p>Password does not match.</p>}
                        </FormGroup>
                    </FormGroupColumn>
                    <ButtonColumn>
                        <ResetPasswordButton type="button" onClick={handleSubmitPasswordReset}>Reset Password</ResetPasswordButton>
                    </ButtonColumn>
                  </>
                }
              </Row>
          </Container>
        }
      </Wrapper>
    </>
  )
};

export default PasswordReset;
