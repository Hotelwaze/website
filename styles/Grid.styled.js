import styled from 'styled-components';
import breakpoints from '../lib/breakpoints';
import grids from '../lib/grids';

export const Container = styled.div`
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and ${breakpoints.device.sm}{
    max-width: 540px;
  }

  @media only screen and ${breakpoints.device.md}{
    max-width: 720px;
  }

  @media only screen and ${breakpoints.device.lg}{
    max-width: 960px;
  }

  @media only screen and ${breakpoints.device.xl}{
    max-width: 1140px;
  }

  @media only screen and ${breakpoints.device.xxl}{
    max-width: 1320px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;

  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }
`;

const handleColumnCount = column => {
    switch (column) {
        case 'one':
            return `${grids.one}`;
        case 'two':
            return `${grids.two}`;
        case 'two-half':
            return `${grids.twohalf}`;
        case 'three':
            return `${grids.three}`;
        case 'four':
            return `${grids.four}`;
        case 'five':
            return `${grids.five}`;
        case 'six':
            return `${grids.six}`;
        case 'seven':
            return `${grids.seven}`;
        case 'eight':
            return `${grids.eight}`;
        case 'nine':
            return `${grids.nine}`;
        case 'ten':
            return `${grids.ten}`;
        case 'eleven':
            return `${grids.eleven}`;
        case 'twelve':
            return `${grids.twelve}`;
        default:
            return 'width: 100%;';
    }
}

export const Column = styled.div`
  flex: 0 0 auto;
  ${({ column }) => handleColumnCount(column)};
`;