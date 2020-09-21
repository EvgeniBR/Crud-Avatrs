import React from "react";
//import Avatar from "../api/Avatar";
import "./style.css";

class Avatars extends React.Component {
  state = { avatarsList: [], nameValue: "", loading: true };

  handleUpdateClick = (event) => {
    this.props.onUpdate(event, this.state);
  };

  handleDeleteClick = (event) => {
    this.props.onDelete(event);
  };

  renderAvatars = () => {
    if (this.props.avatars == null || this.props.avatars.length === 0) {
      return null;
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: `1rem`,
          width: `100vw`,
        }}
      >
        {this.props.avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            style={{ flexGrow: `1`, width: `30%`, margin: `1rem` }}
          >
            <h3>{avatar.name} </h3>
            <img src={avatar.avatar} alt={avatar.createdAt} />
            <br />
            <label>
              Rename:
              <input
                type="text"
                name="name"
                onChange={(e) => this.setState({ nameValue: e.target.value })}
              />
              <button value={avatar.id} onClick={this.handleUpdateClick}>
                Update{" "}
              </button>
            </label>
            <br />
            <button value={avatar.id} onClick={this.handleDeleteClick}>
              delete
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    console.log("render:", this.props);
    if (this.state.loading === false) {
      return (
        <div>
          Loading ...
          <div className="loader">
            <div className="circles">
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
            <div className="pacman">
              <span className="top"></span>
              <span className="bottom"></span>
              <span className="left"></span>
              <div className="eye"></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: ` 2fr 2fr 2fr`,
          gap: `2rem`,
        }}
      >
        {this.renderAvatars()}
      </div>
    );
  }
}
export default Avatars;

//https://source.unsplash.com/300x300/?people
