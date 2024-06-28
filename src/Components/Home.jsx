import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbCoins } from "react-icons/tb";
import { SiFigma, SiAdobexd, SiAdobe } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <div className="px-[100px] relative py-8">
        <h1 className="font-bold text-[36px] text-gray-800">
          Senior Product Designer
        </h1>
        <span className="bg-gray-300 rounded-full w-[4px] h-[4px] absolute left-[522px] top-[56px]"></span>{" "}
        <span className="absolute left-[536px] top-[48px] text-sm text-gray-500">
          posted 2 days ago
        </span>
        <span className="w-[54px] border-[1px] bg-green-50 rounded-full absolute left-[660px] text-[12px] text-green-700 font-semibold top-[44px] p-[3px] px-4 border-green-200">
          <span className="bg-green-600 rounded-full w-[5px] h-[5px] absolute left-[6px] top-[9px]"></span>{" "}
          Open
        </span>
        <div>
          <GrLocation className="absolute text-2xl top-[105px] text-gray-600" />
          <span className="text-xl text-gray-600 p-7 relative top-4 left-1 font-semibold">
            Delaware, USA
          </span>
          <span className="bg-gray-300 rounded-full w-[4px] h-[4px] absolute top-[117px] left-[283px]"></span>{" "}
          <span>
            <TbCoins className="text-2xl text-gray-600 absolute top-[105px] left-[300px]" />
          </span>
          <span className="text-gray-600 text-xl absolute top-[102px] left-[338px] font-semibold">
            $300k-$400k
          </span>
        </div>
      </div>
      <br />
      <hr />
      <div className="px-[100px] relative py-6 ">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-[14px] text-[#636363]">Skills Required</h3>
            <div className="flex flex-col gap-2 py-2 ">
              <div className="flex items-center border-[1.8px] shadow-sm p-1 py-[3px] text-xs w-[65px] text-black rounded-md">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
                  className="w-4 h-4"
                  alt="Figma"
                />
                <span className="px-1">Figma</span>
              </div>
              <div className="flex items-center p-1 border-[1.8px] shadow-sm py-[3px] text-xs w-[125px] rounded-md">
                <img
                  src="https://vectorseek.com/wp-content/uploads/2023/06/Illustrator-Icon-Vector-300x300.jpg"
                  className="w-4 h-4 rounded-sm"
                  alt="Adobe Illustrator"
                />
                <span className="px-1">Adobe Illustrator</span>
              </div>
              <div className="flex items-center p-1 border-[1.8px] shadow-sm py-[3px] text-xs w-[100px] rounded-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1051px-Adobe_XD_CC_icon.svg.png"
                  className="w-4 h-4"
                  alt="Adobe XD"
                />
                <span className="px-1">Adobe XD</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[14px] text-[#636363]">Preferred Language</h3>
            <div className="py-2">
              <span className="font-bold">English</span>
            </div>
          </div>
          <div>
            <h3 className="text-[14px] text-[#636363]">Type</h3>
            <div className="py-2">
              <span className="font-bold">Full time</span>
            </div>
          </div>
          <div>
            <h3 className="text-[14px] text-[#636363]">Years of Experience</h3>
            <div className="py-2">
              <span className="font-bold">3+ Years of Experience</span>
            </div>
          </div>
        </div>
        <br />
      </div>
      <hr />
      <div className="px-[100px] relative py-6">
        <h3 className="text-[14px] text-[#636363]">About the Job</h3>
        <div className="py-2">
          <ol className="list-decimal list-inside text-gray-700">
            <li>Handle the UI/UX research design</li>
            <li>Work on researching on latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphic related works</li>
          </ol>
        </div>
        <h3 className="text-[16px] text-[#636363]">Benefits:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <h3 className="text-[16px] text-[#636363]">Schedule:</h3>
          <li>Day shift</li>
        <h3 className="text-[16px] text-[#636363]">Supplemental pay types:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <h3 className="text-[16px] pb-4 text-[#2c2b2b]">Work Location: In person</h3>
      </div>
      <hr />
      <div className="px-[100px] relative py-6">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOx-NV6fmQbjl41WbAjcg7LekDVOOREXoyvjFJtyJpx9tmnvP8"
            alt="Atlassian"
            className="w-10 h-10 mr-3 rounded-md"
          />
          <h3 className="text-[20px] text-gray-600 font-semibold">Atlassian</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Company size</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">1k - 2k Employees</p>
          </div>
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Type</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">Private</p>
          </div>
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Sector</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">
              Information Technology, Infrastructure
            </p>
          </div>
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Funding</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">Bootstrapped</p>
          </div>
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Founded In</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">2019</p>
          </div>
          <div>
            <h4 className="text-[14px] text-[#2c2b2b]">Founded By</h4>
            <p className="text-[16px] font-semibold pt-2 text-gray-700">
              Scott Farquhar, Mike Cannon-Brookes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
