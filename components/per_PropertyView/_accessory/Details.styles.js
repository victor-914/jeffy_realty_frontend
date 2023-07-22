import styled from "styled-components";

const StyledDetails = styled.section`
  width: 94%;
  height: 100vh;
  /* background-color: orange; */
  margin: auto;

  .detailsContainer {
    /* background-color: red; */
    width: 95%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 30px;
  }

  .detailPerList {
    display: flex;
    width: 95%;
    height: auto;
    padding: 8px;
    margin: auto;
    border-radius: 2px;
  }

  .detailPerList:nth-child(odd) {
    background-color: #d9ab22;
    color: #000;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .detailPerList:nth-child(even) {
    background-color: #ecd591;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .detailTitle {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 800;
    text-transform: capitalize;
    font-size: 14px;
  }
  .detailValue {
    display: flex;
    width: 65%;
    height: 100%;
    font-weight: 500;
    /* background-color: beige; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .subArrayItem {
    margin-left: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: auto;
    /* background-color: red; */
    .detailsContainer {
      width: 100%;
      margin: auto;
      /* background-color: #1252ae; */
      margin-top: 10px;
    }

    .detailPerList {
      width: 90%;
      margin: auto;
      /* padding: 8px; */
      /* line-height: 1.2; */
    }

    .detailTitle {
      font-weight: 300;
    }

    .detailValue {
      justify-content: flex-end;
      font-weight: 300;
    }
  }
`;

export default StyledDetails;