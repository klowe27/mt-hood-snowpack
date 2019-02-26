import React from 'react';
import Bar from './Bar';
import SortButtons from './sortButtons';
import { DataSet } from './assets/data.js';
import {v4} from 'uuid';
import './assets/styles.css';

class BarGraph extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      snowLevels: DataSet,
      sortedByYear: true
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
    this.setState({snowLevels: sortedData, sortedByYear: true});
  }
  
  sortByLevel(){
    let sortedData = this.state.snowLevels.slice();
    sortedData.sort(function (a, b) {
      return b.level - a.level;
    });
    this.setState({snowLevels: sortedData, sortedByYear: false});
  }
  
  calculatePercent(number){
    return (number/521)*100;
  }

  render() {
    return (
      <div className='container'>
        <h2>Annual Snow Water Equivalent (Sum of Monthly Values)</h2>
        <SortButtons 
          sortByYear={this.sortByYear}
          sortByLevel={this.sortByLevel}
          sortedByYear={this.state.sortedByYear}
          key={v4()}/>
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
