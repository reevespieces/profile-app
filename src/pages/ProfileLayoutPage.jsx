import { Outlet, Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import '../styles/profile-layoutpage.css';

const ProfileLayoutPage = () => {
  return (
    <>
      <Outlet />
      <Wrapper>
        <div className="button-container">
          <Link to="/fetched-profiles" className="back-button">
            Go Back
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default ProfileLayoutPage;