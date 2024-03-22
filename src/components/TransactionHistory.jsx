import transactionHistoryData from '../jsons/transactions.json';

console.log(transactionHistoryData);

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistoryData.map((value, index) => {
            return (
              <tr
                key={value.id}
                style={{
                  backgroundColor:
                    index % 2 === 0 ? 'rgb(233, 233, 233)' : 'white',
                }}
              >
                <td>{value.type}</td>
                <td>{value.amount}</td>
                <td>{value.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
