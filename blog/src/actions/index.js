import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    // return a unique values of userIds
    const uniqIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) =>{
    const response = await jsonplaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) =>{
//     const response = await jsonplaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });