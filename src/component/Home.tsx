import ItemCard from "./ItemCard";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api/api";
import { ItemCardType } from "../types";

const Home = () => {
  const {
    data: items,
    isPending,
    isFetching,
  } = useQuery({
    queryKey: ["getItems"],
    queryFn: getItems,
  });
  return (
    <div className="home-container home-items">
      {isPending ? (
        <Loader />
      ) : (
        items.map((item: ItemCardType) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))
      )}
    </div>
  );
};

export default Home;
