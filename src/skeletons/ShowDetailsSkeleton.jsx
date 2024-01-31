import Skeleton from 'react-loading-skeleton';

const ShowDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col gap-5 lg:flex-row">
      <div className="basis-[30%]">
        <Skeleton className="w-full" height={500} borderRadius={8} />
      </div>
      <div className="basis-[70%] pl-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
       
      </div>
    </div>
  );
};

export default ShowDetailsSkeleton;
