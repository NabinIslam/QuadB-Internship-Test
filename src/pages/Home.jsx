import { useQuery } from '@tanstack/react-query';
import ShowCard from '../components/ShowCard';
import ShowsSkeletons from '../skeletons/ShowsSkeletons';

const Home = () => {
  const {
    data: shows = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['shows'],
    queryFn: () =>
      fetch(`https://api.tvmaze.com/search/shows?q=all`).then(res =>
        res.json()
      ),
  });

  return (
    <main>
      <div className="container mx-auto px-4 py-10">
        {isLoading || isFetching ? (
          <ShowsSkeletons />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {shows?.map(show => (
              <ShowCard show={show} key={show.show.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
