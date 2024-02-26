import { Video } from "./video";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="row">
          {props.data
            ? props.data.slice(0, 3).map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-sm-4">
                  <Video title={d.title} src={d.src} />
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="row">
          {props.data
            ? props.data.slice(3, 4).map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-sm-12">
                  <Video title={d.title} src={d.src} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
