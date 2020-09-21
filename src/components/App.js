import React from "react";
import Avatar from "../api/Avatar";
import Avatars from "./Avatars";



class App extends React.Component {
  state = { avatars: [], term: "" };

  getAvatrs = async() => {
    const response = await Avatar.get("Avatar");

    this.setState({ avatars: response.data });
  }

   handleDeleteClick = async (event) => {
    console.log(event.target.value);
    await Avatar.delete(`Avatar/${event.target.value}`);
    await this.getAvatrs();
     
  };

  handleUpdateClick = async (event , state) => {
    let tempObj = {
      name: state.nameValue,
    };
    console.log(`Hi`);
    console.log(state.nameValue);
    console.log(event.target.value);
    await Avatar.put(`Avatar/${event.target.value}`, tempObj)
    await this.getAvatrs();
  }
  
  componentDidMount = async () => {
    this.getAvatrs();
  };

   handleCreateClick = async ()=> {
     let  newAvatar = {
           name: this.state.term,
           avatar : `https://source.unsplash.com/120x120/?people,faces`
       }
    console.log(this.state.term);
    await Avatar.post("Avatar" , newAvatar);
    this.getAvatrs();
};

  render() {
    console.log(this.state.avatars);
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
        <Avatars avatars={this.state.avatars} onDelete={this.handleDeleteClick} onUpdate={this.handleUpdateClick} />
      </div>
    );
  }
}

export default App;
