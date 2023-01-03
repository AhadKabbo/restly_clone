import React from "react";
import { Form, Image, FormFloating } from "react-bootstrap";
import styled from "styled-components";
import BgImg from "../../image/hero.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  float: left;
  padding-left: 220px;
  padding-top: 143px;
`;
const Right = styled.div`
  color: brown;
  float: right;
  padding-right: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;
const HeroIndex = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Excellent services <br /> for IT success
          </Title>
          <Desc>EMPOWER YOUR BUSINESS</Desc>
          {/* <Button href="https://bit.ly/webull-join" target="_blank">
            <span>Claim your free stocks now</span>
            <MdKeyboardArrowRight />
          </Button> */}
        </Left>

        <Right>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Your Full Name</Form.Label>
              <Form.Control type="name" placeholder="tommas e.g" />
              <Form.Text className="text-muted">
                We'll never share your info with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="sub" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get Free consultation
            </Button>
          </Form>
        </Right>
      </Content>
    </Section>
  );
};

export default HeroIndex;
