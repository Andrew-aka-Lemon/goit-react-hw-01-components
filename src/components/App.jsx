import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import StyledFriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'emulationData/user.json';
import data from 'emulationData/data.json';
import friends from 'emulationData/friends.json';
import transactions from 'emulationData/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics title="Upload stats" stats={data}></Statistics>
      {/* 
      <StyledFriendList friends={friends}></StyledFriendList>

      <TransactionHistory transactions={transactions}></TransactionHistory> */}
    </>
  );
}
