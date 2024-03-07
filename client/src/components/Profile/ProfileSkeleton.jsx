import { Skeleton } from "@mui/material";

export const ProfileSkeleton = () => {
  return (
    <>
      <section className=" m-auto ">
        <div className="p-8 overflow-x-hidden">
          <h2 className="font-bold">
            <Skeleton variant="text" animation="wave" width={100} />
          </h2>
          <p>
            <Skeleton variant="text" animation="wave" width={100} />
          </p>

          <div className="flex flex-col items-center">
            <Skeleton
              variant="circular"
              animation="pulse"
              width={128}
              height={128}
            />
          </div>

          <div className="mt-8">
            <Skeleton
              variant="rectangular"
              width={`100%`}
              height={130}
              animation="wave"
            ></Skeleton>
          </div>

          <p className="text-sm mt-8 md:text-base">
            <Skeleton variant="text" animation="wave" width={`100%`} />
          </p>
          <p>
            <Skeleton
              variant="text"
              animation="wave"
              width={`100%`}
              height={40}
            />
          </p>
          <p className="text-sm md:text-base mt-8">
            <Skeleton variant="text" animation="wave" width={`100%`} />
          </p>
          <p>
            <Skeleton
              variant="text"
              animation="wave"
              width={`100%`}
              height={40}
            />
          </p>
          <p className="text-sm mt-8 md:text-base">
            <Skeleton variant="text" animation="wave" width={`100%`} />
          </p>
          <p>
            <Skeleton
              variant="text"
              animation="wave"
              width={`100%`}
              height={40}
            />
          </p>

          <div className="flex justify-center items-center pt-4 mt-10  w-80 m-auto md:w-full">
            <Skeleton variant="rectangular" width={200} height={40} />
          </div>
        </div>

        <div className="p-8 overflow-hidden max-w-[75%] m-auto">
          <span className="font-semibold text-lg">
            <Skeleton variant="text" animation="wave" width={200} />
          </span>

          <div className="w-auto">
            <Skeleton
              variant="rectangular"
              width={`100%`}
              height={130}
              animation="wave"
            />
          </div>

          <div className="w-auto mt-5">
            <Skeleton
              variant="rectangular"
              width={`100%`}
              height={130}
              animation="wave"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 pb-10 w-80 m-auto md:w-full">
          <Skeleton></Skeleton>
        </div>
      </section>
    </>
  );
};
