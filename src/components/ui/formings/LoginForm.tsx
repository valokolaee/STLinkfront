import { Input } from "antd";



export default () => (
  <div className="form-container">
    <h2 className="form-title">Welcome Back</h2>

    <form>
      <div className="form-field">
        <label className="form-label">Email Address</label>
        <Input
          type="email"
          placeholder="Enter your email"
          className="custom-input"
        />
      </div>

      <div className="form-field">
        <label className="form-label">Password</label>
        <Input.Password
          placeholder="Enter your password"
          className="custom-input"
        />
      </div>

      <div className="form-checkbox">
        <input type="checkbox" className="checkbox-input" id="remember" />
        <label htmlFor="remember" className="checkbox-label">
          Remember me
        </label>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
    </form>
  </div>
);