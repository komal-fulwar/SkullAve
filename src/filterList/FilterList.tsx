import React from "react";

const FilterList = ({
  handleRankSort,
  handleRaritySort,
  handleAttCountSort,
}: any) => {
  return (
    <div>
      <div className=" " style={{ padding: "60px" }}>
        <div className="container ">
          <h3 className="text-center">
            <a style={{ fontFamily: "boston", color: "black" }}>
              Skull Collection
            </a>{" "}
          </h3>
        </div>
      </div>
      <div className="container col-lg-4 ">
        <div className="bg_white box   ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-auto ">
              <div className="">
                <ul className="menu_categories space-x-20 justify-content-center align-items-center ">
                  <li>
                    <a href="#" className="color_brand">
                      <span style={{ fontFamily: "boston", color: "black" }}>
                        {" "}
                        All{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <div className="btn" onClick={handleRankSort}>
                      <span style={{ fontFamily: "boston", color: "black" }}>
                        Moon rank
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontFamily: "boston",
                        fill: "black",
                        color: "black",
                        backgroundColor: "#f8c307",
                      }}
                      onClick={handleRaritySort}
                    >
                      <span style={{ fontFamily: "boston", color: "black" }}>
                        RARITY
                      </span>
                    </div>
                  </li>
                  {/* <li>
                    <div className="btn" onClick={handleAttCountSort}>
                      <span style={{ fontFamily: "boston", color: "black" }}>
                        Att. Count
                      </span>
                    </div>
                  </li> */}
                  <li>
                    {" "}
                    <a href="#">
                      <span style={{ fontFamily: "boston", color: "black" }}>
                        MY SKULLS
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
