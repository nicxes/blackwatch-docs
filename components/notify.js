export default function Notify({ title, message }) {
  return (
    <div className="notify">
      <p>{title} — <span className="message">{message}</span></p>
      
      <style jsx>{`
        .notify {
          border-bottom: 1px solid #222;
        }
        .notify p {
          color: #999;
          font-family: Monospace;
          font-size: 12px;
          text-align: center;

          margin: 0;
        }
        @media only screen and (max-width: 768px) {
          .notify p .message {display: none;}
        }
      `}</style>
    </div>
  )
}