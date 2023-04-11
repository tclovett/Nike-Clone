import "../styles/App.css";
import "../styles/MainBody.css";
import HeroContainer from "./HeroContainer";

const MainBody = () => {
  return (
    <div className="main-body-container">
      <div className="main-body">
        <div className="main-body-left">
          <HeroContainer />
        </div>

        <div className="main-body-right"></div>
      </div>
    </div>
  );
};

export default MainBody;
