import PropTypes from 'prop-types';
import styled from 'styled-components';
import ControlInput from '../../styles/ControlInput.styled';
import ControlSelect from '../../styles/ControlSelect.styled';
import FormGroup from '../../styles/FormGroup.styled';
import Label from '../../styles/Label.styled';
import httpService from '../../services/http';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../styles/Button.styled';
import { Column, Row } from '../../styles/Grid.styled';
import breakpoints from '../../lib/breakpoints';
import grids from '../../lib/grids';
import { useRouter} from 'next/router';

const Wrapper = styled.div`
    padding: 48px 12px;
`;

const Card = styled.div`
  border-radius: 8px;
  padding: 24px 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #FFFFFF;
`;

const SearchButton = styled(Button)`
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

const FormGroupColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md} {
    ${grids.col.six}
  }
  @media only screen and ${breakpoints.device.xl} {
    ${grids.col.twohalf}
  }
`;

const ButtonColumn = styled(Column)`
  @media only screen and ${breakpoints.device.md}{
    ${grids.col.twelve}
  }
  @media only screen and ${breakpoints.device.xl}{
    ${grids.col.two}
  }
`;

const HotelSearch = ({ initialCountryId, initialCountryName, initialStateId, initialStateName, initialCityId, initialCityName, handleQuery }) => {
    const [hotelName, setHotelName] = useState('');
    const [countries, setCountryList] = useState([]);
    const [countryId, setCountryId] = useState(initialCountryId);
    const [countryName, setCountryName] = useState(initialCountryName);
    const [states, setStateList] = useState([]);
    const [stateId, setStateId] = useState(initialStateId);
    const [stateName, setStateName] = useState(initialStateName);
    const [cities, setCitiesList] = useState([]);
    const [cityId, setCityId] = useState(initialCityId);
    const [cityName, setCityName] = useState(initialCityName);

    const listCountries = countries.map((country) =>
        <option value={country.id} key={country.id}>{country.name}</option>
    );

    const listStates = states.map((state) =>
        <option value={state.id} key={state.id}>{state.name}</option>
    );

    const listCities = cities.map((city) =>
        <option value={city.id} key={city.id}>{city.name}</option>
    );

    useEffect(() => {
        const source = axios.CancelToken.source();
        fetchCountries();
        fetchStates(initialCountryId);
        return () => source.cancel("Data fetching cancelled");
    }, []);

    const fetchCountries = async () => {
        try {
            const result = await httpService.getContents('countries',{
                status: 'active'
            });
            if (result.status === 200) {
                setCountryList(result.data.data);
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
    };

    const fetchStates = async (id) => {
        try {
            const result = await httpService.getContents('states', {
                status: 'active',
                CountryId: id
            });
            if (result.status === 200) {
                setStateList(result.data.data);
                return;
            }
            throw new Error("Failed to fetch states");

        } catch (error) {
            if(axios.isCancel(error)){
                console.log('Data fetching cancelled');
            }else{
                console.log(error);
            }
        }
    };

    const fetchCities = async (id) => {
        try {
            const result = await httpService.getContents('cities', {
                status: 'active',
                StateId: id
            });
            if (result.status === 200) {
                setCitiesList(result.data.data);
                return;
            }
            throw new Error("Failed to fetch states");

        } catch (error) {
            if(axios.isCancel(error)){
                console.log('Data fetching cancelled');
            }else{
                console.log(error);
            }
        }
    };

    const handleNameChange = (event) => {
        setHotelName(event.target.value);
    }

    const handleCountryChange = (event) => {
        fetchStates(event.target.value);
        setCountryId(event.target.value);
        setCountryName(event.target.selectedOptions[0].text);
    }

    const handleStateChange = (event) => {
        fetchCities(event.target.value);
        setStateId(event.target.value);
        setStateName(event.target.selectedOptions[0].text);
    }

    const handleCityChange = (event) => {
        setCityId(event.target.value);
        setCityName(event.target.selectedOptions[0].text);
    }

    const handleSearchSubmit = () => {
        handleQuery({
            name: hotelName,
            country: countryName,
            state: stateName,
            city: cityName,
        });
    }

    return (
        <Wrapper>
            <Card>
                <Row>
                    <FormGroupColumn>
                        <FormGroup>
                            <Label>Hotel Name</Label>
                            <ControlInput type="text" value={hotelName} onChange={handleNameChange} />
                        </FormGroup>
                    </FormGroupColumn>
                    <FormGroupColumn>
                        {countries &&
                        <FormGroup className="select">
                            <Label>Country</Label>
                            <ControlSelect value={countryId} onChange={handleCountryChange}>
                                <option value="">--- All countries ---</option>
                                {listCountries}
                            </ControlSelect>
                        </FormGroup>
                        }
                    </FormGroupColumn>
                    <FormGroupColumn>
                        <FormGroup className="select">
                            <Label>State</Label>
                            <ControlSelect
                                value={stateId}
                                onChange={handleStateChange}
                                disabled={countryId && states ? false : true}
                            >
                                <option value="">--- All states ---</option>
                                {listStates}
                            </ControlSelect>
                        </FormGroup>
                    </FormGroupColumn>
                    <FormGroupColumn>
                        <FormGroup className="select">
                            <Label>City</Label>
                            <ControlSelect
                                value={cityId}
                                onChange={handleCityChange}
                                disabled={stateId && cities ? false : true}
                            >
                                <option value="">--- All cities ---</option>
                                {listCities}
                            </ControlSelect>
                        </FormGroup>
                    </FormGroupColumn>
                    <ButtonColumn>
                        <SearchButton type="button" onClick={handleSearchSubmit}>Search</SearchButton>
                    </ButtonColumn>
                </Row>
            </Card>
        </Wrapper>
    );
};

HotelSearch.propTypes = {
    initialCountryId: PropTypes.string,
    initialCountryName: PropTypes.string,
    initialStateId: PropTypes.string,
    initialStateName: PropTypes.string,
    initialCityId: PropTypes.string,
    initialCityName: PropTypes.string,
}

HotelSearch.defaultProps = {
    initialCountryId: '',
    initialCountryName: '',
    initialStateId: '',
    initialStateName: '',
    initialCityId: '',
    initialCityName: '',
}
export default HotelSearch;
