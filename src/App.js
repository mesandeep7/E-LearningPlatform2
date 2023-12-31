import styled from "styled-components";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Container>
        <LightColor>
          <Projects />
        </LightColor>
        <LightColor>
        </LightColor>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`

  // background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  // height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #fff;
`;