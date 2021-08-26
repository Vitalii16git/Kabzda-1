import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Grapefruit%2C_half.jpg" />
          {props.message}
        </div>
        <div>likes {props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
