export const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <section>
      <div className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map(value => {
            return (
              <li
                className="item"
                key={value.id}
                style={{ backgroundColor: getRandomColor() }}
              >
                <span className="label">{value.label}</span>
                <span className="percentage">{value.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
