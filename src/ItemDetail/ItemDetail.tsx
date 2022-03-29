import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { getNftDetails } from "../service/api";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  let { nftId } = useParams();
  const [nftDetails, setNftDetails] = useState<any>({});

  const getNft = async () => {
    const res = await getNftDetails(nftId);
    setNftDetails(res.mint);
  };
  console.log(nftDetails, "nftDetails");
  useEffect(() => {
    getNft();
  }, [nftId]);

  const theme = useTheme();

  return (
    <>
      <div className="container  " style={{ paddingTop: "2rem" }}>
        <div className="item_details">
          <div className="row justify-content-center sm:space-y-20">
            <div className="col-lg-4">
              <img
                className="item_img"
                src={nftDetails?.image}
                alt={nftDetails?.name}
              />
            </div>

            <div className="col-lg-6">
              <div className="space-y-20 ">
                <div className="box">
                  <div className="space-y-20">
                    <div className="container ">
                      <h4 className="text-center">
                        <span style={{ fontFamily: "boston", color: "black" }}>
                          {" "}
                          {nftDetails?.name}
                        </span>
                      </h4>
                    </div>
                    <div className="hr"></div>
                  </div>
                  <br></br>
                  <Box className="text-center">
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 1, sm: 3, md: 3 }}
                    >
                      {nftDetails?.rank_explain?.map((attribute: any) => (
                        <Grid item xs={4}>
                          <Card
                            style={{
                              padding: "10px",
                              backgroundColor: "#0b1b27",
                            }}
                          >
                            <h6 style={{ color: "white" }}>
                              {attribute?.attribute}
                            </h6>
                            <span style={{ color: "white" }}>
                              {" "}
                              {attribute.value}
                            </span>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </div>

                <div className="d-flex space-x-20"></div>
                <div className="container p-0 ">
                  <h2 className="text-center">
                    <a
                      style={{
                        fontFamily: "boston",
                        fill: "black",
                        color: "black",
                        backgroundColor: "#f8c307",
                      }}
                      href="#"
                      className="btn w-100 "
                    >
                      <i className="ri-search-line"></i>Download
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
