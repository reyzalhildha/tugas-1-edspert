import './style.css';
import hero from './img/hero.svg';
import people from './img/people.svg';

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
        <div className="container-product">
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <div className="image">
                  <img src={people} alt="people"/>
                </div>
                <div className="text">
                  <h4>Intensive Bootcamp</h4>
                  <h5>Programming Laravel</h5>
                  <h6>(Getting Started with Laravel 9)</h6>
                </div>
              </div>
              <div className="content">
                <p>Programming Laravel Getting Started with Laravel 9</p>
                <table>
                  <tr>
                    <td>Batch</td>
                    <td>September 2022 </td>
                  </tr>
                  <tr>
                    <td>Mentor</td>
                    <td>William Hartono, Farel Prayoga </td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
       </section>
    </>
  );
}

export default App;
