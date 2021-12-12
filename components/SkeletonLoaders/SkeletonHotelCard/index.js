import styled from 'styled-components';
import breakpoints from '../../../lib/breakpoints';

const Wrapper = styled.div`
  display: block;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #ffffff;
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  height: 292px;

  @media only screen and ${breakpoints.device.sm} {
    height: 300px;
  }
`;

const ImageWrapper = styled.div`
  height: 170px;
  background: #e5e5e5;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent 0%, #eee 50%, transparent 100%);
    animation: load 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`;

const DetailsWrapper = styled.div`
  padding: 12px;
`;

const HotelName = styled.div`
  margin-bottom: 4px;
  height: 16px;
  background: #e5e5e5;
  width: 60%;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  overflow: hidden;
  
  + div {
    width: 70%;
    margin-bottom: 12px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent 0%, #eee 50%, transparent 100%);
    animation: load 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`;

const HotelAddress = styled.div`
  margin-bottom: 2px;
  height: 14px;
  background: #e5e5e5;
  width: 80%;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  overflow: hidden;

  + div {
    width: 90%;
    margin-bottom: 12px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent 0%, #eee 50%, transparent 100%);
    animation: load 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`;

const SkeletonHotelCard = () => (
   <Wrapper>
       <ImageWrapper />
       <DetailsWrapper>
           <div>
               <HotelName />
               <HotelName />
           </div>
           <div>
               <HotelAddress />
               <HotelAddress />
           </div>
       </DetailsWrapper>
   </Wrapper>
);

export default SkeletonHotelCard;
