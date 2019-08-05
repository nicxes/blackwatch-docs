export default function Footer() {
  return(
    <footer className="footer container">
      
      <p className="copyright">The Blackwatch logo are trademarks of Blizzard Entertaiment, Inc.</p>

      <ul>
        <li><a href="https://github.com/nicxes/blackwatch-docs">Github</a></li>
        <li>License: <strong>MIT</strong></li>
        <li><a href="mailto:hello@nicxes.com">hello@nicxes.com</a></li>
      </ul>
      
      <style jsx>{`
        .footer {
          color: #777;
          font-size: 12px;
          font-family: Monospace;
          letter-spacing: -1px;

          padding: 80px 20px 20px 20px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .copyright {
          text-align: center;
          line-height: 20px;

          margin-bottom: 5px;
        }
        ul {
          padding: 0;
          margin: 0;
        
          display: flex;
          align-items: center;
        }
        li {
          list-style: none;

          padding: 0 10px !important;
          border-right: 1px solid #222;
        }
        li:first-child {
          padding: 0 10px 0 0 !important;
        }
        li:last-child {
          padding: 0 0 0 10px !important;
          border: 0;
        }
        li a {
          font-size: 12px;
        }
        @media only screen and (min-width: 769px) {
          .footer {
            flex-direction: row;
            justify-content: space-between;
          }
          .copyright {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  )
}