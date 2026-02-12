import "../../styles/auth.css";

export default function AuthLayout({ image, children, reverse = false }) {
  return (
    <div className={`auth-wrapper ${reverse ? "reverse" : ""}`}>
      
      {/* IMAGE SIDE */}
      <div className="auth-image">
        <img src={image} alt="church" />
      </div>

      {/* FORM SIDE */}
      <div className="auth-form">
        <div className="auth-card">
          {children}
        </div>
      </div>

    </div>
  );
}
