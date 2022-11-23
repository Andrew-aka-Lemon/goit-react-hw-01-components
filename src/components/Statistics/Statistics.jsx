import PropTypes from 'prop-types';
import styled from 'styled-components';

// const randomColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

const StatsList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  /* background-color: {(p => randomColor())}; */

  span {
    display: block;
  }
`;

const Header = styled.h2`
  text-align: center;
`;

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <Header>{title}</Header>}
      <StatsList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </StatsList>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
