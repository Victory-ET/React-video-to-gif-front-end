import { React, useState } from "react";
import "./App.css";

function App() {

  return (
    <div className=" w-screen h-screen">
      <div className=" w-full bg-slate-900 pt-60 pb-12 px-4 text-white">
        <h1 className=" text-2xl font-semibold text-blue-600 absolute top-3">
          React Video to GIF Converter
        </h1>
        <h2 className=" font-bold text-3xl">Convert Videos to GIF</h2>
        <p>
          Upload, convert your vidoes to GIFs and download them for your use
        </p>
      </div>
      
        <div className=" w-full flex justify-center items-center mt-4">
          <input
            type="file"
            id="file"
            className=" px-3 py-2 rounded-md text-white bg-blue-500"
           
          />
          <label for="file">Choose Video</label>
        </div>
      
        <div className=" w-full px-3 py 4 mt-4 flex justify-center items-center flex-col">
          <div className=" bg-white shadow-xl py-4 px-3 w-max flex justify-between gap-8 border items-center">
            <div>
              <h2 className=" font-bold text-small text-zinc-800">
                <span className=" text-blue-500 font-semibold">File Name:</span>{" "}
                No video Uploaded
              </h2>
            </div>
            <div className=" border-2 border-blue-500 rounded-md">
              <input
                type="number"
                placeHolder="start time"
                className=" px-2 py-1 bg-transparent outline-none"
               
              />
            </div>
            <div className=" border-2 border-blue-500 rounded-md">
              <input
                type="number"
                placeholder="End time"
                className=" px-2 py-1 bg-transparent outline-none"
                onChange={(event) => {
                  if (event.target.value.length === 3)
                    return false; //limits to 2 digit entry
                  else if (event.target.value > 30) return false; //limits to 2 digit entry

                }}
              />
            </div>
            <button className=" text-xl font-semibold text-blue-600">
              Convert Video
            </button>
          </div>
          <div className=" mt-5 w-4/5">
              <div>
                <h2 className=" text-left font-medium mb-3"> Uploaded Video</h2>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
