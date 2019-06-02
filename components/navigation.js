import Link from './text/link'

function Navigation() {
  return (
    <nav className="navigation">
      <li><Link href="/" activeClassName="active"><a>Intro</a></Link></li>
      <li><Link href="/requirements" activeClassName="active"><a>Requirements</a></Link></li>
      <li><Link href="/setup" activeClassName="active"><a>Setup</a></Link></li>
      <li><Link href="/commands" activeClassName="active"><a>Commands</a></Link></li>
      <li><Link href="/information" activeClassName="active"><a>Information</a></Link></li>
      <style jsx>{`
        .navigation {
          padding: 0;
          margin: 0;
        }
        .navigation li {
          list-style: none;
          padding: 10px 0;
        }
        .navigation li a {color: #ccc;}
        .navigation li a.active {color: #fff;}
        .navigation li a:hover {color: #fff;}
      `}</style>
    </nav>
  )
}

export default Navigation;