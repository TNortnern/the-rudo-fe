import React from 'react';
import { Link } from 'react-router-dom';

const WrestlerCard = ({wrestler}) => {
    return (
      <Link to={`wrestler/${wrestler.uuid}`}>
        <div className="wrestler-list__card">
          <div className="wrestler-list__meta">
            <div className="wrestler-list__avatar">
              <img
                src="https://ya-webdesign.com/images/avatar-png-1.png"
                alt="avatar"
              />
            </div>
            <div className="wrestler-list__info">
              <Link to={`wrestlers/${wrestler.uuid}`}>
                <h2>{wrestler.ring_name}</h2>
              </Link>
              <div>
                <p>{wrestler.currentShow.name}</p>
                <p>{wrestler.currentShow.promotion.name}</p>
              </div>
            </div>
          </div>
          <div className="wrestler-list__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ducimus expedita quos eaque et obcaecati delectus similique sint
            excepturi nemo quasi consequatur enim, culpa, totam autem eveniet
            deleniti impedit asperiores necessitatibus optio minus molestias!
            Rerum ad sunt ipsum neque fuga. Eius doloribus nostrum hic repellat
            esse quam explicabo, non quos ullam quibusdam exercitationem
            voluptates, deleniti at laboriosam officia ipsa error nobis, ipsum
            mollitia veniam quisquam ea. Praesentium officiis facere mollitia
            sed earum ipsa dignissimos eligendi. Laudantium dicta ratione
            laborum obcaecati?
          </div>
        </div>
        {/* <Divider></Divider> */}
      </Link>
    );
}

export default WrestlerCard;