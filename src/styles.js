import styled, { css } from "styled-components";
import { colour, font } from "./utils";
import * as ss from "styled-system";

export const defaultStyles = css`
  ${ss.fontSize};
  ${ss.color};
  ${ss.space};
  ${ss.border};
  ${ss.width};
  ${ss.height};
  box-sizing: border-box;
  transform: ${({ transform }) => transform};
  text-align: ${({ textAlign = "inherit" }) => textAlign};
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  transition: ${({ transition }) => transition};
  cursor: ${({ cursor }) => cursor};
  z-index: ${({ zIndex }) => zIndex};
  overflow: ${({ overflow }) => overflow};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  background: ${({ background }) => background};
  backgroundsize: ${({ backgroundSize }) => backgroundSize};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  position: ${({ position }) => position};
  opacity: ${({ opacity }) => opacity};
  box-sizing: ${({ boxSizing }) => boxSizing};

  ${({ span }) =>
    span
      ? `
        -ms-grid-column-span: ${span};
        grid-column: auto / span ${span};
    `
      : ""};
`;

export const Block = styled.section`
  ${defaultStyles};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  background: ${({
    background = `repeating-linear-gradient(
        to bottom,
        ${colour.brand},
        white 1px,
        white 30px,
        white 32px
    )`
  }) => background};
  opacity: 0.3;
`;

export const GraphContainer = styled(Block)`
  > div {
    height: 100%;
  }
`;

export const AnimationLineChart = styled.svg`
  position: absolute;
  bottom: 0;
`;

export const Container = styled(Block)``;

export const AnimationWrapper = styled(Block)`
  position: absolute;
  z-index: ${({ zIndex = 3 }) => zIndex};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Text = styled.section`
  padding: 20px 60px;
  background: white;
  border-radius: 60px;
  font-size: 30px;
  fontfamily: ${font.family.body};

  @media screen and (max-width: 1375px) {
    padding: 10px 30px;
    font-size: 22px;
  }
`;

export const Image = styled.img`
  width: 300px;
  padding: 20px 60px;
  background: white;
  border-radius: 60px;

  @media screen and (max-width: 1375px) {
    width: 200px;
    padding: 10px 30px;
  }
`;
