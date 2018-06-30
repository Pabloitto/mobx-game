import React, { Component } from 'react'

class Wrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { newProps: {} }
    this.listeners = []
    this.events = []
  }
  componentDidMount () {
    this.listeners = this.props.streams.filter(s => s.observable).map((stream) => {
      return stream.observable().subscribe((data) => {
        const { newProps } = this.state
        newProps[stream.propName] = data
        this.setState({ newProps })
      })
    })
    this.props.streams.filter(s => s.event).forEach((stream) => {
      const { newProps } = this.state
      newProps[stream.propName] = (params, callback) => {
        this.listeners.push(stream.event(params).subscribe(callback))
      }
      this.setState({ newProps })
    })
  }
  componentWillUnmount () {
    this.listeners.forEach(subscription => subscription.unsubscribe())
    this.listeners = []
    this.events = []
  }
  render () {
    return React.cloneElement(this.props.children, Object.assign({}, this.state.newProps))
  }
}

const ObservableToProps = (Component, streams) => () => {
  return <Wrapper streams={streams}>
    <Component />
  </Wrapper>
}

export {
  ObservableToProps
}
