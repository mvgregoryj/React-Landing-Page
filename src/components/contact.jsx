import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Contact</h1>
                </div>
                <div className="col-md-12 text-center">
                  <div>
                    <img
                      className="rounded-circle"
                      src={props.data ? props.data.foto_perfil : "/"}
                      alt="Foto de perfil"
                      style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h3>JEAN MARCEL</h3>
                  <p>ESTRATEGIA DE MARKETING Y NEGOCIOS</p>
                  <ul className="list-unstyled">
                    <li>
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fa fa-facebook"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.instagram: "/"}>
                        <i className="fa fa-instagram"></i>  jeanmarcelcorrea_
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
