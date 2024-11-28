import styled from "styled-components";

const HeaderPapa = styled.div`
  display: flex;
  padding: 1% 0;
  background-color: white;
  flex-direction: row;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  gap: 5%;

  section {
    display: flex;
    width: 80%;
  }
`;

const Logo = styled.img`
  width: 5%;
  height: auto;
  margin-left: 5%;
`;

const Links = styled.ul`
  display: flex;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-style: normal;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 90%;
  li {
    cursor: pointer;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Components = {
  HeaderPapa,
  Logo,
  Links,
  Link,
};

export default Components;
