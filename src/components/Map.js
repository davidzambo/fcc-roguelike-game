import React, {Component} from 'react';
import {wall, room} from './styles.css';
import Hero from './actors/Hero';
import Html from './actors/Html';
import Css from './actors/Css';
import Bootstrap from './actors/Bootstrap';
import Js from './actors/Js';
import Jquery from './actors/jQuery';
import Sass from './actors/Sass';
import Reactlogo from './actors/Reactlogo';
import D3 from './actors/D3';
import Node from './actors/Node';
import Express from './actors/Express';
import Mongo from './actors/Mongo';
import Git from './actors/Git';


export default class Map extends Component{
  

  render(){
    
    let blueprint = this.props.blueprint,
        map = '';
    
    map = blueprint.map((row,i) => {
      return <tr key={i}>{ row.map((col,j) => {
        return <td key={j} className={ (col === 1) ? 'wall' : 'room'}>{ }</td>
      }) }</tr>
    });
   
    
    return (
      <div>
        <table>
          <tbody>
            { map }
          </tbody>
        </table>
        <Html />
        <Css />
        <Bootstrap />
        <Js />
        <Jquery />
        <Sass />
        <Reactlogo />
        <D3 />
        <Node />
        <Express />
        <Mongo />
        <Git />
      </div>
    );
  }
}