import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]} >
      {friends.map(friend => <FriendListItem
        status={friend.isOnline ?"isOnline":"isOfline"}
        name={friend.name}
        id={friend.id}
        avatar={friend.avatar}
        key={friend.id}
      ></FriendListItem>)}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends:PropTypes.array.isRequired
};
