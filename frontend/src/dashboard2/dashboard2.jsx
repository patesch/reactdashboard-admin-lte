import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from '../common/layout/row'
import ValueBox from '../common/widgets/valueBox'

import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

// Controle de estado sem Redux
export default class Dashboard2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { credit:0, debt: 0 }
        this.getSummary()
    }

    getSummary() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(res => this.setState( res.data ))
    }

    render() {
        const { credit, debt } = this.state
        const total = credit - debt
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${total}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}
