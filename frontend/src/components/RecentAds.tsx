import { gql, useQuery } from "@apollo/client";
import DisplayAds from "./DisplayAds";
import { graphql } from "../gql";

const GET_ALL_ADS = graphql(`
  query GetAllAds {
    getAllAds {
      id
      title
      category {
        id
        name
      }
      description
      imageUrl
      location
      owner
      price
    }
  }
`);


const RecentAds = () => {
    const { loading, error, data } = useQuery(GET_ALL_ADS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    console.log(data?.getAllAds);
  if (data){
    return <DisplayAds ads={data?.getAllAds} title="Recent Ads" />;
  }
  };

export default RecentAds;