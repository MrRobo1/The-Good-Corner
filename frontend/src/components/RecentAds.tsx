import { AdCardProps } from "./AdCard";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayAds from "./DisplayAds";

const RecentAds = () => {
    const [recentAds, setRecentAds] = useState<AdCardProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios.get<AdCardProps[]>(
                  "http://localhost:4000/ad"
                  );
                  console.log("result", result);
                setRecentAds(result.data);
            } catch (err) {
                console.log("error", err);
            }
            };
            fetchData();
    }, []);

    return <DisplayAds ads={recentAds} title="Recent Ads" />;

};

export default RecentAds;