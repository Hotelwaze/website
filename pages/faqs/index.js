import styled from 'styled-components';
import Head from 'next/head';
import { Column, Container, Row } from '../../styles/Grid.styled';

const Wrapper = styled.div`
  min-height: 90vh;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 12px;
`;

const PageWrapper = styled.div``;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 48px;
`;

const Faqs = () => {
    return (
        <>
            <Head>
                <title>Frequently Asked Questions - Hotelwaze</title>
            </Head>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <PageWrapper>
                                <PageTitle> Frequently Asked Questions (FAQs)</PageTitle>

                                <h3>Can I use unlimited mileage for car rental?</h3>

                                <p>Yes. Except for those Vans and from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</p>

                                <h3>What is the mileage/kilometer policy?</h3>

                                <p>Unlimited mileage is available for most car classes in the Philippines. Larger or Specialty vehicles (such as large passenger vans, large cargo vans, large SUVs or Exotic cars) come with limited mileage and an incremental cost of P5 - P12.50 for every additional mile/kilometer over the allowed limit.</p>

                                <p></p>

                                <h3>Can I take a rented vehicle in the Philippines one way?</h3>

                                <p>No.</p>

                                <p></p>

                                <h3>Can I use a rental car to drive?</h3>

                                <p>Rental vehicles may only be used on a Hotelwaze platform if they come from an approved rental company. These vehicles have been specifically designated and insured by our rental partners so that you&lsquo;re not in violation of any rental contracts.</p>

                                <p></p>

                                <p>Please note: The use of an unapproved rental car could lead to your account being waitlisted and multiple instances will result in permanent deactivation.</p>

                                <p></p>

                                <h3>Renting Another Car When Your Currently Rental Car Gets Involved in an Accident</h3>

                                <p>Example: I just had an accident on my rental car and I need another car while it is being repaired.</p>

                                <p></p>

                                <h3>What should I do?</h3>

                                <p>If you have rental reimbursement coverage through your insurance provider, your policy may cover rental costs while your vehicle is in the shop. Reach out to your agent or the insurance claims department for details.</p>

                                <p></p>

                                <h3>What should I do if I get in an accident in a rental car?</h3>

                                <p>If you get into an accident in your rental car, the first thing you do is call the police and file a police report. You should then contact the Rental Partner from which you rented the car and provide information about the accident. Our staff will walk you through the next steps.</p>

                                <p></p>

                                <p>If you happen to get into a rental car accident and the Rental Partner is unreachable because they are already beyond their business hours, you can call a 24/7 roadside assistance. We recommend calling the Rental Partner as soon as they are available.</p>

                                <p></p>

                                <h3>Do I need a deposit to rent a car while my vehicle is in the shop?</h3>

                                <p>In the event billing has been confirmed with an insurance company, we may ask for a small deposit. It is usually lower than the standard amount. If you are responsible for a portion of the rental, the deposit can be applied to the balance and any remaining funds can be refunded once the rental is returned and billing is finalized with the insurance company.</p>

                                <p></p>

                                <h3>Does my insurance company cover a rental car after an accident?</h3>

                                <p>Rental reimbursement coverage will help you pay for a rental car as part of a covered auto insurance claim. Refer to your own auto insurance policy for details, as coverage and limits vary by the insurance policy.</p>

                                <p></p>

                                <h3>I am under the age of 25. Can I rent a car if my vehicle is in the shop?</h3>

                                <p>Yes.</p>

                                <p></p>

                                <h3>What cars can I rent when under 25?</h3>

                                <h3>Hotelwaze renters under the age of 25 may rent any car except those from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</h3>

                                <p></p>

                                <h3>Can I upgrade my rental car while my vehicle is in the shop?</h3>

                                <p>Yes, if you would like to rent a vehicle in a higher class than reserved, check with the Rental Partner on availability and cost to upgrade. If we are billing an insurance company, you may have to pay out of pocket for the difference</p>

                                <p></p>

                                <h2>General Car Rental Questions</h2>

                                <h3>What are the requirements for Hotelwaze renting cars in the Philippines?</h3>

                                <p>You should be 21 years old and above. You should have a valid driver&lsquo;s license. You should be able to provide an acceptable form of payment.</p>

                                <h3> What is an International Driving Permit?</h3>

                                <p>An International Driving Permit is a translation of your national driving license. The IDP allows motorists to drive vehicles in foreign countries. You must always have your IDP along with your national license at all times.</p>

                                <p></p>

                                <h3>What are your age requirements for renting in the Philippines?</h3>

                                <p>While every rental car company has its own age requirement to rent a vehicle, Hotelwaze&lsquo;s minimum age is 21 throughout the Philippines.</p>

                                <p></p>

                                <h3>What cars can I rent when I am under 25 years old?</h3>

                                <p>Hotelwaze renters under the age of 25 may rent any car except those from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</p>

                                <p></p>

                                <p>If I am a person with a disability and do not have a driver&lsquo;s license, can I rent a car from Hotelwaze?</p>

                                <p>If the reason for not having a driver&rsquo;s license is your disability, you may still rent a car as long as you are accompanied by a surrogate driver with a driver&lsquo;s license. Minimum age restrictions and other normal rental qualifications apply, but there is no additional charge for the surrogate driver and the surrogate driver does not need to produce a credit card or otherwise be required to meet our financial underwriting requirements.</p>

                                <p>Payments</p>

                                <p>What forms of payment are accepted for renting a car?</p>

                                <p>Credit card Debit card Does Hotelwaze accept gift cards?</p>

                                <p>No. Hotelwaze does not accept gift cards as a form of payment for a rental vehicle.</p>

                                <p></p>

                                <h3>How much is a rental car?</h3>

                                <p>The cost of a rental car depends on many factors and can vary greatly. These factors include:</p>

                                <h3>The length of time you are renting the car Car class selected Rental location Insurance products Additional products selected Is a car rental deposit required?</h3>

                                <p>Yes. The deposit amount varies by the exact price of the car rented.</p>

                                <p></p>

                                <h3>Can I pay for the rental of a car for another individual?</h3>

                                <p>The renter of the vehicle must be present to sign the rental agreement and provide their debit card, credit card, or proof of payment at the pickup. The renter cannot provide a voucher, credit, or debit card belonging to someone else for their use.</p>

                                <p></p>

                                <p>If you wish to pay for the rental car, but have someone else drive it, you can rent the vehicle in your name and add them as an additional driver. In order to add an additional driver, they would have to meet all of our additional driver requirements</p>

                                <p></p>

                                <h3>How do refunds work with the different methods of payment?</h3>

                                <p>When you arrive at the location to pick up your vehicle, we collect the full cost of the rental and a security deposit. The amount of the deposit will vary, based on the cost of the rental. Once you return the vehicle, we will refund your security deposit in full, unless there are additional unplanned charges &ndash; such as fuel replacement, vehicle damage, or a late return.</p>

                                <p>The time it takes to receive your refund is based on the method of payment used to pay for your rental.</p>

                                <p></p>

                                <h3>If you pay by credit card, the full cost of the rental and the security deposit will be authorized on your card when you pick up your vehicle. When you return the vehicle, we immediately release the authorization and only charge your card the full amount of the rental.</h3>

                                <p></p>

                                <p>If you pay by debit card, the full cost of the rental and security deposit will be charged to your checking account when you pick up your vehicle. Once the vehicle is returned, Hotelwaze will refund your checking account the amount of the deposit.</p>

                                <p></p>

                                <p>The time it takes to post the refund to your account will depend on your bank. Typically, you should see a refund in approximately 5 to 10 business days. If you do not see your refund after 10 business days, please call us, so we can review your charges with you.</p>

                                <p></p>

                                <h3>Will there be an additional charge if I am late returning the rental vehicle?</h3>

                                <h3>There is a 30-minute grace period for car rental returns.</h3>

                                <p>If the vehicle is returned within 2 hours after the 30-minute grace period, additional hourly charges will apply. Hourly charges for your location and rental can be found on your rental contract.</p>

                                <p>If you return the vehicle 2 hours and 30 minutes or more beyond the set return date and time, you will be charged for an additional day of rental.</p>

                                <p></p>

                                <p>Please note that a vehicle that is returned after the Rental Parntner&lsquo;s business hours will not be checked in until the next business day. If returning the car after business hours but the receiver is not available, the customer is responsible for the vehicle until its satisfactory return to the receiver.</p>

                                <p></p>

                                <h2>Car Pick Up and Return</h2>

                                <h3>Will I be notified before my booking contract ends?</h3>

                                <p>We advise you to inform the rental partner 3 hours before your booking contract termination so you will have enough time to make adjustments to your booking contract.</p>

                                <p></p>

                                <h3>What will happen if my booking contract has ended and I did not inform the Rental Partner that I will be extending my booking?</h3>

                                <p>You have 24 hours after your booking contract has ended to inform us about any changes in your booking so we can take appropriate actions.</p>

                                <p></p>

                                <h3>How do I change or cancel my booking contract if I have not picked up the vehicle yet?</h3>

                                <p>You can call our Hotelwaze customer service to better assist you and so we can provide a vehicle available right away.</p>

                                <p></p>

                                <h3>Will I be charged if I cancel my reservation?</h3>

                                <p>The renter can cancel the booking anytime if the partner have not confirmed the booking once the booking is confirmed the 20% will be charge to you credit card and booking cannot be cancel</p>

                                <p>The 20% is non refundable if the partner cancel the booking we will make every effort to submit your reservation to another rental partner for confirmation</p>

                                <p></p>

                                <h3>How will the Car Rental pick me up?</h3>

                                <p>Once your location for pick up is confirmed the Car Rental driver will meet you at the exact address of your location.</p>

                                <p></p>

                                <h3>How can I return my rental vehicle if the person is not available?</h3>

                                <p>Our Rental Partners should always be available to pick up your rented vehicle. In cases where they are unable to pick up your rented vehicle, you can contact Hotelwaze so that our customer support team can assist you.</p>

                                <p></p>

                                <h3>I would like to keep my rental vehicle for a few days longer. Is that possible?</h3>

                                <p>In order to get you in the right direction and to make sure your rental is extended correctly please call our car rental partner for possible extension.</p>

                                <p></p>

                                <h3>I want to return my car early, is there a penalty to do so?</h3>

                                <p>None. You will only be charged for the days you had the vehicle (excluding prepaid reservations). If the Rental Partner is unavailable when you return the rented vehicle or you are trying to return the vehicle to a different location.</p>

                                <p></p>

                                <h3>Airport locations</h3>

                                <p>We will allow returns after business hours and we have procedures in place for your early or late return. Please check with the Rental Partner when picking up your rented vehicle for the exact procedure.</p>

                                <p>Please that vehicles should be returned to the same location where you picked it up unless prior arrangements have been made with the original pick up and drop off location.If you drop off your rental vehicle at the airport but did not originally pick up your vehicle at the airport, an additional drop fee may be charged.</p>

                                <p></p>

                                <h3>Non-airport locations</h3>

                                <p>Require that their rental vehicles be returned to the same location where picked up.</p>

                                <p>If you want to return a vehicle when the rental partner is closed or unavailable, you must check with them when picking up your vehicle to determine if an &ldquo;after hours&rdquo; service dropbox is available. Doing so will help you avoid additional charges.</p>

                                <p>Please Note: A vehicle that is returned after hours will not be checked in until the next business day.If returning after hours when a car rental is close or unavailable, the customer is responsible for the vehicle until the satisfactory check-in of the rental vehicle the next business day.</p>

                                <p></p>

                                <h3>What if my flight is delayed?</h3>

                                <p>Reservations are valid for 24 hours from the scheduled time of pick-up for delayed flights and charges will not begin until the time of pick-up.Delivery will remain open for up to 2 hours to accommodate delayed customers.</p>

                                <p></p>

                                <p>Do I need to refuel the vehicle before returning? Can I prepay for fuel?</p>

                                <p>Customers may refuel the vehicle to the same fuel level upon picking up the vehicle. If a customer chooses not to refuel the vehicle to the same fuel level, they will be charged the local Hotelwaze car rental partner&lsquo;s rate which is typically above the local pump price. A full tank of gas is not guaranteed.</p>

                                <p></p>

                                <h3>Can I add an additional driver to my rental?</h3>

                                <p>Any additional authorized drivers must appear at the time of rental and meet age and driver&rsquo;s license requirements.</p>

                                <p></p>

                                <h2>Booking</h2>

                                <h3>Can I do advance booking on the app?</h3>

                                <p>Yes.</p>

                                <h3>Do I need Credit Card to rent a car?</h3>

                                <p>In some cases, you are only required to use a credit card for a security deposit purpose. Renters will need to provide a credit card with sufficient funds to cover the cost of the rental plus.</p>

                                <p></p>

                                <h2>Friendly Pets</h2>

                                <h3>What is your pet policy?</h3>

                                <p>Pets are allowed in rental vehicles. Customers need to keep pets crated and return their rental car in clean condition and free of pet hair to avoid cleaning/detailing fees. Service animals used by customers with disabilities are allowed in the vehicle without a carrier.</p>

                                <p></p>

                                <h2>Rental Vehicles, Gadgets and Protection Products</h2>

                                <h3>Do car rentals provide additional equipment such as child safety seats, or GPS?</h3>

                                <p>Due to insurance rules, you will be required to fit the seat in the car.</p>

                                <p>Roof racks, Wi-Fi devices, and Navigation System - GPS Are available in some locations, must be ordered at the time of booking.</p>

                                <p>May be unavailable for some vehicles.</p>

                                <p>All the above-mentioned equipment is subject to availability in some locations, even when booked in advance. No charge made locally if unavailable.</p>

                                <h3>Child seats</h3>

                                <p>Mandatory in most countries, must be ordered at the time of booking. Note: Standard of Baby/ child seats in other countries may differ. Taking your own is recommended.</p>

                                <p></p>

                                <h2>Insurance</h2>

                                <h3>Is personal auto insurance required when booking a car?</h3>

                                <p>You do not need your own car insurance in order to book from Hotelwaze. All our rental partners have their Full Coverage Insurance Plans. We do offer additional several different types of insurance plans to protect you in the event of an accident.</p>

                                <p></p>

                                <h3>What is the car rental scratch policy?</h3>

                                <p>Minor damage to a rental car, such as scratches, dents, or a chipped windshield are covered by the Damage Waiver. The Damage Waiver is an optional protection product you can purchase with your car rental.</p>

                                <p>If you choose not to purchase the Damage Waiver and the car gets damaged, you may have to pay out of pocket for any needed repairs. Your personal auto insurance may or may not cover the cost of repairs, so it is best to contact your insurance provider before renting a car.</p>

                                <p></p>

                                <h3>How much is car rental insurance?</h3>

                                <p>The cost of optional car rental insurance and protection products can vary based on the type of vehicle you wish to rent and other factors. To get the most accurate pricing, start a car reservation below or call the Hotelwaze from which you wish to rent.</p>

                                <p></p>

                                <h3>Can I purchase car rental insurance and other Protection Products from Hotelwaze for a rental car in the Philippines?</h3>

                                <p>Yes.</p>

                                <p></p>

                                <h2>Additional FAQ</h2>

                                <h3>What should I do if my Rental Car breaks down?</h3>

                                <p>If your rental breaks down due to a mechanical failure and is not drivable, be sure to get to a safe place out of traffic. Call your rental partner so they can help you with the towing process.</p>

                                <h3>Does Hotelwaze have a lost and found?</h3>

                                <p>In case of any lost items inside the rental car, you can directly call your rental partner.</p>

                                <p></p>

                                <h2>NO SMOKING POLICY</h2>

                                <h3>What is the Hotelwaze policy on smoking in Rental Cars?</h3>

                                <p>Hotelwaze is committed to providing a safe, clean fleet for our Customers and Rental Partners. In order to better deliver on this commitment, all rental cars are non-smoking. A P200 cleaning fee will be charged to the Customer for Rental Cars returned with evidence of smoking.</p>

                                <h3>When will I know if I have been charged the cleaning fee for smoking?</h3>

                                <p>In most cases, you will know after the clearing time of the rental car. If no Return Representative is present you will see the charge on your final receipt.</p>

                                <p></p>

                                <h2>Additional Information</h2>

                                <h3>How do we use the information?</h3>

                                <p>Hotelwaze explains further the information that is being collected and how they are being used mainly for protection, safety, and security.</p>

                                <p>Safety is the top priority</p>

                                <p>Hotelwaze gives importance to safety and promotes protected car booking habits. This can only be attained by providing information that is needed for secured and stress-free travels.</p>

                                <p>Users are in control</p>

                                <p>Hotelwaze takes care of its users and gives them the option to share location, to personalize their app, and to even delete their account anytime using any compatible device.</p>

                                <p></p>

                                <h2>Partners Additional FAQ</h2>

                                <h3>How to receive booking</h3>

                                <p>You need to open your Hotelwaze Partners account online and go to the booking page.</p>

                                <p></p>

                                <h2>Partners Booking Information</h2>

                                <p>Accepting booking requests from our clients can be monitored on your partner's account. The price of the booking fare is the amount you put, and 80% of the total amount is the only price you can charge to our renters and this can be done using your online payment system.</p>

                                <p></p>

                                <h3>Instructions Pick Up and Drop off at the airport</h3>

                                <p>Drivers need to bring their vehicle inside at the airport arrival parking lot and pay for the parking fee. Look for the safe area for pickup and drop off renters.</p>

                                <p></p>

                                <p>Terminal Parking Fee to all car rental partners in any airport will be compensated by hotelwaze for pick up only.</p>

                                <p>(Please Email your proof of receipt of parking fee to receive your payment to partners@hotelwaze.com)</p>

                                <p></p>

                                <h2>Guaranteed Payment for Rental Partners</h2>

                                <p>If the renter cancels the booking the car rental partner will be compensated 20% of the booking price one day. And the payment will be deposited to the rental partner&rsquo;s bank account.</p>

                                {/*<PageTitle>Frequently Asked Questions (FAQs)</PageTitle>*/}
                                {/*<h3>Can I use unlimited mileage for car rental?</h3>*/}
                                {/*<p>Yes. Except for those Vans and from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</p>*/}
                                {/*<h3>What is the mileage/kilometer policy?</h3>*/}
                                {/*<p>Unlimited mileage is available for most car classes in the Philippines. Larger or Specialty vehicles (such as large passenger vans, large cargo vans, large SUVs or Exotic cars) come with limited mileage and an incremental cost of P5 - P12.50 for every additional mile/kilometer over the allowed limit.</p>*/}
                                {/*<h3>Can I take a rented vehicle in the Philippines one way?</h3>*/}
                                {/*<p>No.</p>*/}
                                {/*<h3>Can I use a rental car to drive?</h3>*/}
                                {/*<p>Rental vehicles may only be used on a Hotelwaze platform if they come from an approved rental company. These vehicles have been specifically designated and insured by our rental partners so that you&lsquo;re not in violation of any rental contracts.</p>*/}
                                {/*<p>Please note: The use of an unapproved rental car could lead to your account being waitlisted and multiple instances will result in permanent deactivation.</p>*/}
                                {/*<h3>Renting Another Car When Your Currently Rental Car Gets Involved in an Accident</h3>*/}
                                {/*<p>Example: I just had an accident on my rental car and I need another car while it is being repaired.</p>*/}
                                {/*<h3>What should I do?</h3>*/}
                                {/*<p>If you have rental reimbursement coverage through your insurance provider, your policy may cover rental costs while your vehicle is in the shop. Reach out to your agent or the insurance claims department for details.</p>*/}
                                {/*<h3>What should I do if I get in an accident in a rental car?</h3>*/}
                                {/*<p>If you get into an accident in your rental car, the first thing you do is call the police and file a police report. You should then contact the Rental Partner from which you rented the car and provide information about the accident. Our staff will walk you through the next steps.</p>*/}
                                {/*<p>If you happen to get into a rental car accident and the Rental Partner is unreachable because they are already beyond their business hours, you can call a 24/7 roadside assistance. We recommend calling the Rental Partner as soon as they are available.</p>*/}
                                {/*<h3>Do I need a deposit to rent a car while my vehicle is in the shop?</h3>*/}
                                {/*<p>In the event billing has been confirmed with an insurance company, we may ask for a small deposit. It is usually lower than the standard amount. If you are responsible for a portion of the rental, the deposit can be applied to the balance and any remaining funds can be refunded once the rental is returned and billing is finalized with the insurance company.</p>*/}
                                {/*<h3>Does my insurance company cover a rental car after an accident?</h3>*/}
                                {/*<p>Rental reimbursement coverage will help you pay for a rental car as part of a covered auto insurance claim. Refer to your own auto insurance policy for details, as coverage and limits vary by the insurance policy.</p>*/}
                                {/*<h3>I am under the age of 25. Can I rent a car if my vehicle is in the shop?</h3>*/}
                                {/*<p>Yes.</p>*/}
                                {/*<h3>What cars can I rent when under 25?</h3>*/}
                                {/*<p>Hotelwaze renters under the age of 25 may rent any car except those from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</p>*/}
                                {/*<h3>Can I upgrade my rental car while my vehicle is in the shop?</h3>*/}
                                {/*<p>Yes, if you would like to rent a vehicle in a higher class than reserved, check with the Rental Partner on availability and cost to upgrade. If we are billing an insurance company, you may have to pay out of pocket for the difference</p>*/}
                                {/*<h2>General Car Rental Questions</h2>*/}
                                {/*<h3>What are the requirements for Hotelwaze renting cars in the Philippines?</h3>*/}
                                {/*<ul>*/}
                                {/*    <li>You should be 21 years old and above.</li>*/}
                                {/*    <li>You should have a valid driver&lsquo;s license.</li>*/}
                                {/*    <li>You should be able to provide an acceptable form of payment.</li>*/}
                                {/*</ul>*/}
                                {/*<h3>What is an International Driving Permit?</h3>*/}
                                {/*<p>An International Driving Permit is a translation of your national driving license. The IDP allows motorists to drive vehicles in foreign countries. You must always have your IDP along with your national license at all times.</p>*/}
                                {/*<h3>What are your age requirements for renting in the Philippines?</h3>*/}
                                {/*<p>While every rental car company has its own age requirement to rent a vehicle, Hotelwaze&lsquo;s minimum age is 21 throughout the Philippines.</p>*/}
                                {/*<h3>What cars can I rent when I am under 25 years old?</h3>*/}
                                {/*<p>Hotelwaze renters under the age of 25 may rent any car except those from the Dream Cars, Prestige, and Adrenaline collections, and certain specialty vehicles.</p>*/}
                                {/*<h3>If I am a person with a disability and do not have a driver&lsquo;s license, can I rent a car from Hotelwaze?</h3>*/}
                                {/*<p>If the reason for not having a driver’s license is your disability, you may still rent a car as long as you are accompanied by a surrogate driver with a driver&lsquo;s license. Minimum age restrictions and other normal rental qualifications apply, but there is no additional charge for the surrogate driver and the surrogate driver does not need to produce a credit card or otherwise be required to meet our financial underwriting requirements.</p>*/}
                                {/*<h2>Payments</h2>*/}
                                {/*<h3>What forms of payment are accepted for renting a car?</h3>*/}
                                {/*<ul>*/}
                                {/*    <li>Credit card</li>*/}
                                {/*    <li>Debit card</li>*/}
                                {/*</ul>*/}
                                {/*<h3>Does Hotelwaze accept gift cards?</h3>*/}
                                {/*<p>No. Hotelwaze does not accept gift cards as a form of payment for a rental vehicle.</p>*/}
                                {/*<h3>How much is a rental car?</h3>*/}
                                {/*<p>The cost of a rental car depends on many factors and can vary greatly. These factors include:</p>*/}
                                {/*<ul>*/}
                                {/*    <li>The length of time you are renting the car</li>*/}
                                {/*    <li>Car class selected</li>*/}
                                {/*    <li>Rental location</li>*/}
                                {/*    <li>Insurance products</li>*/}
                                {/*    <li>Additional products selected</li>*/}
                                {/*</ul>*/}
                                {/*<h3>Is a car rental deposit required?</h3>*/}
                                {/*<p>Yes. The deposit amount varies by the exact price of the car rented.</p>*/}
                                {/*<h3>Can I pay for the rental of a car for another individual?</h3>*/}
                                {/*<p>The renter of the vehicle must be present to sign the rental agreement and provide their debit card, credit card, or proof of payment at the pickup. The renter cannot provide a voucher, credit, or debit card belonging to someone else for their use.</p>*/}
                                {/*<p>If you wish to pay for the rental car, but have someone else drive it, you can rent the vehicle in your name and add them as an additional driver. In order to add an additional driver, they would have to meet all of our additional driver requirements</p>*/}
                                {/*<h3>How do refunds work with the different methods of payment?</h3>*/}
                                {/*<p>When you arrive at the location to pick up your vehicle, we collect the full cost of the rental and a security deposit. The amount of the deposit will vary, based on the cost of the rental. Once you return the vehicle, we will refund your security deposit in full, unless there are additional unplanned charges – such as fuel replacement, vehicle damage, or a late return.</p>*/}
                                {/*<p>The time it takes to receive your refund is based on the method of payment used to pay for your rental.</p>*/}
                                {/*<p>If you pay by credit card, the full cost of the rental and the security deposit will be authorized on your card when you pick up your vehicle. When you return the vehicle, we immediately release the authorization and only charge your card the full amount of the rental.</p>*/}
                                {/*<p>If you pay by debit card, the full cost of the rental and security deposit will be charged to your checking account when you pick up your vehicle. Once the vehicle is returned, Hotelwaze will refund your checking account the amount of the deposit.</p>*/}
                                {/*<p>The time it takes to post the refund to your account will depend on your bank. Typically, you should see a refund in approximately 5 to 10 business days. If you do not see your refund after 10 business days, please call us, so we can review your charges with you.</p>*/}
                                {/*<h3>Will there be an additional charge if I am late returning the rental vehicle?</h3>*/}
                                {/*<p>There is a 30-minute grace period for car rental returns.</p>*/}
                                {/*<p>If the vehicle is returned within 2 hours after the 30-minute grace period, additional hourly charges will apply. Hourly charges for your location and rental can be found on your rental contract.</p>*/}
                                {/*<p>If you return the vehicle 2 hours and 30 minutes or more beyond the set return date and time, you will be charged for an additional day of rental.</p>*/}
                                {/*<p>Please note that a vehicle that is returned after the Rental Parntner&lsquo;s business hours will not be checked in until the next business day. If returning the car after business hours but the receiver is not available, the customer is responsible for the vehicle until its satisfactory return to the receiver.</p>*/}
                                {/*<h2>Car Pick Up and Return</h2>*/}
                                {/*<h3>Will I be notified before my booking contract ends?</h3>*/}
                                {/*<p>We will advise you through the Hotelwaze app notification, via mobile, and via email 3 hours before your booking contract termination so you will have enough time to make adjustments to your booking contract.</p>*/}
                                {/*<h3>What will happen if my booking contract has ended and I did not inform the Rental Partner that I will be extending my booking?</h3>*/}
                                {/*<p>You have 24 hours after your booking contract has ended to inform us about any changes in your booking so we can take appropriate actions.</p>*/}
                                {/*<h3>How do I change or cancel my booking contract if I have not picked up the vehicle yet?</h3>*/}
                                {/*<p>You can view, modify, or cancel your reservation using the Hotelwaze app.</p>*/}
                                {/*<p>If you modify your pick-up or drop-off location, date, or time, this may result in a change to your rates, taxes, surcharges, or underage fees. Please see your new rate quote when you verify your reservation.</p>*/}
                                {/*<h3>Will I be charged if I cancel my reservation?</h3>*/}
                                {/*<p>If you prepaid for your vehicle, the following conditions will apply:</p>*/}
                                {/*<ul>*/}
                                {/*    <li>If you cancel your booking more than 1 day (24 Hours) before your specified pick-up time, you will receive a full refund minus a cancellation fee of P200.</li>*/}
                                {/*    <li>If you cancel your booking less than 1 day (24 Hours) before your specified pick-up time, you will receive a full refund minus a cancellation fee of P500.</li>*/}

                                {/*</ul>*/}
                                {/*<h3>How will the Car Rental pick me up?</h3>*/}
                                {/*<p>Once your location for pick up is confirmed the Car Rental driver will meet you at the exact address of your location.</p>*/}
                                {/*<h3>How can I return my rental vehicle if the person is not available?</h3>*/}
                                {/*<p>Our Rental Partners should always be available to pick up your rented vehicle. In cases where they are unable to pick up your rented vehicle, you can contact Hotelwaze so that our customer support team can assist you.</p>*/}
                                {/*<h3>I would like to keep my rental vehicle for a few days longer. Is that possible?</h3>*/}
                                {/*<p>In order to get you in the right direction and to make sure your rental is extended correctly, please refer to your Hotelwaze app account section on how to extend the days .</p>*/}
                                {/*<h3>I want to return my car early, is there a penalty to do so?</h3>*/}
                                {/*<p>None. You will only be charged for the days you had the vehicle (excluding prepaid reservations). If the Rental Partner is unavailable when you return the rented vehicle or you are trying to return the vehicle to a different location.</p>*/}
                                {/*<h3>Airport locations</h3>*/}
                                {/*<p>We will allow returns after business hours and we have procedures in place for your early or late return. Please check with the Rental Partner when picking up your rented vehicle for the exact procedure.</p>*/}
                                {/*<p>Please that vehicles should be returned to the same location where you picked it up unless prior arrangements have been made with the original pick up and drop off location.If you drop off your rental vehicle at the airport but did not originally pick up your vehicle at the airport, an additional drop fee may be charged.</p>*/}
                                {/*<h3>Non-airport locations</h3>*/}
                                {/*<p>Require that their rental vehicles be returned to the same location where picked up.</p>*/}
                                {/*<p>If you want to return a vehicle when the rental partner is closed or unavailable, you must check with them when picking up your vehicle to determine if an &ldquo;after hours&rdquo; service dropbox is available. Doing so will help you avoid additional charges.</p>*/}
                                {/*<p>Please Note: A vehicle that is returned after hours will not be checked in until the next business day.If returning after hours when a car rental is close or unavailable, the customer is responsible for the vehicle until the satisfactory check-in of the rental vehicle the next business day.</p>*/}
                                {/*<h3>What if my flight is delayed?</h3>*/}
                                {/*<p>Reservations are valid for 24 hours from the scheduled time of pick-up for delayed flights and charges will not begin until the time of pick-up.Delivery will remain open for up to 2 hours to accommodate delayed customers.</p>*/}
                                {/*<h3>When booking your reservation on hotelwaze app you must include your airline and flight information. Providing our app with your flight information allows our hotelwaze app to do the automatic calculation for your convenience.</h3>*/}
                                {/*<h3>Do I need to refuel the vehicle before returning? Can I prepay for fuel?</h3>*/}
                                {/*<p>Customers may refuel the vehicle to the same fuel level upon picking up the vehicle. If a customer chooses not to refuel the vehicle to the same fuel level, they will be charged the local Hotelwaze car rental partner&lsquo;s rate which is typically above the local pump price.A full tank of gas is not guaranteed.</p>*/}
                                {/*<h3>Can I add an additional driver to my rental?</h3>*/}
                                {/*<p>Any additional driver will pay a daily fee. Renter&lsquo;s who meet the same age and driver’s license requirements as the renter are authorized drivers at no additional charge. Any additional authorized drivers must appear at the time of rental and meet age and driver’s license requirements.</p>*/}
                                {/*<p>An additional charge of P75 per day for each additional authorized driver will be added to the cost of the rental unless other contractual conditions apply.</p>*/}
                                {/*<h2>Booking</h2>*/}
                                {/*<h3>Can I do advance booking on the app?</h3>*/}
                                {/*<p>Yes.</p>*/}
                                {/*<h3>Do I need Credit Card to rent a car?</h3>*/}
                                {/*<p>In some cases, you are only required to use a credit card for a security deposit purpose. Renters will need to provide a credit card with sufficient funds to cover the cost of the rental plus.</p>*/}
                                {/*<h2>Cancellation</h2>*/}
                                {/*<h3>Do I get charged for canceling my car booking?</h3>*/}
                                {/*<p>It is free of charge for cancellations made online via Car Booking within 5 Minutes after the rental starts.</p>*/}
                                {/*<h3>What will happen if I cancel my booking after 5 minutes?</h3>*/}
                                {/*<p>Cancellations after 5 Minutes incur a non-refundable maximum amount of P200 Philippine currency.</p>*/}
                                {/*<h2>Friendly Pets</h2>*/}
                                {/*<h3>What is your pet policy?</h3>*/}
                                {/*<p>Pets are allowed in rental vehicles. Customers need to keep pets crated and return their rental car in clean condition and free of pet hair to avoid cleaning/detailing fees. Service animals used by customers with disabilities are allowed in the vehicle without a carrier.</p>*/}
                                {/*<h2>Rental Vehicles, Gadgets and Protection Products</h2>*/}
                                {/*<h3>Do car rentals provide additional equipment such as child safety seats, or GPS?</h3>*/}
                                {/*<p>Due to insurance rules, you will be required to fit the seat in the car.</p>*/}
                                {/*<p>Roof racks, Wi-Fi devices, and Navigation System - GPS Are available in some locations, must be ordered at the time of booking.</p>*/}
                                {/*<p>May be unavailable for some vehicles.</p>*/}
                                {/*<p>All the above-mentioned equipment is subject to availability in some locations, even when booked in advance. No charge made locally if unavailable.</p>*/}

                                {/*<h3>Child seats</h3>*/}
                                {/*<p>Mandatory in most countries, must be ordered at the time of booking. Note: Standard of Baby/ child seats in other countries may differ. Taking your own is recommended.</p>*/}

                                {/*<h2>Insurance</h2>*/}
                                {/*<h3>Is personal auto insurance required when booking a car?</h3>*/}
                                {/*<p>You do not need your own car insurance in order to book from Hotelwaze. All our rental partners have their Full Coverage Insurance Plans. We do offer additional several different types of insurance plans to protect you in the event of an accident.</p>*/}
                                {/*<h3>What is the car rental scratch policy?</h3>*/}
                                {/*<p>Minor damage to a rental car, such as scratches, dents, or a chipped windshield are covered by the Damage Waiver. The Damage Waiver is an optional protection product you can purchase with your car rental.</p>*/}
                                {/*<p>If you choose not to purchase the Damage Waiver and the car gets damaged, you may have to pay out of pocket for any needed repairs. Your personal auto insurance may or may not cover the cost of repairs, so it is best to contact your insurance provider before renting a car.</p>*/}
                                {/*<h3>How much is car rental insurance?</h3>*/}
                                {/*<p>The cost of optional car rental insurance and protection products can vary based on the type of vehicle you wish to rent and other factors. To get the most accurate pricing, start a car reservation below or call the Hotelwaze from which you wish to rent.</p>*/}
                                {/*<h3>Can I purchase car rental insurance and other Protection Products from Hotelwaze for a rental car in the Philippines?</h3>*/}
                                {/*<p>Yes.</p>*/}
                                {/*<h2>Additional FAQ</h2>*/}
                                {/*<h3>What should I do if my Rental Car breaks down?</h3>*/}
                                {/*<p>If your rental breaks down due to a mechanical failure and is not drivable, be sure to get to a safe place out of traffic. Call your rental partner so they can help you with the towing process.</p>*/}
                                {/*<h3>Does Hotelwaze have a lost and found?</h3>*/}
                                {/*<p>In case of any lost items inside the rental car, you can directly call your rental partner.</p>*/}
                                {/*<h2>NO SMOKING POLICY</h2>*/}
                                {/*<h3>What is the Hotelwaze policy on smoking in Rental Cars?</h3>*/}
                                {/*<p>Hotelwaze is committed to providing a safe, clean fleet for our Customers and Rental Partners. In order to better deliver on this commitment, all rental cars are non-smoking. A P200 cleaning fee will be charged to the Customer for Rental Cars returned with evidence of smoking.</p>*/}
                                {/*<h3>When will I know if I have been charged the cleaning fee for smoking?</h3>*/}
                                {/*<p>In most cases, you will know after the clearing time of the rental car. If no Return Representative is present you will see the charge on your final receipt.</p>*/}
                                {/*<h2>Additional Information</h2>*/}
                                {/*<h3>How do we use the information?</h3>*/}
                                {/*<p>Hotelwaze explains further the information that is being collected and how they are being used mainly for protection, safety, and security.</p>*/}
                                {/*<h3>Safety is the top priority</h3>*/}
                                {/*<p>Hotelwaze gives importance to safety and promotes protected car booking habits. This can only be attained by providing information that is needed for secured and stress-free travels.</p>*/}
                                {/*<h3>Users are in control</h3>*/}
                                {/*<p>Hotelwaze takes care of its users and gives them the option to share location, to personalize their app, and to even delete their account anytime using any compatible device.</p>*/}
                            </PageWrapper>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default Faqs;
