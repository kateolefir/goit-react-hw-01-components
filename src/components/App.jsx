import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendList';

import styles from './styles.module.css';

export const App = () => {
  return (<div className={styles.wrapper}>
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    <Statistics title="Upload stats"
      stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
  );
};
