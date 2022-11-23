import PropTypes from 'prop-types';
import getRandomColor from 'Utils/getRandomColor';
import {
  StatsList,
  StatsItem,
  Header,
  StatisticBox,
} from 'components/Statistics/Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticBox>
      {title && <Header>{title}</Header>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id} color={getRandomColor()}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticBox>
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
