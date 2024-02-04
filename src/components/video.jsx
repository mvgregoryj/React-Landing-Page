import React from "react";

export const Video = ({ title, src }) => (
  <video controls className="my-video">
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
