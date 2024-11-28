import styled from "styled-components";

// interface Props {}

const FooterPapa = styled.div`
  background-color: #101010;
  display: flex;
  flex-direction: column;
  padding: 5% 0;
  gap: 65px;

  .infos {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ColumnSection = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: fit-content;
  max-width: 280px;
  text-align: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const Instagram = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 600;
  gap: 8px;
`;

const Negrito = styled.p`
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 700;
  font-size: 24px;
`;

const Info = styled.p`
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

const CopyR = styled.p`
  display: flex;
  font-family: "Inter", sans-serif;
  color: #a0a0a0;
  font-weight: 400;
  font-size: 22px;
  align-self: center;
`;

const Components = {
  FooterPapa,
  ColumnSection,
  Logo,
  Instagram,
  Negrito,
  Info,
  CopyR,
};

export default Components;
