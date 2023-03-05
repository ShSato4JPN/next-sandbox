"use client";
import { useState } from "react";
import axios from "axios";
import queryString from "query-string";

export default function Home() {
  const [value, setValues] = useState<string>("");

  const handleOnClick = async () => {
    const request = await axios.get<string>(
      queryString.stringifyUrl({
        url: "/api/hello",
        query: {
          foo: "hello",
          bar: "goodbye",
        },
      })
    );
    setValues(JSON.stringify(request.data));
  };

  return (
    <>
      <button onClick={handleOnClick}>click</button>
      <p>{value}</p>
    </>
  );
}
