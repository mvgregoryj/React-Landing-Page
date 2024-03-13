import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Services</h2>
        </div> */}
        <div className="row justify-content-md-center">
          {props.data
            ? props.data.map((d, i) => (
                <button type="button" key={`${d.title}-${i}`} className="col-sm mx-4 btn btn-light">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <div>
                    <img
                      src={d.icon}
                      alt={d.title}
                      className="img-responsive"
                      width="200"
                    />
                  </div>
                  <h3>ADQUIERE TU</h3>
                  {/* Background de Color orange en el siguiente h3 y color blanco las letras */}
                  <h3 style={{ backgroundColor: "#FE6600" , color: "#FFFFF"}}>{d.title}</h3>
                  <h3>POR {d.price}</h3>
                </button>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
