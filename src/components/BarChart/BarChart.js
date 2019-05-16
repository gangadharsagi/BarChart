import React, {Component} from 'react';
import * as d3 from "d3";
import d3Tip from "d3-tip";
import axios from 'axios/index';
import { formattedDataHelper } from '../../helpers/formattedDataHelper';
import './bar-chart.css';
import { TOTAL } from '../../constants/TOTAL';

export class BarChart extends Component {

  state= {
    data: [],
  };

  async componentDidMount() {
    const response = await this.getData();
    this.setState({
      data: formattedDataHelper(response.data),
    });
    this.drawChart();
  }

  getData = async () => {
    try {
      return await axios.get('/data');
    } catch (error) {
      console.log(error);
    }
  };

  drawChart() {
    const svg = d3.select("body").append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height)
      .style("margin-left", 50),
      width = this.props.width,
      height = this.props.height,
      g = svg.append("g").attr("transform", "translate(" + (this.props.width-40) + "," + 0 + ")");

    const y = d3.scaleLinear()
      .rangeRound([height, 20]);

    const makeYGridLines = () => {
      return d3.axisRight(y)
        .ticks(5)

    };

    y.domain(d3.extent(this.state.data, (d) =>
      (d.score / TOTAL) * 100 )
    );

    g.append("g")
      .attr("class", `grid`)
      .call(makeYGridLines()
        .tickSize(-width))

    const tip = d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html( (d) => "<span style='color:white'>" + d.score + "</span>");

    svg.call(tip);

    d3.selectAll(".tick").each(function(d,i){
      var tick = d3.select(this),
        text = tick.select('text'),
        bBox = text.node().getBBox();

      tick.insert('rect', ':first-child')
        .attr('x', bBox.x)
        .attr('y', bBox.y - 8)
        .attr('height', bBox.height + 16)
        .attr('width', bBox.width + 16)
        .style('padding', '20px')
        .style('fill', 'steelblue');
    });

    svg.append("g")
      .attr("transform", "translate(" + 70 + "," + 20 + ")")
      .selectAll("rect")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d, i) => this.props.height - 3 * d.percentage)
      .attr("width", 30)
      .attr("height", (d, i) => d.percentage * 3)
      .attr("fill", "steelblue")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
