import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
