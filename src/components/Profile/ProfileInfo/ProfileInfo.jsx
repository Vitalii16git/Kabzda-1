import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
      </div>
      <div className={s.postsBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
