import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Right,
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
  } from 'native-base';

import styles from '../style/styles';

import * as request from '../components/request';

export default class ConsultasView extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const aux = state.params ? state.params.consulta : null;
        this.state = { consulta: aux, medico: { especialidades: [] } };
    }

    componentWillMount() {
        this.getMedico();
    }
    
    getMedico() {
        const uri = '/medico/';
        const valor = request.get(uri.concat(this.state.consulta.medico));
        valor.then((resposta) => { this.setState({ medico: resposta }); });
    }

    updateConsulta = (dados) => {
        this.setState({ consulta: dados });
    }

    render() {
        return (
            <Container>
                 <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('ConsultasEdit', 
                            { consulta: this.state.consulta, updateConsulta: this.updateConsulta })}
                        >
                            <Text>Editar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Local</Label>
                            <Input disabled><Text>{this.state.consulta.local}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data</Label>
                            <Input disabled>
                                <Text>
                                    {new Date(this.state.consulta.data).toLocaleDateString()}
                                </Text>
                            </Input>   
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Medico</Label>
                            <Input disabled><Text>{this.state.medico.nome}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>CRM</Label>
                            <Input disabled><Text>{this.state.medico.crm}</Text></Input> 
                        </Item>   
                        <Item inlineLabel style={styles.item}>
                            <Label>Especialidades</Label>
                            <List 
                                dataArray={this.state.medico.especialidades} 
                                renderRow={(especialidade) =>
                                    <ListItem>
                                        <Text>{especialidade}</Text>
                                    </ListItem>    
                                }
                            />
                        </Item> 
                        <Item 
                            inlineLabel 
                            style={styles.item} 
                            onPress={() => this.props.navigation.navigate('ViewDoencasConsulta', 
                            { doencas: this.state.consulta.doencas })} 
                        >
                            <Label>Doença</Label>
                            <Input 
                                disabled 
                                value={this.state.consulta.doencas.length + ' doenças'} 
                            />   
                        </Item>
                        <Item 
                            inlineLabel 
                            style={styles.item} 
                            onPress={() => this.props.navigation.navigate('ViewRemediosConsulta', 
                            { remedios: this.state.consulta.remedios })}
                        >
                            <Label>Remedios</Label>
                            <Input 
                                disabled 
                                value={this.state.consulta.remedios.length + ' remedios'} 
                            />    
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Detalhes</Label>
                            <Input disabled value={this.state.consulta.detalhes} />
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}
