import React from "react";
import Avatar from "../api/Avatar";
import './style.css'

const handleDeleteClick = async (event) => {
  console.log(event.target.value);
  await Avatar.delete(`Avatar/${event.target.value}`)
  window.location.reload()
};


class Avatars extends React.Component {
  state = { avatarsList: [], nameValue: "" , loading:false };

  handleUpdateClick = async(event) => {
    let  tempObj = {
          name:this.state.nameValue
      }
    console.log(this.state.nameValue);
    console.log(event.target.value);
    await Avatar.put(`Avatar/${event.target.value}`,tempObj)
    window.location.reload()
   };


  componentDidMount = async () => {
    setTimeout(() => {
        this.setState({loading : true})
          const avatars = this.props.avatars.map((avatar) => {
              return (
                  <div key={avatar.id}>
                      <h3>{avatar.name} </h3>
                      <img src={avatar.avatar} alt={avatar.createdAt} />
                      <br />
                      <label>
                          Rename:
                          <input type="text" name="name"  onChange={(e) => this.setState({ nameValue: e.target.value })}/>
                          <button value={avatar.id} onClick={this.handleUpdateClick}>Update </button>
                      </label>
                      <br />
                      <button value={avatar.id} onClick={handleDeleteClick}>
                          delete
                      </button>
                  </div>
              );
          });
          return this.setState({ avatarsList: avatars });
      }, 3000);

       
    
  };
  render() {
    if(this.state.loading===false){
        return <div>Loading ...<div className="loader">
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
      </div></div>
    }
    return (
        
      <div
        style={{
          display: "grid",
          gridTemplateColumns: ` 2fr 2fr 2fr`,
          gap: `2rem`,
        }}
      >
        {this.state.avatarsList}
      </div>
    );
  }
}
export default Avatars;



//https://source.unsplash.com/300x300/?people