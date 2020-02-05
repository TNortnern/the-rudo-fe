import React from "react";
import Layout from "../Layout";
import { connect } from "react-redux";
import { getWrestlers } from "../../actions/wrestlers";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { Link } from "react-router-dom";
import WrestlerCard from "./WrestlerCard";
// import Divider from '@material-ui/core/Divider';

const WrestlerList = ({ wrestlers }) => {
  return (
    <Layout>
      <div className="wrestler-list">
        <Container>
          <Box>
              <div className="wrestler-list__search">
                  <input type="text" className="default-input" />
              </div>
            <div className="wrestler-list__list">
              {wrestlers ? (
                wrestlers
                  .filter(wrestler => wrestler.active === 1)
                  .map(wrestler => (
                    <WrestlerCard wrestler={wrestler} />
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
