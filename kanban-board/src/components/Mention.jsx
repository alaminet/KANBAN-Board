import React, { useCallback, useRef, useState } from "react";
import { Button, Mentions } from "antd";

const Mention = () => {
  const [mention, setMention] = useState([]);

  const onChange = (value) => {
    // console.log("Change:", value);
  };
  const onSelect = (option) => {
    setMention([...mention, option]);
  };
  return (
    <>
      <Mentions
        style={{
          width: "100px",
        }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@"
        options={[
          {
            value: "afc163",
            label: "afc163",
          },
          {
            value: "zombieJ",
            label: "zombieJ",
          },
          {
            value: "yesmeck",
            label: "yesmeck",
          },
        ]}
      />
      {mention.map((item, i) => (
        <Button key={i} type="primary">
          {item.value}
        </Button>
      ))}
    </>
  );
};

export default Mention;
