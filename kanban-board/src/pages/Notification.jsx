import React from "react";
import { Divider, Flex } from "antd";
import {
  BellOutlined,
  BellTwoTone,
  CloseCircleOutlined,
  CloseCircleTwoTone,
} from "@ant-design/icons";

const Notification = () => {
  return (
    <>
      <div>
        <Divider orientation="left">Notification</Divider>
      </div>

      <div
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        <Flex gap="small" justify="space-between">
          <Flex gap="small" align="center">
            <BellTwoTone />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim.
            </p>
            <Divider type="vertical" style={{ backgroundColor: "#000" }} />
            <p>2 days ago</p>
          </Flex>
          <CloseCircleTwoTone twoToneColor="#eb2f96" />
        </Flex>
      </div>
    </>
  );
};

export default Notification;
