import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./styles";
import nfimage from "/src/assets/images/notfound-image.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={NotFoundContainer}>
      <div className="nf--image">
        <img src={nfimage} alt="" />
      </div>
      <div className="nf--btn">
        <button className="btn" onClick={() => navigate("/")}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
