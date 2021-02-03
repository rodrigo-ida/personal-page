import styled from 'styled-components'

const StyledMain = styled.main`

overflow: hidden;
perspective: 500px;


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
      display: none;
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
      padding: 100px;
      font-size: 12rem;
      line-height: 1;
      letter-spacing: 0.1em;
      margin-bottom: 1.6rem;
      text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);

      .second-line-wrapper{
        overflow: hidden;
      }

      .first-line {
        display: flex;
        flex-direction: column;
        .letter-r {
          color: yellow;
          text-shadow: -1px 1px black;
        }
      }

      .second-line {
        letter-spacing: 0.1em;
        color: white;
        font-size: 20px;
        font-weight: bold;
        overflow: 'hidden';

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