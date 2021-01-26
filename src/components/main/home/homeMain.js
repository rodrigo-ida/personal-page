import styled from 'styled-components'

const StyledMain = styled.main`

overflow: hidden;
perspective: 500px;

.motion-transition{
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  opacity: 1;

}


  .motion-div {
    background-color: transparent;
    height: 100%;
    width: 100vw;
    padding: 40px;
    padding-left: 80px;
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
      font-size: 12rem;
      line-height: 1;
      letter-spacing: 0.1em;
      margin-bottom: 1.6rem;
      text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);

      .first-line {
        display: flex;
        flex-direction: column;
        .letter-r {
          color: #fc0853;
          text-shadow: -1px 1px #08fdd9;
        }
      }

      .second-line {
        letter-spacing: 0.1em;
        color: white;
        font-size: 20px;
        font-weight: bold;
      }

      button {
        background-color: transparent;
        border: #08fdd9 1px solid;
        color: #08fdd9;
        padding: 10px 0;
        width: 20%;
        margin-top: 30px;
        font-size: 18px;
      }
    }
  }
`;

export default StyledMain