import React from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import api from "../../utils/api";
function PerLand({ data }) {
  return (
    <div>
      <PerPropertyView item={data} />
    </div>
  );
}

export default PerLand;

export async function getStaticPaths() {
  const res = await api.get(`/lands?&pagination[page]=1&pagination[pageSize]=5`);
  const paths = res?.data?.data?.map((item) => ({
    params: { landId: item.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let data = await api.get(
    `/lands/${params.landId.toString()}?populate=*&pagination[page]=1&pagination[pageSize]=5`
  );
  data = data?.data;
  return { props: { data },  };
}
