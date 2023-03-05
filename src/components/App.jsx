import {Profile} from 'components/Profile/profile.jsx';
import user from 'components/Profile/user.json';
import data from './Statistics/data.json';
import {Statistics} from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import {FriendList} from './FriendList/FriendList.jsx'
// import {FriendListItem} from './FriendList/FriendListItem.jsx'
import transactions from './Transactions/transactions.json';
import {TransactionHistory} from './Transactions/transactions.jsx'

export const App = () => {
  return (
    <div>
   <Profile
   username={user.username}
   tag={user.tag}
   location={user.location}
   avatar={user.avatar}
   stats={user.stats}
   />
   <Statistics title="Upload stats" stats={data} />
   <Statistics stats={data} />
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} /> 
    </div>
  );
};
