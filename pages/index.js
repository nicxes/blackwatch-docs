import Page from '../components/page'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Article from '../components/article'

function Home() {
  return (
    <>
      <Header/>
      <Page title="Blackwatch — Homepage">
        <main className="page container">
          <Navigation/>
          <Article/>
        </main>
      </Page>

      <style jsx>{`
        .page {
          display: grid;
          grid-template-columns: 1fr;
          margin: 50px auto;
        }
        @media only screen and (min-width: 769px) {
          .page {
            grid-template-columns: 280px 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Home