import React from "react";
import { Link, withRouter } from "react-router-dom";

const WrestlerCard = ({ wrestler, history }) => {
  return (
    <div
      onClick={() => history.push(`/wrestlers/${wrestler.uuid}`)}
      className="wrestler-list__card"
    >
      <div className="wrestler-list__meta">
        <div className="wrestler-list__avatar">
          <img
            src="https://ya-webdesign.com/images/avatar-png-1.png"
            alt="avatar"
          />
        </div>
        <div className="wrestler-list__info">
          <h2>{wrestler.ring_name}</h2>
          <div>
            <p>{wrestler.currentShow.name}</p>
            <p>{wrestler.currentShow.promotion.name}</p>
          </div>
        </div>
      </div>
      <div className="wrestler-list__description">
        <ul>
          {wrestler.states.length ? (
            wrestler.states.map(state => (
              <Link
                onClick={e => {
                  e.stopPropagation();
                }}
                style={{ color: state.colour }}
                key={state.uuid}
                to={`/states/${state.uuid}`}
              >
                <li>
                  {state.title} - {state.name}
                </li>
              </Link>
            ))
          ) : (
            <p>This wrestler has no state currectly.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(WrestlerCard);
