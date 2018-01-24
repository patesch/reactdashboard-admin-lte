import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getSummary = () => {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return { type: 'DASHBOARD_SUMMARY', payload: request }

    // return dispatch => {
    //     console.log('entrei')
    //     return axios.get(`${BASE_URL}/billingCycles/summary`).then(res => { 
    //         console.log('res',res)            
    //         dispatch({ type: 'DASHBOARD_SUMMARY', payload: res.data }) 
    //     })
    // }
}