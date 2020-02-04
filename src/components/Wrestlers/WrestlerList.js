import React from "react";
import Layout from "../Layout";
import { connect } from "react-redux";
import { getWrestlers } from "../../actions/wrestlers";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Divider from '@material-ui/core/Divider';

const WrestlerList = ({ wrestlers }) => {
  return (
    <Layout>
      <div className="wrester-list">
        <Container>
          <Box>
            <div className="wrestler-list__list">
              {wrestlers ? (
                wrestlers
                  .filter(wrestler => wrestler.active === 1)
                  .map(wrestler => (
                    <>
                      <div className="wrestler-list__card">
                        <div className="wrestler-list__meta">
                          <div className="wrestler-list__avatar">
                            <img
                              src="https://ya-webdesign.com/images/avatar-png-1.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="wrestler-list__info">
                            <span>{wrestler.ring_name}</span>
                            <div>
                              <p>{wrestler.currentShow.name}</p>
                              <p>{wrestler.currentShow.promotion.name}</p>
                            </div>
                          </div>
                        </div>
                        <div className="wrestler-list__description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ducimus expedita quos eaque et obcaecati
                          delectus similique sint excepturi nemo quasi
                          consequatur enim, culpa, totam autem eveniet deleniti
                          impedit asperiores necessitatibus optio minus
                          molestias! Rerum ad sunt ipsum neque fuga. Eius
                          doloribus nostrum hic repellat esse quam explicabo,
                          non quos ullam quibusdam exercitationem voluptates,
                          deleniti at laboriosam officia ipsa error nobis, ipsum
                          mollitia veniam quisquam ea. Praesentium officiis
                          facere mollitia sed earum ipsa dignissimos eligendi.
                          Laudantium dicta ratione laborum obcaecati?
                        </div>
                      </div>
                      {/* <Divider></Divider> */}
                    </>
                  ))
              ) : (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width={"100%"}
                  height={150}
                />
              )}
            </div>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    wrestlers: state.wrestlers
  };
};

export default connect(mapStateToProps, { getWrestlers })(WrestlerList);
