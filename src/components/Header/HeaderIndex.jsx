import { NavLink, Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitterAlt, TfiPinterestAlt } from "react-icons/tfi";
import { RiInstagramLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { icons } from "react-icons";
const HeaderIndex = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col>
          Call Us: <a href="callto:548978478">548978478</a>
        </Col>

        <Col>
          Email us:
          <a href="mailto:demo@example.com">demo@example.com</a>
        </Col>
        <Col>
          <span className=" socialIcon">
            <FiClock />
            08:00 am - 06:00 pm
          </span>
        </Col>
        <Col>
          <a className=" socialIcon" href="http://facebook.com/">
            <TiSocialFacebook />
          </a>
          <a className=" socialIcon" href="http://twitter.com/">
            <TfiTwitterAlt />
          </a>
          <a className=" socialIcon" href="https://www.instagram.com/">
            <RiInstagramLine />
          </a>
          <a className=" socialIcon" href="https://www.pinterest.com/">
            <TfiPinterestAlt />
          </a>
        </Col>
      </Row>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  height: 3rem;
  font-size: 130%;
  padding: 10px 50px 20px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  color: black;

  .socialIcon {
    padding-right: 1rem;
  }
`;
export default HeaderIndex;
