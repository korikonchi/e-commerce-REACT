import { Icons } from "./iconList";
import "./Icon.scss";

export const Icon = ({ i, className, ...rest }) => {
  const I = Icons[i];
  return !I ? (
    <h1 className="color-danger">{i}</h1>
  ) : (
    <svg
      className={`app-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${i} icon`}
      role="graphics-document"
      viewBox={I.viewBox}
      fill="none"
      {...rest}
    >
      {I.path.map((p, i) => {
        return <path key={`${p.substr(0, 10)}-${i}`} d={p}></path>;
      })}
    </svg>
  );
};

export default Icon;
