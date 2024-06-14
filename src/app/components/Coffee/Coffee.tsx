import "./Coffee.css";

const Coffee = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="left">
            <h1>Coffee Page</h1>
            <div>Welcome, .... </div>
          </div>
          <div>
            <button
              // onClick={handleSignOut}
              className="btn btn-staking-signin"
            >
              {" "}
              Sign Out
            </button>
          </div>
        </div>
        <div>
          <div className="container"></div>
        </div>
      </div>
    </>
  );
};

export default Coffee;
