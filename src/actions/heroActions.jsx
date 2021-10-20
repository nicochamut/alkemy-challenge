import dataURL from '../api'
import axios from "axios";

const heroActions = () => async (dispatch) => {
    const heroData = await axios.get('https://superheroapi.com/api/4685493581502593/70/powerstats');
dispatch({
    type: "FETCH_HERO",
    payload: {
        hero: heroData.data
    },
})
}

export default heroActions


 

