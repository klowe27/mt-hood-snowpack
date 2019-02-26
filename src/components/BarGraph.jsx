import React from 'react';
import Bar from './Bar';
import { DataSet } from './assets/data.js';
import {v4} from 'uuid';
import './assets/styles.css';

class BarGraph extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      snowLevels: DataSet
    };
    this.sortByYear = this.sortByYear.bind(this);
    this.sortByLevel = this.sortByLevel.bind(this);
    this.calculatePercent = this.calculatePercent.bind(this);
  }
  
  componentDidMount(){
    this.sortByYear();
  }
    
  sortByYear(){
    let sortedData = this.state.snowLevels.slice();
    sortedData.sort(function (a, b) {
      return b.year - a.year;
    });
    this.setState({snowLevels: sortedData});
  }
  
  sortByLevel(){
    let sortedData = this.state.snowLevels.slice();
    sortedData.sort(function (a, b) {
      return b.level - a.level;
    });
    this.setState({snowLevels: sortedData});
  }
  
  calculatePercent(number){
    return (number/521)*100;
  }

  render() {
    return (
      <div className='container'>
        <h2>Annual Snow Water Equivalent (Sum of Monthly Values)</h2>
        <div className='sortButtons'>
          <button onClick={this.sortByYear}>Sort By Year</button>
          <button onClick={this.sortByLevel}>Sort By Level</button>
        </div>
        {this.state.snowLevels.map((data)=>
          <Bar 
            year={data.year}
            level={data.level}
            percent={this.calculatePercent(data.level)}
            key={v4()}/>
        )};
      </div>

    );
  }
}

export default BarGraph;
