import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 10% 5%;
`;

const DadosRelatorio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Line = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  height: 2px;
  width: 500px;
  background-color: #858585;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: nowrap;
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

const Dados = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: black;
  max-width: 50vh;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Components = {
  Section,
  DadosRelatorio,
  Line,
  Title,
  Info,
  Dados,
  Bold,
};

export default Components;
