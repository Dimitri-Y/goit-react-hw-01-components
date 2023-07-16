import css from './Statistics.module.css';
import PropTypes from 'prop-types';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const Statistics = ({ title, stats }) => {
  return (
    <section className={css['statistics']}>
      <div className={css['block__title']}>
        {title && <h2 className={css['title']}>{title}</h2>}
        <ul className={css['stat-list']}>
          {stats.map(stats => (
            <li
              style={{ background: getRandomHexColor() }}
              className={css['item']}
              key={stats.id}
            >
              <span className={css['label']}>{stats.label}</span>
              <span className={css['percentage']}>
                {stats.percentage}
                <span className={css['procent']}>%</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
