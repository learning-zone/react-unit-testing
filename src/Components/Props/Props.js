import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Props extends Component {

    render() {
        const { header, desc } = this.props

        return (
            <div data-test='PropsComponent'>
                <h1 data-test='header'>{header}</h1>
                <p data-test='desc'>{desc}</p>
            </div>
        )
    }
}

Props.propTypes = {
   header: PropTypes.string,
   desc: PropTypes.string
}

export default Props
