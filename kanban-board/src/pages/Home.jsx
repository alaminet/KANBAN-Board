import React from "react";
import { Divider } from "antd";
import Slider from "react-slick";
import CardShorts from "../components/CardShorts";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div>
          <Divider orientation="left">My Task-Board</Divider>
          <div
            className="slider-container"
            style={{
              background: "#88f48e",
              padding: "20px 15px",
              borderRadius: "5px",
            }}
          >
            <Slider {...settings}>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <Divider orientation="left">Asigned Task-Board</Divider>
          <div
            className="slider-container"
            style={{
              background: "#f4e688",
              padding: "20px 15px",
              borderRadius: "5px",
            }}
          >
            <Slider {...settings}>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <Divider orientation="left">Overdue Task-Board</Divider>
          <div
            className="slider-container"
            style={{
              background: "#f48897",
              padding: "20px 15px",
              borderRadius: "5px",
            }}
          >
            <Slider {...settings}>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
              <div>
                <CardShorts />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
