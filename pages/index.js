import Page from '../components/page'

import Notification from '../components/notify'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Article from '../components/article'
import Footer from '../components/footer'

export default class Home extends React.Component {
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
      <>
        <Notification title="Blackwatch is out!" message="Serverless mode, performance and security improvements and more. Coming soon"/>
        <Header open={this.state.open} handleClick={this.handleClick} />
        <Page title="Blackwatch — Homepage">
          <main className="page container">
            <Navigation open={this.state.open}/>
            <Article/>
          </main>
        </Page>
        <Footer/>

        <style jsx>{`
          .page {
            display: grid;
            grid-template-columns: 1fr;
            margin: 20px auto;
          }
          @media only screen and (min-width: 769px) {
            .page {
              padding: 50px auto;
              grid-template-columns: 280px 1fr;
            }
          }
        `}</style>
      </>
    )
  }
}