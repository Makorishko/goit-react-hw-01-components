import { Profile } from './profile/profile';
import user from '../../src/user.json';
import { Statistics } from './statistic/statistics';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import { FriendList } from './friendlist/friendlist';
import transactions from '../../src/transactions';
import { TransactionHistory } from './transactions/transactions';

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

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
