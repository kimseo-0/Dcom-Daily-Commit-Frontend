import React from 'react';
import { connect } from 'react-redux';
import Rank from '../components/Rank';


const RankContainer = ({ users }) => {
    return (
        <Rank users = {users} />
    );
};


const mapStateToProps = state => ({
    users: state.rank.users,
});

const mapDispatchToProps = dispatch => ({
    // 임시 함수
    updateRank: () => {
        console.log('updateRank');
    },
    deleteRank: () => {
        console.log('deleteRank');
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RankContainer);