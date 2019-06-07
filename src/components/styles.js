import styled from 'styled-components';
import { Grid, Flex } from '@leviathan/components/elements';
import TextElement from '@leviathan/atoms/text';
import HeadingElement from '@leviathan/atoms/heading';
import { font, colour } from '@leviathan/utils/theme';

export const Container = styled(Grid)`
    width: 90vw;
`;

export const Heading = styled(HeadingElement)`
    @media screen and (max-width: 1375px) {
        font-size: ${font.size.huge};
    }
    @media screen and (max-width: 875px) {
        font-size: ${font.size.large};
    }
`;

export const Text = styled(TextElement)`
    @media screen and (max-width: 875px) {
        font-size: ${font.size.small};
    }
`;

export const InformationGrid = styled(Grid)`
    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto auto auto;
    }
`;

export const InformationFlex = styled(Flex)`
    transition: all 0.3s;
    &:hover {
        fill: ${colour.blue};
        color: ${colour.blue};
    }
`;
