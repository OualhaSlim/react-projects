import { combineReducers } from 'redux';

// in our case the list of songs is static but normally we would pass the actual list of song as arg then add/delete
// song from the actual list depending on the type of action received
const songsReducer = () =>{
    return[
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'All Star', duration: '2:05'},
        {title: 'Macarena', duration: '2:45'},
        {title: 'I want it that way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});