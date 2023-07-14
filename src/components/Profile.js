import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class={css.profile}>
      <div class={css.description}>
        <img src={avatar} alt="User avatar" class={css.avatar} />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>
          {' '}
          <span class={css.tag__span}>@</span>
          {tag}
        </p>
        <p class={css.location}>{location}</p>
      </div>
      <ul class={css.stats}>
        <li class={css.li}>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{stats.followers}</span>
        </li>
        <li class={css.li}>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{stats.followers}</span>
        </li>
        <li class={css.li}>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
