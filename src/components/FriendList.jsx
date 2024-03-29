import friendsData from '../jsons/friends.json';

console.log(friendsData);

export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <section>
      <ul className="friends-list">
        {friendsData.map((value, index) => {
          return (
            <li className="item" key={value.id}>
              <span
                className="status"
                style={{ backgroundColor: value.isOnline ? 'green' : 'red' }}
              ></span>
              <img className="avatar" src={value.avatar} alt="User avatar" />
              <p className="name">{value.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
