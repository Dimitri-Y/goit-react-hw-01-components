import user from '../json/user.json';
import Profile from './Profile/Profile';
import data from '../json/data.json';
import Statistics from './Statistics/Statistics';
import friends from '../json/friends.json'
import FriendList from './FriendList/FriendsList';
import transactions from '../json/transactions';
import TransactionHistory from './Transaction/Transaction';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
