import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'+'/billingCycles'

const INITIAL_VALUES = {
    name: '',
    nonth: null,
    year: null,
    credits: [{}],
    debts: [{}]
}

export function getList() {
    const request = axios.get(BASE_URL)
    return { 
        type: 'BILLING_CYCLES_FETCHED', 
        payload: request 
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    const id = values._id || ''
    return dispatch => {
        const request = axios[method](`${BASE_URL}/${id}`, values)
        .then(res => { 
            toastr.success('Sucesso', 'Operação realizada com sucesso!') 
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error)) 
        })
    }
}

// export function showUpdate(bc) {
//     return [
//         showTabs('tabUpdate'),
//         selectTab('tabUpdate'),
//         initialize('billingCycleForm', bc)
//     ]
// }

export function showTab(bc,tab) {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', bc)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
