import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    height: 100%;
`;

const Map = ({ location }) => {
    const LocationPin = () => (
        <div className="pin">
            <FontAwesomeIcon size="2x" color="#F61A88" icon={faMapMarkerAlt} fixedWidth={true} />
        </div>
    )

    useEffect(() => {
        console.log(location);
    })
    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
                defaultCenter={location}
                defaultZoom={16}
                draggable={false}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                />
            </GoogleMapReact>
        </Wrapper>
    )
};

export default Map;
