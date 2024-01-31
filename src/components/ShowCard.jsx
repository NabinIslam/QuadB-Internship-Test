import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = show => {
  return (
    <Link
      className="hover:scale-95 transition-all duration-75"
      to={`/${show?.show?.show?.id}`}
    >
      <div className="rounded-xl shadow-xl border p-4">
        <img
          className="w-full h-auto rounded-lg"
          src={show?.show?.show?.image?.medium}
          alt=""
        />

        <h3 className="font-bold text-xl text-center mt-2">
          {show?.show?.show?.name}
        </h3>
        <h6 className="font-semibold text-center mt-1">
          {show?.show?.show?.genres.join(' | ')}
        </h6>
        <Button
          className="mx-auto mt-2"
          gradientDuoTone="purpleToBlue"
          size="xs"
        >
          Detail
        </Button>
      </div>
    </Link>

    // <div className="show-card">
    //   <img className='w-full h-auto' src={show?.show?.show?.image?.medium} alt="" />
    // </div>
  );
};

export default ShowCard;
