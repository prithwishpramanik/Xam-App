import React, { Component } from "react";
import axios from "axios";
import Card from "./card";

class test extends Component {
  state = {
    questions: [],
    index: 0,
  };

  callApi(id) {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=" + id)
      .then((response) => {
        //console.log(response.data.results);
        this.setState({ questions: response.data.results, index: 0 });
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  returnQuestion(index) {
    if (this.state.questions.length !== 0) {
      return this.state.questions[index].question;
    }
  }

  nextQuestion() {
    this.setState({
      question: this.state.questions,
      index: this.state.index + 1,
    });
  }

  prevQuestion() {
    this.setState({
      question: this.state.questions,
      index: this.state.index - 1,
    });
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.callApi(id);
  }
  render() {
    return (
      <div className="container">
        <div class="row align-items-center mt-5">
          <div class="col">One of three columns</div>
          <div class="col">
            <div class="card text-center">
              <div class="card-header">
                <h5>{this.returnQuestion(this.state.index)}</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title">{this.props.brief}</h5>
                <p class="card-text">{this.props.title}</p>
                <div class="d-flex justify-content-between">
                  <a
                    class="btn btn-primary"
                    onClick={this.prevQuestion.bind(this)}
                  >
                    &larr; Previous
                  </a>
                  <a
                    class="btn btn-primary"
                    onClick={this.nextQuestion.bind(this)}
                  >
                    Next &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default test;
