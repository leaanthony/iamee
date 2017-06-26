import React, { Component } from 'react';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import style from './DashboardBanner.css'

class DashboardBanner extends Component {
  render() {
    return (
      <div>
        <h4 className="dashboardRelaxedBanner">{this.props.title}</h4>
      </div>
    )
  }
};

export default DashboardBanner;
