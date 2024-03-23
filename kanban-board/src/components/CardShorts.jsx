import React, { useState } from "react";
import {
  AlignLeftOutlined,
  CheckCircleTwoTone,
  ClockCircleOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Flex,
  Modal,
  Input,
  Popconfirm,
  message,
  Divider,
} from "antd";

const CardShorts = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Popconfirm
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          marginBottom: "5px",
          cursor: "pointer",
        }}
      >
        <div
          onClick={showModal}
          style={{
            cursor: "pointer",
          }}
        >
          <h4 style={{ margin: "0" }}>Title</h4>
          <p>Assigned by Al Amin</p>
        </div>

        <Flex gap="small">
          {/* <Button shape="circle" icon={<ClockCircleOutlined />} /> */}
          <Popconfirm
            title="Complete the task"
            description="Are you sure to complete this task?"
            onConfirm={confirm}
            onCancel={(e) => message.error("Click on No")}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<CheckCircleTwoTone twoToneColor="#52c41a" />} />
          </Popconfirm>
          <Button
            onClick={showModal}
            type="primary"
            shape="circle"
            icon={<CommentOutlined />}
          />
        </Flex>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex gap="4px" align="center">
          <span>01/02/2024 05:00 PM</span>
          <Divider type="vertical" />
          <span>by Al Amin</span>
        </Flex>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti
          incidunt ducimus porro optio quae, et neque quibusdam sapiente nemo.
        </p>

        {/* reply input filed */}
        <div>
          <Flex gap="small" align="center">
            <div>
              <AlignLeftOutlined />
            </div>
            <h5>Activity</h5>
          </Flex>
          <Flex gap="small" align="top">
            <div>
              <Avatar
                style={{
                  backgroundColor: "#172b4d",
                  verticalAlign: "middle",
                }}
                size="small"
              >
                AL
              </Avatar>
            </div>
            <div>
              <TextArea
                cols={100}
                showCount
                allowClear
                maxLength={100}
                onChange={(e) => e.target.value}
                placeholder="Comments"
                style={{
                  marginBottom: "10px",
                }}
              />
              <Button type="primary">Save</Button>
            </div>
          </Flex>
        </div>
        <Divider>Conversion</Divider>
        {/* reply details */}
        <div>
          <Flex gap="small" align="center">
            <div>
              <Avatar
                style={{
                  backgroundColor: "#172b4d",
                  verticalAlign: "middle",
                }}
                size="small"
              >
                AL
              </Avatar>
            </div>
            <div>
              <Flex gap="small" align="center">
                <h4 style={{ margin: "0" }}>Al Amin</h4>{" "}
                <span style={{ fontSize: "12px" }}>10/01/2024 at 02:30 PM</span>
              </Flex>
            </div>
          </Flex>
          <div>
            <p style={{ margin: "0 0 0 30px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              perferendis ducimus blanditiis, nisi laborum libero non aut rerum
              optio enim.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardShorts;
