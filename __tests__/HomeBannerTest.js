import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeBanner from '../components/Home/Banner';

test("Should render Home", () => {
    const { getByText } = render(<HomeBanner />);
    expect(getByText('The smartest way to rent a car in the Philippines today.')).toBeInTheDocument();
});