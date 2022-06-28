import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, avatar, isAnswered }) => {
  const { author, optionOne, id } = question;
  const option =
    optionOne.text.length > 35
      ? optionOne.text.slice(0, 35) + "..."
      : optionOne.text;

  return (
    <div className="card">
      <div>
        <p>{author} asks:</p>
      </div>
      <div id="user-card">
        <img src={avatar} alt={`Avatar of ${author.name}`} className="avatar" />
        <div className="card-content">
          <p id="subheading">Would you rather</p>
          <h3 id="subheading">{option} or ...</h3>
          <Link
            to={`/card/${id}`}
            state={{
              isAnswered: isAnswered,
              question: question,
              avatar: avatar,
            }}
          >
            <button>View Poll</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }, { question }) {
  const author = users[question.author];
  return {
    avatar: author.avatarURL,
  };
}

export default connect(mapStateToProps)(Card);
