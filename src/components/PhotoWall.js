import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
// anchor tag, href attribute

function Photowall(props) {
  return (
    <div>
      <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"></a>
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
