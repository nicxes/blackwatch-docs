import Link from './text/link'

function Navigation() {
  return (
    <nav className="navigation">
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

          display: none;
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
        
        @media only screen and (min-width: 769px) {
          .navigation {display: block;}
        }
      `}</style>
    </nav>
  )
}

export default Navigation;