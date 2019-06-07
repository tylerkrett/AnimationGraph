import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@leviathan/atoms/link';
import { colour } from '@leviathan/utils/theme';
import { Flex, Grid } from '@leviathan/components/elements';
import Gradient from '@leviathan/atoms/gradient';
import Underline from '@leviathan/atoms/underline';
import Layer from '@leviathan/atoms/react-spring/layer';
import TextElement from '@leviathan/atoms/text';
import { Heading, Container, Text } from '../styles';

const styles = theme => ({
    avatarCustom: {
        height: 100,
        width: 100,
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            height: 150,
            width: 150
        },
        [theme.breakpoints.up('lg')]: {
            height: 200,
            width: 200
        }
    }
});

const MeetTheTeam = ({ classes }) => (
    <Layer offset={3} background={'rgba(16, 31, 168, 0.1)'} factor={1} speed={1} index={12}>
        <Gradient opacity="0.5" start={colour.blue} end={'transparent'}>
            <Flex width="100%" height="100%" justifyContent="space-around" alignItems="center">
                <Container
                    zIndex="15"
                    layout="1fr"
                    background="rgb(255, 255, 255)"
                    p="20px 40px"
                    position="absolute"
                    alignItems="center">
                    <Heading fontSize="40px">Meet The Team</Heading>
                    <Underline start={colour.blue} end={'white'} />

                    <Text fontSize="1em">
                        Bryan Fitzgerald and and John Hayden are seasoned and successful Goldman
                        Sachs traders.
                    </Text>
                    <Text fontSize="1em">
                        Darren Krett moved from London to Chicago having opened Mako’s US operations
                        and subsequently traded as an independent Local and with Balyasny Asset
                        management.
                    </Text>

                    <Flex
                        cursor="pointer"
                        alignItems="center"
                        flexWrap="wrap"
                        justifyContent="space-evenly">
                        <Tooltip title="Cargill, Goldman Sachs, Peak 6, Tradelink, Ketchum">
                            <Flex cursor="pointer" alignItems="center" flexDirection="column">
                                <Avatar
                                    className={classNames(classes.avatar, classes.avatarCustom)}
                                    alt="bryan"
                                    src="/images/homepage/bryan.jpg"
                                />
                                <Grid layout="1fr">
                                    <Text fontSize="20px" textAlign="center">
                                        Bryan Fitzgerald
                                    </Text>

                                    <Underline margin="0 auto" start={colour.blue} end={'white'} />

                                    <Link
                                        fontSize="0.8em"
                                        display="block"
                                        textAlign="center"
                                        hover={colour.blue}
                                        href="mailto:Bryan.Fitzgerald@leviathanfm.com?Subject=Contact Leviathan">
                                        Bryan.fitzgerald@leviathanfm.com
                                    </Link>

                                    <Text textAlign="center" fontSize="0.8em">
                                        T: +1 312 341 7371 / +1 773 230 3217
                                    </Text>
                                </Grid>
                            </Flex>
                        </Tooltip>
                        <Tooltip title="BNP, Cooper Neff, Peak6, Tradelink, Ketchum">
                            <Flex cursor="pointer" alignItems="center" flexDirection="column">
                                <Avatar
                                    className={classNames(classes.avatar, classes.avatarCustom)}
                                    alt="john"
                                    src="/images/homepage/john.jpg"
                                />
                                <Grid layout="1fr">
                                    <Text fontSize="20px" textAlign="center">
                                        John Hayden
                                    </Text>

                                    <Underline margin="0 auto" start={colour.blue} end={'white'} />

                                    <Link
                                        display="block"
                                        textAlign="center"
                                        fontSize="0.8em"
                                        hover={colour.blue}
                                        href="mailto:john.hayden@leviathanfm.com?Subject=Contact Leviathan">
                                        John.Hayden@leviathanfm.com
                                    </Link>

                                    <Text textAlign="center" fontSize="0.8em">
                                        T: +1 312 341 7371 / +1 773 230 3217
                                    </Text>
                                </Grid>
                            </Flex>
                        </Tooltip>
                        <Tooltip title="FCT, MAKO, Kapital Trading, Balyasny Asset Management, Liquid Capital Management, Mauna Kea Investments">
                            <Flex m="10px 0" alignItems="center" flexDirection="column">
                                <Avatar
                                    className={classNames(classes.avatar, classes.avatarCustom)}
                                    alt="darren"
                                    src="/images/homepage/darren.jpg"
                                />
                                <Grid layout="1fr">
                                    <Text fontSize="20px" textAlign="center">
                                        Darren Krett
                                    </Text>

                                    <Underline margin="0 auto" start={colour.blue} end={'white'} />
                                    <Link
                                        fontSize="0.8em"
                                        display="block"
                                        textAlign="center"
                                        hover={colour.blue}
                                        href="mailto:darren.krett@leviathanfm.com?Subject=Contact Leviathan">
                                        Darren.Krett@leviathanfm.com
                                    </Link>
                                    <Text textAlign="center" fontSize="0.8em">
                                        T: +1 312 341 7371 / +1 773 230 3217
                                    </Text>
                                </Grid>
                            </Flex>
                        </Tooltip>
                    </Flex>
                    <TextElement fontSize="10px">
                        Legal Disclaimer: The information provided in the Leviathan website is for
                        informational purposes only. It should not be considered legal or financial
                        advice. You should consult with a financial advisor professional to
                        determine what may be best for your individual needs. Leviathan Financial
                        Management does not make any guarantee or other promise as to any results
                        that may be obtained from using our content. No one should make any
                        investment decision without first consulting his or her own financial
                        advisor and conducting his or her own research and due diligence. To the
                        maximum extent permitted by law, Leviathan Financial Management disclaims
                        any and all liability in the event any information, commentary, analysis,
                        opinions, advice and/or recommendations prove to be inaccurate, incomplete
                        or unreliable, or result in any investment or other losses. Content
                        contained on or made available through the website is not intended to and
                        does not constitute legal advice or investment advice. Your use of the
                        information on the website or materials linked from the Web is at your own
                        risk.
                    </TextElement>
                </Container>
            </Flex>
        </Gradient>
    </Layer>
);

export default withStyles(styles)(MeetTheTeam);
