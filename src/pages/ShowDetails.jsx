import { useQuery } from '@tanstack/react-query';
import { Badge, Button } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useState } from 'react';
import BookTicketModal from '../modal/BookTicketModal';
import ShowDetailsSkeleton from '../skeletons/ShowDetailsSkeleton';

const ShowDetails = () => {
  const { id } = useParams();

  const {
    data: show = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['show'],
    queryFn: () =>
      fetch(`https://api.tvmaze.com/shows/${id}`).then(res => res.json()),
  });
  const [openModal, setOpenModal] = useState(false);
  const [showData, setShowData] = useState(null);

  //if (isLoading || isFetching) return <p>loading...</p>;

  return (
    <main>
      {isLoading || isFetching ? (
        <ShowDetailsSkeleton />
      ) : (
        <div className="container mx-auto px-4 py-10 flex flex-col gap-5 lg:flex-row">
          <div className="basis-[30%]">
            <img
              className="w-full h-auto shadow-2xl rounded-xl"
              src={show?.image?.original}
              alt=""
            />
          </div>
          <div className="basis-[70%] pl-4">
            <h1 className="font-extrabold text-2xl">{show?.name}</h1>
            <div className="flex flex-wrap items-center gap-2 my-3">
              <Badge className="shadow" size="lg">
                Language: <span className="font-bold">{show?.language}</span>
              </Badge>
              <Badge className="shadow" size="lg">
                Genre:{' '}
                <span className="font-bold">{show?.genres?.join(' | ')}</span>
              </Badge>
              <Badge className="shadow" size="lg">
                Rating:{' '}
                <span className="font-bold">
                  {show?.rating?.average ? show?.rating?.average : 'N/A'}
                </span>
              </Badge>
              <Badge className="shadow" size="lg">
                Runtime:{' '}
                <span className="font-bold">
                  {show?.runtime ? show?.runtime + 'hr' : 'N/A'}
                </span>
              </Badge>
              <Badge className="shadow" size="lg">
                Status:{' '}
                <span className="font-bold">
                  {show?.status ? show?.status : 'N/A'}
                </span>
              </Badge>
            </div>
            <div className="font-semibold">{parse(show?.summary)}</div>
            <Button
              className="mt-5"
              gradientDuoTone="purpleToBlue"
              onClick={() => {
                setShowData(show);
                setOpenModal(true);
              }}
            >
              Book Ticket
            </Button>
          </div>
        </div>
      )}

      <BookTicketModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        showData={showData}
      />
    </main>
  );
};

export default ShowDetails;
