import Logo from './logo'
import Link from 'next/link'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header container">

        <div className="brand">
          <a href="/">
            <Logo size="40"/>
          </a>
        </div>

        <ul className="userbox">
          <li>
            <span className={this.props.open ? "menu open": "menu"} onClick={ this.props.handleClick }>
              <span className="line line-top"></span>
              <span className="line line-mid"></span>
              <span className="line line-bot"></span>
            </span>
          </li>
          <li className="chat"><Link href="/chat"><a>Join us</a></Link></li>
        </ul>

        <style jsx>{`
          .header {
            display: grid;
            grid-template-columns: 50% 50%;
            align-items: center;

            margin: 20px auto;
          }
          .header .userbox {
            padding: 0;
            margin: 0;
            justify-self: end;
          }
          .header .userbox li {list-style: none;}
          .header .userbox .chat {display: none;}
          .header .userbox .chat a {
            color: #d2000b !important;
            font-size: 14px;
            font-family: monospace;
            text-transform: uppercase;
          }
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
            transform: ${this.props.open ? "translateY(2px) rotate(48deg)": "none"}
          }
          .header .menu .line-mid {
            display: ${this.props.open ? "none": "block"}
          }
          .header .menu .line-bot {
            transform: ${this.props.open ? "rotate(-45deg)": "none"}
          }

          @media only screen and (min-width: 769px) {
            .header {margin: 50px auto;}
            
            .userbox .menu {display: none;}
            .userbox .chat {display: flex !important;}
          }
        `}</style>
      </header>
    )
  }
}