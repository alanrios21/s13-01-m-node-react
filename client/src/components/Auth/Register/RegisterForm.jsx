import { loginRequest } from "../../../api/auth/index";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

export const RegisterForm = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    error: "",
    loading: false,
    showPassword: false,
  });

  const clearError = () => {
    setTimeout(() => {
      setFormData({ ...formData, error: "" });
    }, 2000);
  };

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();

    const { email, password } = formData;
    setFormData({ ...formData, loading: true });

    try {
      const user = await loginRequest(email, password);
      setFormData({ ...formData, loading: false });
      login(user.data);
    } catch (error) {
      setFormData({
        ...formData,
        loading: false,
        error: "Authentication failed",
      });
      clearError();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
            ></input>
            <input
              type={formData.showPassword ? "text" : "password"}
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              className="form-control"
              placeholder="Confirm password"
            ></input>
            <div>
              <p>Show Password</p>
              <input
                type="checkbox"
                onClick={() =>
                  setFormData({
                    ...formData,
                    showPassword: !formData.showPassword,
                  })
                }
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            {formData.loading ? "Loading..." : "Login"}
          </button>
          {formData.error && <div className="">{formData.error}</div>}
        </form>
      </div>
    </>
  );
};
