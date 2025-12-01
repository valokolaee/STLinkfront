// Input component example
import { Input } from "antd";
import './css/input-active.css'
export default({ label, error, ...props }:any) => (
  <div className="form-field">
    {label && <label className="form-label">{label}</label>}
    <Input
      {...props}
      className={`custom-input ${error ? 'input-error' : ''}`}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);