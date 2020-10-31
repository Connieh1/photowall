import React, { Component } from "react";
import Photo from "./Photo";

function Photowall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} />
      ))}
    </div>
  );
}

export default Photowall;