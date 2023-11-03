import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center flex-col">
      <p className="mt-10 w-96 text-lg">
        This here is my own attempt of responsive image gallery using React JS and Tailwind CSS. 
        It has following features: 
        <ul className="list-disc px-6">
          <li>Reordering</li>
          <li>Deleting multiple images</li>
          <li>Setting a feature image</li>
          <li><span className="text-orange-500">Extra added feature:</span>   Drag and drop image files for input</li>
        </ul>
        The site is fully responsive. <Link to="/customdnd" className=" text-blue-500">Check it out! </Link> 
        Hope you like it
      </p>
     
    </div>
  );
};

export default Home;
