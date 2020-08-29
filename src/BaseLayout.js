import React, { ReactDOM } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class BaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children
    this.state = { navBarTheme: 'clear' }
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  handleScrollEvent = (e) => {
    
    const heroSize = window.innerHeight * 0.5
    const element = e.srcElement.scrollingElement

    element.scrollTop > heroSize ? 
      this.setState({navBarTheme: 'solid'}) : this.setState({navBarTheme: 'clear'})
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScrollEvent)
  }
  
  render = () => {
    return(
      <div onScroll={ this.handleScrollEvent }>
        
        <NavBar theme={ this.state.navBarTheme } />
        { this.children }
        <Footer/>
      </div>
    )
  }
}

export default BaseLayout;