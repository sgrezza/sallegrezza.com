const App = () => {
  return (
    <>
      <div className="name-box">
        <h1>Spencer Allegrezza's website</h1>
        <a href="https://github.com/sgrezza" className="link with-icon">
          <img
            src="public/Github-Mark-120px-plus.png"
            alt="Github logo"
            className="icon"
          />
          My Github
        </a>
        <a href="mailto: spencer@sallegrezz.com" className="link with-text">
          <p>Send me an email</p>
        </a>
      </div>
      <hr />
      <section className="section-box">
        <h2>About</h2>
        <p>Full-stack dev by day, full-stack dev by night.</p>
      </section>
      <section className="section-box">
        <h2>Professional works</h2>
        {/* <h1> Staplcotn Members</h1> */}
        <img src="src/under_construction.gif" height="50px" width="50px" />
      </section>
    </>
  );
};

export default App;
