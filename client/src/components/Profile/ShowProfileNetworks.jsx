export const ShowProfileNetworks = ({ ig, fb, yt }) => {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <a href={fb}>
            <img src="/facebook.png" alt="" />
          </a>
        </div>
        <div>
          <a href={ig}>
            <img src="/instagram.png" alt="" />
          </a>
        </div>
        <div>
          <a href={yt}>
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
