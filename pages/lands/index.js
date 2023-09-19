import React, { useContext, useEffect, useState } from "react";
import api, { fetcher } from "../../utils/api";
import LandModel from "../../components/perModel/landModel";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SpecimenContext } from "../../context/contextProvider";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import useSWR from "swr";
import Card from "../../components/card/Card";
function LandListing({ landsProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [lands, setLands] = useState([]);
  const router = useRouter();
  const { data } = useSWR(
    `https://jeffy-realty.onrender.com/api/lands?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=1`,
    fetcher,
    {
      fallbackData: landsProps,
    }
  );

  useEffect(() => {
    setLands(data.data);
    console.log(data, lands);
    return () => {
      setLands([]);
    };
  }, [data, lands, router.isReady]);
  return (
    <>
      {/* <HomeCarousel /> */}
      <StyledListing className="landListing">
        {lands?.map((item) => (
          <div
            className="container"
            onClick={() => router.push(`/land/${item.id}`)}
          >
            {/* <LandModel data={item} /> */}
            <Card data={item} />
          </div>
        ))}
      </StyledListing>
      <Pagination
        data={data?.meta}
        stateIndex={pageIndex}
        setstateIndex={setPageIndex}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const resLand = await api.get(
    `/lands?populate=*&pagination[page]=1&pagination[pageSize]=1`
  );
  let landsProps = resLand.data;
  return { props: { landsProps } };
};

const StyledListing = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 40px;

  .container {
    width: auto;
  }
`;

export default LandListing;
