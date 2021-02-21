import styled from "styled-components";

import movieProjectImg from "../../assets/img/projects/movieReview-img-min.png";
import furnitureProjectImg from "../../assets/img/projects/furniture-min.png";
import WineStoreProjectImg from "../../assets/img/projects/wineStore-preview-min.png";

const StyledProject = styled.div`
  @media (min-width: 300px) {
    width: 100%;
    margin-top: 20px;

    .project-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 25px;

      a {
        width: 100%;
        text-decoration: none;
        margin-bottom: 50px;

        .project {
          width: 100%;
          height: 200px;
          position: relative;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: flex-end;
          border: 1px solid dimgray;

          .subtitle-wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-end;

            .subtitle {
              height: 0px;
              color: transparent;
              background-color: rgba(0, 0, 0, 0.3);
              height: 50px;
              width: 100%;
              color: white;
            }
          }

          :hover {
            .subtitle-wrapper {
              background-color: rgba(0, 0, 0, 0);
              transition: all 0.3s ease-in-out;
              cursor: pointer;

              .subtitle {
                transition: all 0.3s ease-in-out;
              }
            }
          }
        }
      }

      .movie-project {
        background-image: url(${movieProjectImg});
      }
      .furniture-project {
        background-image: url(${furnitureProjectImg});
      }
      .wine-project {
        background-image: url(${WineStoreProjectImg});
      }
    }
  }

  @media (min-width: 900px) {
    transform: translate(0, 20px);
    margin-top: 100px;
    margin-left: 50px;

    perspective: 1000px;

    .project-container {
      padding: 0px;

      a {
        width: 40%;
        margin-left: 60px;
        margin-bottom: 50px;

        .project {
          height: 300px;


          .subtitle-wrapper {
            background-color: rgba(0, 0, 0, 0.6);


            .subtitle {
              height: 0px;
              color: transparent;
              background-color: rgba(0, 0, 0, 0);
              height: 0px;
              width: 100%;
            }
          }

          :hover {
            .subtitle-wrapper {
              background-color: rgba(0, 0, 0, 0);
              transition: all 0.3s ease-in-out;
              cursor: pointer;

              .subtitle {
                background-color: rgba(0, 0, 0, 0.3);
                height: 50px;
                width: 100%;
                color: white;
                transition: all 0.3s ease-in-out;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledProject;
