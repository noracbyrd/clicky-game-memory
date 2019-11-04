import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PictureContainer from "./components/PictureContainer";
import pictures from "./pictures.json"

class App extends Component {
  state = {
    // message starts empty
    scoreMsg: "",
    scoreCounter: 0,
    topScore: 0,
    error: "",
    pictureid: "",
    // pictures, once clicked, are added to the clickedPictures array, so that we can compare what's been clicked with what hasn't been clicked
    clickedPictures: [],
    // each image also needs to have a boolean to say, yes this has been clicked or no, it hasn't
    clicked: false,
    pictures: pictures,
  }

  //from javascript.info
  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  }

  handlePictureClick = click => {
    console.log(this.state.pictureid)
    console.log("I'm clicked")
    const newState = {};
    const pictureid = parseInt(click.target.id);
    console.log(pictureid);
    if (this.state.pictureid === pictureid || this.state.clickedPictures.includes(pictureid)) {
      if (this.state.scoreCounter > this.state.topScore) {
        newState.clickedPictures = [];
        newState.topScore = this.state.scoreCounter;
        newState.scoreCounter = 0;
        newState.scoreMsg = "Sorry, you already clicked that one! Starting over..."
        newState.pictures = this.shuffle(pictures);
      }
      else {
        newState.clickedPictures = [];
        newState.scoreCounter = 0;
        newState.scoreMsg = "Sorry, you already clicked that one! Starting over...";
        newState.pictures = this.shuffle(pictures);
      }
    } else {
      if (this.state.scoreCounter >= this.state.topScore) {
        this.state.clickedPictures.push(pictureid);
        newState.clickedPictures = this.state.clickedPictures;
        newState.clicked = true;
        newState.scoreMsg = "Good job, you didn't have that one yet!";
        newState.scoreCounter = this.state.scoreCounter + 1;
        newState.pictureid = pictureid;
        newState.topScore = newState.scoreCounter;
        newState.pictures = this.shuffle(pictures)
      }
      else {
        this.state.clickedPictures.push(pictureid);
        newState.clickedPictures = this.state.clickedPictures;
        newState.clicked = true;
        newState.scoreMsg = "Good job, you didn't have that one yet!";
        newState.scoreCounter = this.state.scoreCounter + 1;
        newState.pictureid = pictureid;
        newState.pictures = this.shuffle(pictures)
      }
    }
    this.setState(newState);
    // console.log(newState);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Navbar scoreMsg={this.state.scoreMsg} scoreCounter={this.state.scoreCounter} topScore={this.state.topScore} />
        <Header />
        <PictureContainer handlePictureClick={this.handlePictureClick} pictures={pictures} pictureid={this.state.pictureid} clicked={this.state.clicked} />
      </div>
    );
  }
}

export default App;


