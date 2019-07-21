import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech, onDelete }) => (
  <li>
    {tech}
    <button onClick={onDelete} type="button">
      Excluir
    </button>
  </li>
)

// para dar tipos a propriedades e deixar obrigatório ou não
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem
