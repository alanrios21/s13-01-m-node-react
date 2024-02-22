// eslint-disable-next-line react/prop-types
export const RpInput = ({ title, value, handleChange, type, name }) => {
  return (
    <div className="form-group mt-3">
      <label className="text-rp-gray">{title}</label>
      <div className="border rounded-md px-3 py-1 mt-1">
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className="form-control w-full border-none outline-none"
          placeholder="Correo electronico"
        ></input>
      </div>
    </div>
  );
};
