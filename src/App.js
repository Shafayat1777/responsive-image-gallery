import { useEffect, useState, useRef } from "react";

function App() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState([]); // used to store image files

  const DraggedItem = useRef(null);
  const PlacePoint = useRef(null);

  // file drag & drop functions
  // Function to handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };
  // Function to handle drag leave event
  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };
  // Function to handle drop event
  const handleDrop = (event) => {
    event.preventDefault(); // Prevent files from opening in the browser
    setIsDragOver(false);
    setFile((prevFile) => [...prevFile, ...event.dataTransfer.files]);
  };

  // sorting function
  const HandleSortImage = () => {
    let images = [...file];

    // get the draged item and remove from its current position
    const replacedImage = images.splice(DraggedItem.current, 1)[0];

    // switch the position if the draged item with the new positon
    images.splice(PlacePoint.current, 0, replacedImage);

    // reset the positions
    DraggedItem.current = null;
    PlacePoint.current = null;

    // update the file array
    setFile(images);
  };

  useEffect(() => {
    if (file.length > 0) console.log(file);
  }, [file]);

  return (
    <div className="main-container flex justify-center w-full h-screen p-10 bg-slate-100">
      <div className="image-container border rounded-md bg-white w-fit h-fit">
        <div className="image-container-head py-5 px-10 border-b flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-600">Gallery</h1>
          <h1 className="text-red-500 font-semibold cursor-pointer">
            Delete file
          </h1>
        </div>

        <div className="image-container-content p-7 grid grid-cols-5 gap-8 ">
          {/* <div className=" border-2 rounded-md w-96 h-96 col-span-2 row-span-2"></div> */}
          {file.length > 0 &&
            file.map((file, index) => (
              <div
                draggable
                onDragStart={(e) => (DraggedItem.current = index)}
                onDragEnter={(e) => (PlacePoint.current = index)}
                onDragEnd={HandleSortImage}
                onDragOver={(e) => e.preventDefault}
                key={index}
                className={`border-2 rounded-md ${
                  index === 0 ? "w-96 h-96 col-span-2 row-span-2" : "w-44 h-44"
                } relative overflow-hidden cursor-grab`}
              >
                <div className="bg-white w-5 h-5 rounded-sm absolute top-5 left-5 cursor-pointer z-40">
                  {index}
                </div>
                <div
                  className={` overflow-hidden ${
                    index === 0
                      ? "w-96 h-96 col-span-2 row-span-2"
                      : "w-44 h-44"
                  } absolute border-2 rounded-md top-[-2px] left-[-2px]`}
                ></div>
                <img src={URL.createObjectURL(file)} alt="" />
              </div>
            ))}

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`add-button border-2 rounded-md border-dashed w-44 h-44 flex flex-col justify-center items-center bg-slate-50 cursor-pointer ${
              isDragOver ? "border-blue-300 bg-blue-50" : "border-gray-400"
            } rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className=" text-sm text-gray-600 text-center">
              Drop images to upload <br />
              or
            </p>
            <label className="mt-3 cursor-pointer hover:border-blue-300 hover:text-blue-400 bg-white px-4 h-9 inline-flex items-center rounded border border-gray-300 shadow-sm text-sm font-medium text-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
              Add images
              <input
                onChange={(e) => {
                  setFile((prevFile) => [...prevFile, ...e.target.files]);
                }}
                type="file"
                className="sr-only"
                multiple
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
