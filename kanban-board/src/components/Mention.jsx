import React, { useCallback, useRef, useState } from "react";

import { Mentions } from "antd";

const Mention = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(
    debounce(loadGithubUsers, 800),
    []
  );
  const onSearch = (search) => {
    console.log("Search:", search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <>
      <Mentions
        style={{
          width: "100%",
        }}
        loading={loading}
        onSearch={onSearch}
        options={users.map(({ login, avatar_url: avatar }) => ({
          key: login,
          value: login,
          className: "antd-demo-dynamic-option",
          label: (
            <>
              <img src={avatar} alt={login} />
              <span>{login}</span>
            </>
          ),
        }))}
      />
    </>
  );
};

export default Mention;
