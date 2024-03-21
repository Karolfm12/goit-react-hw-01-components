import userData from '../jsons/user.json';

export const Profile = () => {
  return (
    <section>
      <div className="profile">
        <div className="description">
          <img src={userData.avatar} alt="User avatar" className="avatar" />
          <p className="name">{userData.username}</p>
          <p className="tag">{userData.tag}</p>
          <p className="location">{userData.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{userData.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{userData.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{userData.stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
