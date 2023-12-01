import AdCard, { AdCardProps } from "./AdCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

type DisplayAdsType = {
  ads: AdCardProps[];
  title: string;
};



const DisplayAds = ({ ads, title }: DisplayAdsType) => {
    const [recentAds, setRecentAds] = useState<AdCardProps[]>(ads);

    const deleteAd = async (id: number) => {
        try {
          await axios.delete(`http://localhost:4000/ad/${id}`);
          const updateAds = recentAds.filter((ad) => ad.id !== id);
          setRecentAds(updateAds);
        } catch {
          console.log("error");
        }
        
      };

  return (
    <>
      <h2>{title}</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
          <Link href={`/ad/${ad.id}`} key={ad.id}>
            <AdCard
              id={ad.id}
              imageUrl={ad.imageUrl}
              link={ad.link}
              title={ad.title}
              price={ad.price}
              category={ad.category}
              description={ad.description}
              location={ad.location}
              owner={ad.owner}
            />
            
          </Link>
          <button
              className="button"
              onClick={() => {
                deleteAd(ad.id);
              }
              }
              >
              Delete
            </button>
            </div>
        ))}
      </section>
    </>
  );
};

export default DisplayAds;