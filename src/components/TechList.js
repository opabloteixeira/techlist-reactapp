import React, { Component } from 'react'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
class TechList extends Component {
  //dar valores default
  static defaultProps = {
    item: 'teste item default',
  }

  //para dar tipos a propriedades e deixar obrigatório ou não
  static propType = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
  }

  state = {
    newTech: '',
    techs: [],
  }
  //executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({
        techs: JSON.parse(techs),
      })
    }
  }
  //executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    //tem acesso a this.props this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  //executado quando o componente deixa de existir
  componentWillUnmount() {}

  handleChange = e => {
    this.setState({
      newTech: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    })
  }

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech),
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
        <span>{this.props.item}</span>
      </form>
    )
  }
}

TechList.defaultProps = {
  item: 'teste item default',
}

export default TechList
