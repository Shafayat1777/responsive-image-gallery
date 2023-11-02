import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/beautifuldnd">Beautiful React DND</Link>
      <Link to="/customdnd">Custome DND</Link>
    </div>
  );
};

export default Home;
