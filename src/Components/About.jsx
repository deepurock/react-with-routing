import React, { Component } from "react";
import itemService from "./itemService";
class About extends Component {
  constructor(props) {
    super(props);
    this.itemService = new itemService();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    this.itemService
      .myList()
      .then((res) => res.json())
      // .then(console.log((res) => JSON.stringify(res)))
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    // fetch("http://localhost:3200/")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  }
  render() {
    const mystyleCol = {
      height: "176px",
    };
    const myStyle = {
      minHeight: "calc(100vh - 128px)",
    };
    const { error, isLoaded, items } = this.state;
    return (
      <React.Fragment>
        <div className="container" style={myStyle}>
          {error ? (
            <>
              <div className="text-center">Error: {error.message}</div>
            </>
          ) : (
            <div className="row">
              {items.map((card) => (
                <div key={card.id} className="col-md-3">
                  <div
                    style={mystyleCol}
                    className="card shadow p-3 mt-5 mb-5 bg-white rounded"
                  >
                    <div style={{ padding: "0px" }} className="card-body">
                      {"Name:"} {card.name} {card.surname}
                    </div>
                    <p style={{ color: "cadetblue" }} className="card-text">
                      {
                        "Some quick example text to build on the card title and make up thebulk of the cards content"
                      }
                    </p>

                    <h6 className="card-subtitle mb-2 text-muted">
                      {"Age:"} {card.age}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
