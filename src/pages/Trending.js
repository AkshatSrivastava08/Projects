import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    fetch(url)
    .then((response) => response.json())
    .then((data) => {setData(data);})
    .catch((err) => {console.log(err)});

  },[])
 

  if(data.length === 0){
    return (
      <div>
      <strong>Loading...</strong>
      <div
        className="ml-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"></div>
    </div>
    );
  }

  else{
    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
 
};

export default Trending;