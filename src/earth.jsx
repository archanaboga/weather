import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import {
  BsFillCloudSunFill,
  BsListTask,
  BsSliders,
  BsFillMapFill,
  BsFillCloudFill,
  BsFillSunFill,
  BsBrightnessHighFill,
  BsDropletFill,
  BsWind,
  BsFillLightningFill,
  BsCloudRainFill,
  BsSunFill,
} from "react-icons/bs";
import { WiThermometer, WiDaySunny } from "react-icons/wi";

const earth = () => {
  return (
    <div className="flex flex-col justify-between bg-black h-screen overflow-hidden">
      <div className="sidebar fixed top-2 bottom-2 rounded-lg  lg:left-3 p-2 w-[80px] overflow-hidden text-center bg-gray-500 ">
        <AiFillAlipayCircle className="h-14 w-14" />
        <BsFillCloudSunFill className="h-7 w-12 mr-10 mt-12 text-white" />
        <p className="text-white pt-1">weather</p>
        <BsListTask className="h-7 w-12 mr-10 mt-6 text-white" />
        <p className="text-white  text-centre pt-1 ">Cities</p>
        <BsFillMapFill className="h-7 w-12 mr-5 mt-6 text-white" />
        <p className="text-white text-centre pt-1">Map</p>
        <BsSliders className="h-7 w-12 mr-10 mt-6  text-white" />
        <p className="text-white  text-center pt-1">Settings</p>
      </div>

      <div className="flex ml-10  mt-3">
        <input
          type="search"
          name="search"
          placeholder="Search for Cities"
          className="bg-gray-500 h-13 w-[900px] ml-16 py-3 rounded-lg text-sm focus:outline-none"
        />
      </div>
      <div className="text-white flex items-center ml-32 h-48 gap-48   ">
        <span className="text-white box-decoration-break ml-18 text-5xl font-semibold h-48 mt-2">
          Marid <br />
          <span className="font-normal my-16 text-sm">
            Chance of rain:0% <br />
          </span>
          <div className="mt-8  ">
            <span className="text-white text-6xl font-semibold">31°</span>
          </div>
        </span>

        <div className="flex flex-col justify-between mx-96 my-48 mb-28 h-48 text-yellow-500">
          <BsSunFill className="h-32 w-32" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-3 text-center">
        <div className="bg-gray-500 flex items-end  w-[900px] rounded-lg ml-28  ">
          <div class="flex flex-col">
            <h1 class="text-xl text-white ml-3 mt-2 text-left">
              TODAY'S FORECAST
            </h1>
            <div class="flex gap-8 mr-6 ">
              <div class="flex-1 p-4 text-white box-border h-32 w-32 border-r ">
                6:00 AM
                <BsFillCloudFill className="text-white h-12 w-12 text-center" />
                <p className="text-white text-center text-2xl mr-8 font-semibold ">
                  25°
                </p>
              </div>
              <div class="flex-1 p-4  text-white box-border h-32 w-32 border-r ">
                9:00 AM
                <BsFillCloudSunFill className="text-white h-12 w-12 " />
                <p className="text-white text-center text-2xl mr-8 font-semibold ">
                  28°
                </p>
              </div>
              <div class="flex-1 p-4 text-white box-border h-32 w-32 border-r">
                12:00 PM
                <BsSunFill className="text-yellow-300 h-12 w-12 " />
                <p className="text-white text-center text-2xl mr-8 font-semibold ">
                  33°
                </p>
              </div>
              <div class="flex-1 p-4 text-white box-border h-32 w-32 border-r">
                3:00 PM
                <BsSunFill className="text-yellow-300 h-12 w-12 " />
                <p className="text-white text-center  mr-8 text-2xl font-semibold ">
                  34°
                </p>
              </div>
              <div class="flex-1 p-4  text-white box-border h-32 w-32 border-r">
                6:00 PM
                <BsSunFill className="text-yellow-400 h-12 w-12 " />
                <p className="text-white text-center mr-8 text-2xl font-semibold ">
                  32°
                </p>
              </div>
              <div class="flex-1 p-4  text-white">
                9:00 PM
                <BsFillCloudSunFill className="text-white h-12 w-12 " />
                <p className="text-white text-center mr-8 text-2xl font-semibold ">
                  30°
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-500  h-50 p-0 flex flex-row justify-between items-start w-[900px] rounded-lg ml-28">
          <div className="w-75 flex flex-col ">
            <p className="text-white mr-6 text-xl mt-2">AIR CONDITIONS</p>
            <div className="flex-1 p-4 text-white">
              <div className="flex flex-row ">
                <WiThermometer className="w-8   h-8" />
                <h1 className="text-white  M-12 text-xl">Real Feel</h1>
              </div>
              <p className="text-white text-3xl font-semibold mr-8">30°</p>
            </div>
            <div className="flex-1 p-4 text-white">
              <div className="flex flex-row">
                <BsDropletFill className="w-5 h-5 ml-2" />
                <h1 className="text-white M-12 ml-2  text-xl">
                  Chance of Rain
                </h1>
              </div>
              <p className="text-white text-3xl font-semibold mr-8 ">0%</p>
            </div>
          </div>
          <div className="w-75 flex flex-col justify-between ">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold  mt-2 mr-2 px-4 rounded-3xl p-1">
              see more
            </button>
            <div className="flex-1 p-4 px-98 text-white  gap-14 ">
              <div className="flex  ">
                <BsWind className="w-5 h-5 mr-2 " />
                <h1 className="text-white M-12 text-xl ">Wind</h1>
              </div>
              <p className="text-white text-2xl font-semibold ml-8 ">
                0.2 km/h
              </p>
            </div>
            <div className="flex-1 p-4 text-white">
              <div className="flex flex-row">
                <BsBrightnessHighFill className="w-5 h-5 mr-2" />
                <h1 className="text-white M-12 text-xl">UV index</h1>
              </div>
              <p className="text-white text-3xl font-semibold mr-12 ">3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar fixed top-8 mt-1 bottom-2 rounded-lg mr-2  lg:right-3 p-2 w-[320px]  overflow-hidden text-center bg-gray-500 ">
        <p className="text-white text-1xl text-left ml-4">7-DAY FORECAST</p>
        <div class="flex flex-col  justify-center h-screen">
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4"> Today</div>
              <div class="flex-1  p-4">
                <BsFillSunFill className="text-yellow-300 h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">sunny</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">36</span>/
                <span class="font-light ">22</span>
              </div>
            </div>
          </div>

          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4"> Tue</div>
              <div class="flex-1  p-4">
                <BsFillSunFill className="text-yellow-300 h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">sunny</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">37</span>/
                <span class="font-ligh text-slate-50">21</span>
              </div>
            </div>
          </div>

          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4"> wed</div>
              <div class="flex-1  p-4">
                <BsFillSunFill className="text-yellow-300 h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">sunny</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">22</span>/
                <span class="font-ligh text-slate-50">32</span>
              </div>
            </div>
          </div>
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4"> Thu</div>
              <div class="flex-1  p-4">
                <BsFillCloudFill className="text-white h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">Cloudy</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">37</span>/
                <span class="font-ligh text-slate-50">22</span>
              </div>
            </div>
          </div>
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4">Fri</div>
              <div class="flex-1  p-4">
                <BsFillCloudFill className="text-white h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">Cloudy</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">37</span>/
                <span class="font-ligh text-slate-50">21</span>
              </div>
            </div>
          </div>
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4">Sat</div>
              <div class="flex-1  p-4">
                <BsCloudRainFill className="text-white h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">Rainy</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">37</span>/
                <span class="font-ligh text-slate-50">21</span>
              </div>
            </div>
          </div>
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4">Sun</div>
              <div class="flex-1  p-4">
                <BsFillLightningFill className="text-yellow-600 h-8 w-8 mt-6 " />
              </div>
              <p className="text-white mt-10 mr-8">Storm</p>
              <div class="flex-1 p-4 text-white mt-6">
                <span class="font-bold">37</span>/
                <span class="font-ligh text-slate-50">21</span>
              </div>
            </div>
          </div>
          <div class="flex-1 border-b">
            <div class="flex flex-row ">
              <div class="flex-1 text-white mt-6  mr-22 p-4">Wed</div>
              <div class="flex-1  p-4">
                <BsFillLightningFill className="text-white h-8 w-8 mt-6 " />
              </div>
              <p className="text-yellow-900 mt-10 mr-8">sunny</p>
              <div class="flex-1 p-4 text-white mt-6">37/21</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default earth;
