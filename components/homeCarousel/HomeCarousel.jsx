import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
function HomeCarousel() {
  const [search, setSearch] = useState();
  const router = useRouter();
  return (
    <StyledSearch>
      <div className="cover"></div>

      <main className="main">
        <h1>Buy, Sell and Rent Properties.</h1>
        <h3>
          At Jeffy Realty, we provide you with the best platform to easily rent,
          sell, buy trusted properties. Our intuitive platform is designed to
          provide you with the most comprehensive real estate solutions, all in
          one place.
        </h3>
      </main>

      <div className="searchBarContainer">
        <aside className="searchBar">
          <div className="searchTextField">
            <TextField
              placeholder="search by location"
              fullWidth
              id="fullWidth"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="searchButton"
            onClick={() =>
              search &&
              router.push({ pathname: "/search", query: { keyword: search } })
            }
          >
            <button className="searchIconCont">
              <ArrowRightAltIcon className="searchIcon" />
            </button>
          </div>
        </aside>
      </div>
    </StyledSearch>
  );
}

export default HomeCarousel;

const StyledSearch = styled.section`
  width: 100%;
  height: 50vh;
  background-size: cover;
  position: relative;
  animation: changeBackground 10s infinite;
  background-position: contain;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vh;

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000000a3;
  }

  .main {
    width: 100%;
    height: 50%;
    z-index: 2;
    text-align: center;
    color: #fff;
  }

  .main h1 {
    font-weight: 800;
    font-size: 40px;
  }

  .main h3 {
    font-weight: 400;
    font-size: 20px;
    width: 50%;
    margin: auto;
    line-height: 2;
    padding: 10px;
  }

  .searchBarContainer {
    width: 100%;
    height: 12vh;
    transform: translateY(13vh);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .searchBarSelect {
    width: 20%;
  }

  .searchIconCont {
    width: 10%;
    transition: 0.5s;
  }

  .searchIconCont:hover .searchIcon {
    transform: translateX(20px);
  }

  .searchIcon:hover {
    transform: translateX(20px);
    transition: 0.5s;
  }

  .searchTextField {
    width: 90%;
  }

  .searchBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 60%;
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.403);
  }

  .searchButton {
    width: 10%;
    height: 100%;
    position: relative;
  }

  .searchButton button {
    height: 100%;
    text-transform: capitalize;
    font-size: 18px;
    width: 100%;
    text-align: center;
  }

  @keyframes changeBackground {
    0% {
      background-image: url("/jeffy_hero.jpg");
    }
    20% {
      background-image: url("/jeffyHero2.jpg");
    }
    40% {
      background-image: url("/jeffyHero3.jpg");
    }
    60% {
      background-image: url("/jeffyHero4.jpg");
    }
    80% {
      background-image: url("/jeffyHero5.jpg");
    }
    100% {
      background-image: url("/jeffy_hero.jpg");
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 40vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchButton button {
      height: 100%;
      text-transform: capitalize;
      font-size: 10px;
      width: auto;
      padding: 8px 3px 8px 3px;
      text-align: center;
    }

    .searchBarContainer {
      transform: translateY(9vh);
      z-index: 2;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 30vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      padding-top: 20px;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchBarContainer {
      transform: translateY(8vh);
      z-index: 2;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 30vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      padding-top: 20px;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchBarContainer {
      transform: translateY(8vh);
      z-index: 2;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
