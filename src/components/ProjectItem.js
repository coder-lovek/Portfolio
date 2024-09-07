import React from "react";

function ProjectItem({ image, name, link }) {
  const handleClick = () => {
    window.location.href = link; // Redirect to the specified link
  };

  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
