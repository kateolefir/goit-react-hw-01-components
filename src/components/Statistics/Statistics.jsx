import PropTypes from 'prop-types';
import styles from '../Statistics/styles.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.statsList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
</section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;