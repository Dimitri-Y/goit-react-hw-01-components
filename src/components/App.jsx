import user from '../json/user.json';
import Profile from './Profile';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101'
      }}
    >
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

    </div>
  );
};
