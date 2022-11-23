import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import StyledFriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="qweqweqwewqeqweqwe" stats={data}></Statistics>

      <StyledFriendList friends={friends}></StyledFriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </>
  );
};
