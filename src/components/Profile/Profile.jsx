import s from './Profile.module.css';
import './MyPosts/Post/Post';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <textarea></textarea>
      <button>add post</button>
      <MyPosts />
    </div>
  );
};

export default Profile;
