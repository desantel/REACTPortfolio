import '../../styles/Index.css';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <h1>
        Project Page
      </h1>
      <a href="https://github.com/desantel/week6weather" target="_blank">Github Repo</a>
      <a href="https://desantel.github.io/week6weather/" target="_blank">Deployed Application</a>
        <br />
      <a href="https://github.com/spfave/hike-tracker" target="_blank">Github Repo</a>
      <a href="https://gwu-hiker-tracker.herokuapp.com/" target="_blank">Deployed Application</a>
      <br />
      <a href="https://github.com/desantel/purplenews" target="_blank">Github Repo</a>
      <a href="https://desantel.github.io/purplenews/thefinalhomepage.html" target="_blank">Deployed
        Application</a>
        <br />
      
      <Footer />
    </div >
  )
}
