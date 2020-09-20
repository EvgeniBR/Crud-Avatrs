import React from "react";
import Avatar from "../api/Avatar";
import Avatars from "./Avatars";



class App extends React.Component {
  state = { avatars: [], term: "" };

  componentDidMount = async () => {
    const response = await Avatar.get("Avatar");

    this.setState({ avatars: response.data });
  };

   handleCreateClick = async ()=> {
     let  newAvatar = {
           name: this.state.term,
           avatar : `https://source.unsplash.com/120x120/?people`
       }
    console.log(this.state.term);
    await Avatar.post("Avatar" , newAvatar);
    window.location.reload()
};

  render() {
    return (
      <div
        className="main_div"
        style={{ marginTop: `10px`, textAlign: "center" }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button onClick={this.handleCreateClick}>Create New Avatar</button>
        <Avatars avatars={this.state.avatars} />
      </div>
    );
  }
}

export default App;
