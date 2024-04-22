import Project1Image from "../assets/images/Project1.webp";
import Project2Image from "../assets/images/Project2.webp";
import Project3Image from "../assets/images/Project3.jpg";
import Project4Image from "../assets/images/Project4.jpg";
import Project5Image from "../assets/images/SocialNetwork.jpg";
import Project6Image from "../assets/images/Readme.jpg";

export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <h1>Projects</h1>

      <section className="features-icons text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Day Planner</h3>
                <a href="https://github.com/wiph2004/Module05Challenge">
                  <img
                    src={Project1Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">
                  Organize your day with a simple planner
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Notetaker 5000</h3>
                <a href="https://github.com/wiph2004/NoteTaker5000">
                  <img
                    src={Project2Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">Take notes and save them for later</p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Employee Database</h3>
                <a href="https://github.com/wiph2004/O_EmployeeDatabase">
                  <img
                    src={Project3Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">
                  Create and manage an employee database using MYSQL
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Whatcha Watchin?</h3>
                <a href="https://github.com/wiph2004/GroupProject01">
                  <img
                    src={Project4Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">
                  Search for your favorite movies and get scores. Can watch them
                  through Youtube as well.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Social Network App</h3>
                <a href="https://github.com/wiph2004/SocialNetwork_wMongo">
                  <img
                    src={Project5Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">
                  Create posts and users using MongoDB and Mongoose
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="features-icons-item mx-auto mb-0 mb-lg-3"
                style={{ border: "1px solid #ccc", padding: "20px" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Creating Readme</h3>
                <a href="https://github.com/wiph2004/Module09Challenge">
                  <img
                    src={Project6Image}
                    alt="Several graphs showing online reputation increasing."
                    class="float-right"
                    className="w-100 h-100"
                  />
                </a>
                <p className="lead mb-0">Generates a README.md</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
