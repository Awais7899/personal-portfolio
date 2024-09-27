import React from "react";
import styles from "./about.module.css";
import { Col, Row } from "antd";
import { FaBuilding } from "react-icons/fa6";

export function About() {
  return (
    <div className={styles.AboutContainer}>
      <h3 className={styles.SectionHeading}>About me</h3>
      <Row>
        <Col lg={18} md={24}>
          <div
            style={{
              color: "white",
            }}
          >
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </div>
        </Col>
      </Row>
      <h3 className={styles.SectionHeading}>Work Experience</h3>
      <Row>
        <Col lg={18} md={24}>
          <Row>
            <Col lg={12} md={24}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Titleeeeeeee
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      Hybreatheeeeee
                    </span>
                    <FaBuilding color="white" />
                  </div>

                  <div>
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      Hybreatheeeeee
                    </span>
                    <FaBuilding color="white" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={14} md={24}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
