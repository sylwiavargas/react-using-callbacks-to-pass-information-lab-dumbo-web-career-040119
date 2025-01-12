import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {selectedColor: '#FFF'}

  newSelectedColor = (colorString) => {
    this.setState({
      selectedColor: colorString
    })
  }

  changeColor = () => {
    return this.state.selectedColor
  }

  genRow = (vals) => (vals.map((val, idx) =>
        <Cell
        key={idx}
        color={val}
        changeColor={this.changeColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector
          setColor={this.newSelectedColor}
        />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
