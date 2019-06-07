import React from 'react';
import { colour } from '@leviathan/utils/theme';
import { Flex, Block } from '@leviathan/components/elements';
import Gradient from '@leviathan/atoms/gradient';
import Underline from '@leviathan/atoms/underline';
import Layer from '@leviathan/atoms/react-spring/layer';
import { Consumer } from '@leviathan/components/modal';
import TextElement from '@leviathan/atoms/text';
import { ReactComponent as LineChart } from '@leviathan/assets/icons/linechart.svg';
import { ReactComponent as ChartSearch } from '@leviathan/assets/homepage/chart-search.svg';
import { ReactComponent as ChartCurve } from '@leviathan/assets/homepage/historical-curve.svg';
import { ReactComponent as RiskAnalysis } from '@leviathan/assets/homepage/risk-analysis.svg';
import { ReactComponent as Ranking } from '@leviathan/assets/homepage/ranking.svg';
import { ReactComponent as Events } from '@leviathan/assets/homepage/event.svg';
import { ReactComponent as WhiteLabel } from '@leviathan/assets/homepage/white-label.svg';
import { ReactComponent as InterestRate } from '@leviathan/assets/homepage/interest.svg';
import { ReactComponent as EyeIcon } from '@leviathan/assets/icons/eye.svg';
import { ReactComponent as DatabaseIcon } from '@leviathan/assets/icons/database.svg';

import { Heading, Container, Text, InformationGrid, InformationFlex } from '../styles';

const openModal = (handleModal, props) =>
    handleModal({
        title: props.title,
        backgroundColour: colour.blue,
        colour: 'white',
        Component: () => (
            <Block p="10px">
                {props.text.map(text => (
                    <TextElement key={`${text}`} fontSize="1em">
                        {text}
                    </TextElement>
                ))}
            </Block>
        )
    });

const About = () => (
    <Layer background={'rgba(16, 31, 168, 0.1)'} offset={2} factor={1} speed={1} index={12}>
        <Gradient opacity="0.5" start={colour.blue} end={'transparent'}>
            <Flex width="100%" height="100%" justifyContent="space-around" alignItems="center">
                <Consumer>
                    {({ handleModal }) => (
                        <Container
                            zIndex="15"
                            layout="1fr"
                            background="rgb(255, 255, 255)"
                            p="20px 40px"
                            position="absolute"
                            alignItems="center">
                            <Heading fontSize="40px">About Us</Heading>

                            <Underline start={colour.blue} end={'white'} />

                            <Text fontSize="1em">
                                Leviathan Financial Management was founded in 2015 by Bryan
                                Fitzgerald, John Hayden and Darren Krett as a means to enhance and
                                simplify option analysis by drawing on their 90 years of combined
                                experience. With a deep bench of technical and back office support,
                                clients receive direct access to unique research tools through our
                                online portal, allowing them to identify outstanding risk-reward
                                opportunities and the ability to expertly capture them.
                            </Text>

                            <Heading mt="10px" fontSize="30px">
                                Applications
                            </Heading>

                            <Underline width="200px" start={colour.blue} end={'white'} />

                            <InformationGrid
                                m="20px 0"
                                alignItems="end"
                                layout="auto auto auto auto auto auto auto auto auto auto">
                                <InformationFlex
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Option Analysis',
                                            text: [
                                                'Leviathan looks back at historical data on an actual or constant maturity basis. Input any combination or ratios of strikes to either view a specific trade idea or even an entire position to see where its current true value lies.',
                                                'Leviathan also has the ability to look at a structure or position in a very specific time period. This gives the trader the ability to compare a structure to similar past environments.'
                                            ]
                                        })
                                    }
                                    cursor="pointer"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center">
                                    <ChartSearch height="30px" width="30px" />
                                    <Text mt="5px" textAlign="center" fontSize="1em">
                                        Option Analysis
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Charting Tools',
                                            text: [
                                                'Leviathan has an extensive library of charting tools and technical studies that far exceeds and are more robust than those of our competitors.'
                                            ]
                                        })
                                    }>
                                    <LineChart height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Charting Tools
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Historical Curve Cone',
                                            text: [
                                                'View any curve and visually see how it compares to previous days or any given day in history. View it is strike space or delta space.'
                                            ]
                                        })
                                    }>
                                    <ChartCurve height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Historical Curve Cone
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Risk Analysis',
                                            text: [
                                                "Leviathan Heat Maps are forward looking. It is not only important to know the profit and loss at the time of expiration, but to also know how the trade performs on a day-to-day basis with respect to the movement in futures. View a P&L table and different Greeks, and beta adjust futures spreads to analyze the strategy's performance in flattening, steepening, backwardation or contango futures markets."
                                            ]
                                        })
                                    }>
                                    <RiskAnalysis height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Risk Analysis
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Option Ranking',
                                            text: [
                                                'Leviathan has the ability to analyze, in depth, each individual month of every product, on a real time and relative value basis. Analyze calls and puts relative to ATM volatility and ranking it in either percentile or Z-score over a designated period of time.',
                                                'Look at Strangles relative to ATM, Risk Reversals, Implied relative to Realized, 1 week/hourly realized ranges, basis point volatility ratios, and with this data provide a LIVE look at which options are cheap or expensive across every class.'
                                            ]
                                        })
                                    }>
                                    <Ranking height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Option Ranking
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Event Reports',
                                            text: [
                                                'Leviathan’s Event Report application looks at volatility and option performance before and after economic events, such as FOMC, NFP, CPI, or Retail Sales.',
                                                'View the straddle price on the days leading up to an event and compare it to the average straddle price over a custom number of events. The event tool will then show the average immediate impact of that event along with one and two day straddle average decay totals due to the removal of the event premium.'
                                            ]
                                        })
                                    }>
                                    <Events height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Event Reports
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'White Labelling',
                                            text: [
                                                'Share charts with the your own company insignia'
                                            ]
                                        })
                                    }>
                                    <WhiteLabel height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        White Labelling
                                    </Text>
                                </InformationFlex>

                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Interest Rate Bootstrapping',
                                            text: [
                                                'Analyze interest rate bootstraps to estimate where futures will be, given certain probabilities and conversely view the implied probabilities of the current interest rate curve.'
                                            ]
                                        })
                                    }>
                                    <InterestRate height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Interest Rate Bootstrapping
                                    </Text>
                                </InformationFlex>
                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Watchlist',
                                            text: [
                                                'Save your strategies and keep a constant eye on them as the market changes'
                                            ]
                                        })
                                    }>
                                    <EyeIcon height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Watchlist
                                    </Text>
                                </InformationFlex>
                                <InformationFlex
                                    flexDirection="column"
                                    alignItems="center"
                                    cursor="pointer"
                                    justifyContent="center"
                                    onClick={() =>
                                        openModal(handleModal, {
                                            title: 'Database',
                                            text: [
                                                'Our database is the only "clean" and accurate option historical database for all exchange-based futures and options that goes back over 35 years with certain products.'
                                            ]
                                        })
                                    }>
                                    <DatabaseIcon height="30px" width="30px" />
                                    <Text textAlign="center" fontSize="1em">
                                        Database
                                    </Text>
                                </InformationFlex>
                            </InformationGrid>
                        </Container>
                    )}
                </Consumer>
            </Flex>
        </Gradient>
    </Layer>
);

export default About;
