import styled from "styled-components";
import NightSky from "../../assets/svg/moon/nightSky";

const StyledButton = styled.button`
  background-color: transparent;
  border: #08fdd9 1px solid;
  color: #08fdd9;
  padding: 10px 0;
  width: 10%;
  margin-top: 30px;
  font-size: 18px;
`;

const StyledMain = styled.main`
  background-color: transparent;
  height: 100%;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tags {
    color: #515152;
    font-family: "La Belle Aurore", cursive;
    font-size: 20px;
  }

  h1 {
    color: white;
    font-size: 60px;
    padding: 20px 0;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-weight: bold;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 10px;

    .first-line {
      .letter-r {
        color: #fc0853;
        text-shadow: -1px 1px #08fdd9;
      }
    }

    .second-line{

    color: white;
    font-size: 20px;

    font-weight: bold;

    }
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <span className="tags">&lt;body&gt; </span>
      <div className="text-wrapper">
        <span className="tags">&lt;h1&gt; </span>
        <h1>
          <span className="first-line">
            <span className="letter-r">R</span>odrigo Ida
          </span>
          <span className="second-line">Desenvolvedor Front End.</span>
        </h1>
        <span className="tags">&lt;/h1&gt; </span>
        <StyledButton>Contate-me</StyledButton>
      </div>
      <span className="tags">&lt;/body&gt; </span>
      <NightSky />
    </StyledMain>
  );
};

export default Home;
