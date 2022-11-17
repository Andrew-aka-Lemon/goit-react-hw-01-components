import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section clasName="statistics">
      {title > 0 && <h2 clasName="title">{title}</h2>}
      <ul clasName="stat-list">
        {stats.map(stat => (
          <li clasName="item" key={stat.id}>
            <span clasName="label">{stat.label}</span>
            <span clasName="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
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
