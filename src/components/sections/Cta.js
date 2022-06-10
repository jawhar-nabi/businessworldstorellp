import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section id="contact" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Nous contacter ?</h3>
            <div style={{ display: "flex", marginBottom: "-20px" }}>
              <h6>Email:</h6>
              <h6 style={{ marginLeft: "10px", fontWeight: "400" }}>
                Businessworldstore@yahoo.com
              </h6>
            </div>
            <div style={{ display: "flex", marginBottom: "-20px" }}>
              <h6>Telephone:</h6>
              <h6 style={{ marginLeft: "10px", fontWeight: "400" }}>
                00447897064663
              </h6>
            </div>
            <div style={{ display: "flex" }}>
              <h6>Adresse:</h6>
              <h6 style={{ marginLeft: "10px", fontWeight: "400" }}>
                13 Freeland Park, Wareham Road, BH166FH, United Kingdom
              </h6>
            </div>
            <div style={{ display: "flex", marginBottom: "-20px" }}>
              <a
                href="https://www.facebook.com/BusinessWorldStoreLLP"
                target="_blank"
                fill="white"
                style={{marginRight:'10px'}}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <title>Facebook</title>
                  <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/wahbibergaoui" target="_blank">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <title>Instagram</title>
                  <g>
                    <circle cx="12.145" cy="3.892" r="1" />
                    <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
