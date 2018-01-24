import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from '../common/layout/row'
import ValueBox from '../common/widgets/valueBox'

import { getSummary } from './dashboardActions'

// Controle de estado COM Redux
class Dashboard extends React.Component {
    componentWillMount() {
        this.props.getSummary()
    }
    
    render() {
        const { credit, debt } = this.props.summary
        const total = credit - debt
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
