import React from "react";
import { Card, Flex, FloatButton } from "antd";
import { CustomerServiceOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Cardshorts from "../components/CardShorts";
import ExistingPostModal from "../components/ExistingPostModal";

const Dashboard = () => {
  const handleNewNote = () => {
    console.log("new note");
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <Flex wrap="wrap" gap="small" justify="space-around">
          <Card
            title="To-Do"
            bordered={false}
            style={{
              background: "#f48897",
              minWidth: "23%",
            }}
          >
            <div
              style={{
                maxHeight: "400px",
                overflow: "overlay",
              }}
            >
              <Cardshorts />
              <Cardshorts />
              <Cardshorts />
              <Cardshorts />
            </div>
          </Card>
          <Card
            title="In-Progress"
            bordered={false}
            style={{
              background: "#f4e688",
              minWidth: "23%",
            }}
          >
            <div
              style={{
                maxHeight: "400px",
                overflow: "overlay",
              }}
            >
              <Cardshorts />
              <Cardshorts />
              <Cardshorts />
            </div>
          </Card>
          <Card
            title="Review"
            bordered={false}
            style={{
              background: "#88f48e",
              minWidth: "23%",
            }}
          >
            <div
              style={{
                maxHeight: "400px",
                overflow: "overlay",
              }}
            >
              <Cardshorts />
              <Cardshorts />
            </div>
          </Card>
          <Card
            title="Done"
            bordered={false}
            style={{
              background: "#88e2f4",
              minWidth: "23%",
            }}
          >
            <div
              style={{
                maxHeight: "400px",
                overflow: "overlay",
              }}
            >
              <Cardshorts />
            </div>
          </Card>
        </Flex>
        <FloatButton
          shape="circle"
          type="primary"
          onClick={handleNewNote}
          style={{
            right: 94,
          }}
          icon={<PlusCircleOutlined />}
        />
      </div>
    </>
  );
};

export default Dashboard;
