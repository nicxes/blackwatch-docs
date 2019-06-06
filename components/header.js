import Logo from './logo'

function Header() {
  return (
    <header className="header container">

      <div>
        <a href="/">
          <Logo size="40"/>
        </a>
      </div>

      <div>
        
      </div>

      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: 50% 50%;

          margin: 50px auto;
        }
      `}</style>
    </header>
  )
}

export default Header;