
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div>
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

