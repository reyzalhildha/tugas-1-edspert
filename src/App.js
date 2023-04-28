import './style.css';
import hero from './img/hero.svg';

function App() {
  return (
    <>
      <section className="hero">
        <nav>
          <div className="logo">
            <p>LOGO</p>
          </div>
          <div className="menu">
            <li><p>Program</p></li>
            <li><p>Bidang Ilmu</p></li>
            <li><p>Tentang edspert</p></li>
          </div>
        </nav>
        <div className="container-hero">
          <div className="title-hero">
            <h1>Jadi expert bersama edspert.id</h1>
            <p>Tingkatkan skill dan pengetahuan bersama 
              para mentor terbaik di bidangnya, untuk siapkan
              karir impian anda.</p>
          </div>
          <div className="image">
            <img src={hero} alt="logo"/>
          </div>
        </div>
      </section>
      <section className="product">
       </section>
    </>
  );
}

export default App;
