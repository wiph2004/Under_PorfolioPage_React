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
                <h3>Fully Responsive</h3>
                <img
                  src="./assets/Images/Project1.webp"
                  alt="Several graphs showing online reputation increasing."
                  class="float-right"
                  className="w-100 h-100"
                />
                <p className="lead mb-0">
                  This theme will look great on any device, no matter the size!
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
                <h3>Bootstrap 5 Ready</h3>
                <img
                  src="./assets/Images/Project2.webp"
                  alt="Several graphs showing online reputation increasing."
                  class="float-right"
                  className="w-100 h-100"
                />
                <p className="lead mb-0">
                  Featuring the latest build of the new Bootstrap 5 framework!
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
                <h3>Easy to Use</h3>
                <img
                  src="./assets/Images/Project3.jpg"
                  alt="Several graphs showing online reputation increasing."
                  class="float-right"
                  className="w-100 h-100"
                />
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
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
                <h3>Easy to Use</h3>
                <img
                  src="./assets/Images/Project4.jpg"
                  alt="Several graphs showing online reputation increasing."
                  class="float-right"
                  className="w-100 h-100"
                />
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
