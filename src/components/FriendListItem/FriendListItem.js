import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ status, avatar, id, name }) => {
  return (
    <li key={id} className={css['item']}>
      <span className={clsx(css['status'], css[status])}></span>
      <img
        className={css['avatar']}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css['name']}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  status: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
