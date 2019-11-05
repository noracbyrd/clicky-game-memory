import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PictureContainer from "./components/PictureContainer";
import pictures from "./pictures.json"

class App extends Component {
  state = {
    scoreMsg: "",
    scoreCounter: 0,
    topScore: 0,
    error: "",
    // pictures, once clicked, are added to the clickedPictures array, so that we can compare what's been clicked with what hasn't been clicked
    clickedPictures: [],
    // making sure to display the images in our json file
    pictures: pictures,
  }

  //from javascript.info, this function gives a sort of random display order when called
  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  }

  // function to handle a lot of the resetting when a player wins
  playerWins = newstate => {
    alert("Congrats, you guessed them all!")
    newstate.clickedPictures = [];
    newstate.scoreCounter = 0;
    newstate.scoreMsg = "Play again! Reshuffling now...";
  }

  handlePictureClick = click => {
    const newState = {};
    // below grabs the unique id of the image that was clicked:
    const pictureid = parseInt(click.target.id);
    // the player loses if they click an image they've clicked before, i.e., the id of the image they clicked is included in the clickedPictures array:
    if (this.state.clickedPictures.includes(pictureid)) {
      // if the score they made it to is greater than the previous high score, we update the high score along with the other resets:
      alert("Oops, you guessed that one already! Starting over...")
      if (this.state.scoreCounter > this.state.topScore) {
        newState.clickedPictures = [];
        newState.topScore = this.state.scoreCounter;
        newState.scoreCounter = 0;
        newState.scoreMsg = "Sorry, you already clicked that one! Starting over.  .  ."
        newState.pictures = this.shuffle(pictures);
      }
      // otherwise the top score stays the same and everything else resets:
      else {
        newState.clickedPictures = [];
        newState.scoreCounter = 0;
        newState.scoreMsg = "Sorry, you already clicked that one! Starting over...";
        newState.pictures = this.shuffle(pictures);
      }
    } else {
      // regular gameplay continues if they click a new image that hasn't been clicked before. For the below, if there is a new high score, we update that, and also the clicked ID gets added to the clickedPictures array
      if (this.state.scoreCounter >= this.state.topScore) {
        this.state.clickedPictures.push(pictureid);
        newState.clickedPictures = this.state.clickedPictures;
        newState.scoreMsg = "Good job, you didn't have that one yet!";
        newState.scoreCounter = this.state.scoreCounter + 1;
        newState.topScore = newState.scoreCounter;
        // if they guessed all the images, we alert the user if they win and resets the game:
        if (newState.scoreCounter === 12) {
          this.playerWins(newState);
          newState.pictures = this.shuffle(pictures);
          // otherwise we shuffle the images again:
        } else {
          newState.pictures = this.shuffle(pictures)
        }
      }
      else {
        this.state.clickedPictures.push(pictureid);
        newState.clickedPictures = this.state.clickedPictures;
        newState.scoreMsg = "Good job, you didn't have that one yet!";
        newState.scoreCounter = this.state.scoreCounter + 1;
        // if they guessed all the images, we alert the user if they win and resets the game:
        if (newState.scoreCounter === 12) {
          this.playerWins(newState);
          newState.pictures = this.shuffle(pictures);
           // otherwise we shuffle the images again:
        } else {
          newState.pictures = this.shuffle(pictures)
        }
      }
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Navbar scoreMsg={this.state.scoreMsg} scoreCounter={this.state.scoreCounter} topScore={this.state.topScore} />
        <Header />
        <PictureContainer handlePictureClick={this.handlePictureClick} pictures={pictures} pictureid={this.state.pictureid} />
      </div>
    );
  }
}

export default App;


