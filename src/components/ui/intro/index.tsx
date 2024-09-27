import React from "react";
import styles from "./intro.module.css";
import { Col, Row, Typography } from "antd";
import profile from "../../../assets/images/profile.png";

export function Intro(): JSX.Element {
  return (
    <Row className={styles.IntroContainer}>
      <Col lg={12} md={24}>
        <div className={styles.ColumnContainer}>
          <div>
            <Typography className={styles.IntroText}>Hy </Typography>
            <Typography className={styles.IntroText}>My Name is </Typography>
            <Typography
              className={`${styles.IntroText}  ${styles.GradientText}`}
            >
              Awais Ahmad
            </Typography>
            <Typography className={styles.IntroText}>
              I'm Software developer
            </Typography>
          </div>
        </div>
      </Col>
      <Col lg={12} md={24}>
        <div className={styles.ColumnContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img src={profile} alt="sadasd" className={styles.ImageContainer} />
          </div>
        </div>
      </Col>
    </Row>
  );
}
