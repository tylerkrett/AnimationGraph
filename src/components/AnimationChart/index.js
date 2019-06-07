import React, { Component } from "react";
import { string } from "prop-types";
import { curveBasis } from "@vx/curve";
import { AreaClosed } from "@vx/shape";
import { scaleTime, scaleLinear } from "@vx/scale";
import { ParentSize } from "@vx/responsive";
import { LinearGradient } from "@vx/gradient";
import { genDateValue } from "@vx/mock-data";
import { extent, max } from "d3-array";
import { Spring } from "react-spring";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

import logo from "../../images/logo.svg";
import { colour } from "../../utils";

import {
  Wrapper,
  AnimationLineChart,
  Container,
  GraphContainer,
  AnimationWrapper,
  Image,
  Text
} from "./styles";

const data = genDateValue(20);
const x = d => d.date;
const y = d => d.value;

const Graph = ({ interpolate, data, xScale, yScale }) => (
  <AreaClosed
    data={data.map((d, i) => ({ ...d, value: interpolate[i] }))}
    xScale={xScale}
    yScale={yScale}
    x={x}
    y={y}
    strokeWidth={2}
    stroke={colour.blue}
    fill={"url(#leviathan-graph)"}
    curve={curveBasis}
  />
);

class AnimationGraph extends Component {
  static defaultPropTypes = {
    introduction: string
  };

  static defaultProps = {
    introduction: "INTRODUCING"
  };

  state = {
    toggle: true,
    animation: false
  };

  componentDidMount() {
    const { animation } = this.state;
    return setTimeout(() => this.setState({ animation: !animation }), 1500);
  }

  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { animation } = this.state;
    const { introduction, background } = this.props;
    return (
      <Container position="relative" height="100%">
        <AnimationWrapper zIndex={90}>
          <Fade left duration={1250}>
            <Text>
              <Fade duration={1350} left cascade>
                {introduction}
              </Fade>
            </Text>
          </Fade>
        </AnimationWrapper>

        <AnimationWrapper zIndex={100}>
          <Flip left duration={1250} when={animation}>
            <Image src={logo} alt="LeviathanFM" />
          </Flip>
        </AnimationWrapper>

        <ParentSize>
          {({ width, height }) => {
            const xScale = scaleTime({
              range: [0, width],
              domain: extent(data, x)
            });
            const yMax = max(data, y);
            const yScale = scaleLinear({
              range: [height / 2, 0],
              domain: [0, yMax],
              nice: true
            });
            const interpolate = data.map(d => Math.random() * yMax);
            const extra = { data, xScale, yScale };
            return (
              <GraphContainer
                position="relative"
                height="100%"
                zIndex={80}
                background={background || colour.grey.light}
              >
                <Wrapper background={background} onClick={this.toggle}>
                  <AnimationLineChart width={width} height={height / 2}>
                    <LinearGradient
                      id="leviathan-graph"
                      from={colour.blue}
                      to={"transparent"}
                    />
                    <g>
                      <Spring
                        to={{ interpolate }}
                        {...extra}
                        children={Graph}
                      />
                    </g>
                  </AnimationLineChart>
                </Wrapper>
              </GraphContainer>
            );
          }}
        </ParentSize>
      </Container>
    );
  }
}
export default AnimationGraph;
