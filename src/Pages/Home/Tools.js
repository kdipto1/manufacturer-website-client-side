import React from 'react';
import { useQuery } from 'react-query';
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Loading from '../Utility/Loading';

const Tools = () => {
  const { data:tools, isLoading } = useQuery("homeTools", () =>
    fetch("https://server-12-12.herokuapp.com/tools?size=6").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h2>Tools</h2>
      {tools.map(tool => <h1>Tools:{tool?.name}</h1> )}
    </div>
  );
};

export default Tools;