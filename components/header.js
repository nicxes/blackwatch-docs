import Logo from './logo'

export default class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({open: !this.state.open})
  }
  render() {
    return (
      <header className="header container">

        <div className="brand">
          <a href="/">
            <Logo size="40"/>
          </a>
        </div>

        <div className="userbox">
          <span className={this.state.open ? "menu open": "menu"} onClick={ this.handleClick }>
            <span className="line line-top"></span>
            <span className="line line-mid"></span>
            <span className="line line-bot"></span>
          </span>
        </div>

        <style jsx>{`
          .header {
            display: grid;
            grid-template-columns: 50% 50%;
            align-items: center;

            margin: 50px auto;
          }
          .header .userbox {justify-self: end;}
          .header .menu {
            cursor: pointer;
            height: 32px;
            width: 32px;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .header .menu .line {
            height: 2px;
            width: 20px;
            
            background: #ccc;
            border-radius: 3px;
            transition: all 0.1s ease;
          }
          .header .menu:hover .line {background: #fff;}
          .header .menu .line-mid {margin: 5px 0;}

          .header .menu .line-top {
            transform: ${this.state.open ? "translateY(2px) rotate(48deg)": "none"}
          }
          .header .menu .line-mid {
            display: ${this.state.open ? "none": "block"}
          }
          .header .menu .line-bot {
            transform: ${this.state.open ? "rotate(-45deg)": "none"}
          }

          @media only screen and (min-width: 769px) {
            .header .menu {display: none;}
          }
        `}</style>
      </header>
    )
  }
}