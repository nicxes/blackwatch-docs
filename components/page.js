import Head from 'next/head'

function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Blackwatch'}</title>

        <meta name="description" content={description || 'Blackwatch'} />
        <meta name="keywords" content="Blackwatch"/>
        <meta name="author" content="@Nicxes"/>
        
        <link rel="shortcut icon" type="image/png" href="/static/logo.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      {children}

      <style global jsx>{`
        body {
          color: #ccc;
          font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 1em;

          background: #000;
          margin: 0 20px;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        h1, h2, h3, h4, h5, h6 {
          color: #fff;
          margin: 0 0 20px 0;
        }
        h1 {font-size: 40px;}
        p {
          line-height: 30px;
          margin-bottom: 30px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        ul {
          padding: 0 0 0 12px;
        }
        ul li {
          padding: 5px 0 !important;
        }
        ul li a {
          color: #999 !important;
          font-size: 15px;

          border: 0 !important;
        }
        ul li a:hover {
          color: #fff !important;
        }
        pre {
          margin: 0 0 50px 0;
          line-height: 40px;
        }
        code {
          background: #212121;
          border-radius: 5px;

          padding: 15px;
        }
        table {
          font-size: 14px;
          font-weight: 300;
          line-height: 22px;

          border: 1px solid #222;
          border-radius: 6px;

          width: 100%;
        }
        th {
          color: #fff;
          font-weight: 400;
          text-align: left;

          padding: 5px 10px;
        }
        td {
          padding: 5px 10px;
        }
        td.code {
          color: #fff;
          font-size: 13px;
          font-family: Monospace;
        }
        td.description {
          color: #999;
        }
      `}</style>
    </div>
  )
}

export default Page