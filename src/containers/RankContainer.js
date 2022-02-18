import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Rank from '../components/Rank';
import { FETCH_USERS, UPDATE_USERS } from '../reducers/rank'


const RankContainer = ({ users, updateRank, deleteRank, fetchRank}) => {
    return (
        <Rank users = {users} onUpdateRank={updateRank} onDeleteRank={deleteRank} onFetchRank={fetchRank}/>
    );
};

const mapStateToProps = state => ({
    users: state.rank.users,
});

const mapDispatchToProps = dispatch => ({
    fetchRank: () => {
        dispatch({type : FETCH_USERS, data: {githubId : 'kimseo-0'}})
        console.log('fetchRank')
    },
    updateRank: () => {
        // dispatch({type : FETCH_USERS, data: {githubId : 'kimseo-0')
        console.log('updateRank');
    },
    deleteRank: () => {
        // dispatch(deleteRank())
        console.log('deleteRank');
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RankContainer);

// export default connect(
//     state => ({
//         users: state.rank.users,
//     }),
//     {
//         updateRank,
//         deleteRank,
//     },
// )(RankContainer);