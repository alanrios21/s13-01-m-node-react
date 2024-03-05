import logoSingle from "../../assets/logo-single.png";

export const Header = () => {
  return (
    <div className="md:absolute p-3 flex justify-center items-center">
      <img
        className="w-8 h-8 mr-1 rounded-full shrink-0"
        src={logoSingle}
        alt="logo roundpeople"
      />
      <span className="font-black ">ROUND</span>
      <span>PEOPLE</span>
    </div>
  );
};
