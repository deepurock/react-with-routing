import React, { Component } from "react";
class Users extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    cards: [
      {
        id: 1,
        title: "Card Title",
        subtitle: "Card Subtitle",
        data: "Some quick example text to build on the card title and make up thebulk of the cards content",
      },

      {
        id: 3,
        title: "Card Title",
        subtitle: "Card Subtitle",
        data: "Some quick example text to build fsds on the card title and make up thebulk of the cards content",
      },
    ],
  };
  render() {
    const mystyleCol = {
      height: "176px",
    };
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.cards.map((card) => (
              <div key={card.id} className="col-sm">
                <div
                  style={mystyleCol}
                  className="card shadow p-3 mt-5 mb-5 bg-white rounded"
                >
                  <div style={{ padding: "0px" }} className="card-body">
                    {card.title}
                  </div>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {card.subtitle}
                  </h6>
                  <p className="card-text">{card.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
