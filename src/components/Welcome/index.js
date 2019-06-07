import React from 'react';
import { colour } from '@leviathan/utils/theme';
import { Flex, Grid } from '@leviathan/components/elements';
import Gradient from '@leviathan/atoms/gradient';
import Underline from '@leviathan/atoms/underline';
import Layer from '@leviathan/atoms/react-spring/layer';

import { Heading, Container, Text } from '../styles';

const Welcome = () => (
    <Layer background={'rgba(16, 31, 168, 0.1)'} offset={1} factor={1} speed={1} index={12}>
        <Gradient opacity="0.5" start={colour.blue} end={'transparent'}>
            <Flex width="100%" height="100%" justifyContent="space-around" alignItems="center">
                <Container
                    zIndex="15"
                    layout="1fr"
                    background="rgb(255, 255, 255)"
                    p="20px 40px"
                    position="absolute"
                    alignItems="center">
                    <Heading fontSize="40px">Welcome</Heading>
                    <Underline start={colour.blue} end={'white'} />

                    <Text fontWeight="bold" fontSize="1.2em">
                        Built by traders-for traders
                    </Text>
                    <Text fontSize="1em">
                        The founders, who each have a highly successful history in trading, decided
                        to transition to the broking side of the business and utilize their
                        experience and expertise to create unique solutions for other traders, swap
                        dealers, bank traders and market makers. We would like to introduce
                        Leviathan.
                    </Text>
                    <Grid mt="10px" p="0" layout="1fr" alignItems="center">
                        <Heading fontSize="25px">Our aim is to add value..</Heading>
                        <Underline width="280px" start={colour.blue} end={'white'} />
                        <Text fontSize="1em">
                            Leviathan is a one of a kind research tool. Leviathan has been built to
                            identify opportunities within the exchange-based option markets.
                            Leviathan is the industry’s premiere option analytics system, providing
                            “clean” and accurate option analytics across all exchange-based futures
                            and options going back over 35 years.
                        </Text>
                    </Grid>
                </Container>
            </Flex>
        </Gradient>
    </Layer>
);

export default Welcome;
