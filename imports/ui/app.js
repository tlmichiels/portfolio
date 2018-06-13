import React, { Component } from 'react';
import PropTypes from 'prop-types';

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color': '#FF4848', 'transform': 'translate(125px,0px)'});
    else $(this).find('.test1').css({'background-color': '#ff9e9e', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': '#FF4848', 'transform': 'translate(105px,60px)'});
    else $(this).find('.test2').css({'background-color': '#ff9e9e', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': '#FF4848', 'transform': 'translate(60px,105px)'});
    else $(this).find('.test3').css({'background-color': '#ff9e9e', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': '#FF4848', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test4').css({'background-color': '#ff9e9e', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});




export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	ScrollToPortfolio(){	
		var i = 10;
		var int = setInterval(function() {
			window.scrollTo(0, i);
			i += 50;
			if (i >= 700) clearInterval(int);
			}, 20);
	}

	render(){

		return(
			<div>
				<Navbar/>
				<div className="paralax_top">
					<div className="heading">
						<div className="top-square1"></div>
						<div className="top-square2"></div>
						<br/>
						<div className="left-square"></div>
							<span className="colorchange-red">T</span>
							<span className="colorchange-yellow">h</span>
							<span className="colorchange-orange">o</span>
							<span className="colorchange-lightgreen">m</span>
							<span className="colorchange-green">a</span>
							<span className="colorchange-purple">s</span>
							<span> </span>
							<span className="colorchange-yellow">M</span>
							<span className="colorchange-purple">i</span>
							<span className="colorchange-cyan">c</span>
							<span className="colorchange-red">h</span>
							<span className="colorchange-green">i</span>
							<span className="colorchange-lightgreen">e</span>
							<span className="colorchange-orange">l</span>
							<span className="colorchange-red">s</span>
						<div className="right-square"></div>
							<div className="subheading">Front-End Developer & Designer</div>
						<div className="bottom-square1"></div>
						<div className="bottom-square2"></div>
					</div>
					<br/>
			


					<div className="center_dat_button">
						<button className="portfolio_button" onClick={this.ScrollToPortfolio.bind(this)}>
						Portfolio
						</button>
					</div>		
				</div>

				<div className="paralax_belowfold" id="Portfolio">
					<div className="fold_heading">Portfolio</div><br/>
					<Portfolio1/>
				</div>

				
			</div>
			);
	}
}




class Portfolio1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="portfolio"> 
				<a href="/EugeneSaturdayMarket"><img className="portfolio_row1" src="/EugeneSaturdayMarket.jpg"/></a>
				<a href="/BillAndTims"><img className="portfolio_row1" src="/BillAndTims.jpg"/></a>
				<a href="/SheddInstitute"><img className="portfolio_row1" src="/SheddInstitute.jpg"/></a>

				<br/>
				<a href="/RonGastineau"><img className="portfolio_row1" src="/RonGastineau.jpg"/></a>
				<a href="/WebfootPainting"><img className="portfolio_row1" src="/WebfootPainting.jpg"/></a>
				<a href="/WesternFinancial"><img className="portfolio_row1" src="/WesternFinancial.jpg"/></a>
				<div className="scroll"></div>
			
			</div>
			);
	}
}





class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div className="shrink_nav">
				<div className="parent2">
				  <a href="http://localhost:3000"><div className="test1"><i className="fa fa-home fa-2x"></i></div></a>
				  <a href="http://localhost:3000/#Portfolio"><div className="test2"><i className="fa fa-th fa-2x" id="move_slightly"></i></div></a>
				  <a href="https://www.google.com"><div className="test3"><i className="fa fa-user fa-2x"></i></div></a>
				  <a href="https://www.google.com"><div className="test4"><i className="fa fa-envelope fa-2x"></i></div></a>
				  <div className="mask2"><i className="fa fa-navicon fa-3x"></i></div>
				</div>
			</div>
			);
	}
}















