import Link from './text/link'

export default class Header extends React.Component {
  render() {
    return (
      <nav className={this.props.open ? "navigation open": "navigation"}>
        <li>
          <Link href="/" activeClassName="active"><a>Overview</a></Link>
          <ul>
            <li><a href="/#help">Getting help</a></li>
            <li><a href="/#commands">Commands</a></li>
          </ul>
        </li>
        <style jsx>{`
          .navigation {
            padding: 0;
            margin: 0;

            max-height: 0;
            opacity: 0;

            transition: all 0.2s ease-in;
          }
          .navigation li {
            list-style: none;
            padding: 10px 0;
          }
          .navigation li a {
            color: #ccc;
            border-left: 1px solid #ccc;
            padding: 0 0 0 12px;

            transition: all 0.1s ease;
          }
          .navigation li a.active {color: #fff;}
          .navigation li a:hover {color: #fff;}
          .navigation.open {
            max-height: 500px;
            opacity: 1;

            border-bottom: 1px solid #222;
            margin-bottom: 30px;
          }
          
          @media only screen and (min-width: 769px) {
            .navigation {display: block;}
          }
        `}</style>
      </nav>
    )
  }
}