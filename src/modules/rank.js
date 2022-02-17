const INITIAL = 'rank/INITIAL';
const UPDATE = 'rank/UPDATE';
const DELETE = 'rank/DELETE';

export const initialRank = () => ({ type: INITIAL });
export const updateRank = () => ({ type: UPDATE });
export const deleteRank = () => ({ type: DELETE });

const initialState = {
    users: [
        {
            "id": "justkode",
            "name": "김수한무",
            "paidFine": 0,
            "startedAt": 1636785193000,
            "unpaidFine": 46000,
            "commitsInARow": 43,
            "totalCommits": 131,
            "participationRate": "67 / 92",
            "rankPower": 896,
            "rank": 1,
            "userImg": "https://avatars.githubusercontent.com/u/28499550?v=4",
            "commitDayCount": 67
        },
        {
            "id": "codeisneverodd",
            "name": "김경현",
            "paidFine": 0,
            "startedAt": 1639317384000,
            "unpaidFine": 31500,
            "commitsInARow": 0,
            "totalCommits": 79,
            "participationRate": "43 / 63",
            "rankPower": 294,
            "rank": 2,
            "userImg": "https://avatars.githubusercontent.com/u/54318460?v=4",
            "commitDayCount": 43
        }
    ]
}

function rank(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
            return {

            };
        case DELETE:
            return {

            };
        default:
            return state;
    }
}

export default rank;