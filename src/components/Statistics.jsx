export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(value => {
          return (
            <li className="item" key={value.id}>
              <span className="label">{value.label}</span>
              <span className="percentage">{value.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
