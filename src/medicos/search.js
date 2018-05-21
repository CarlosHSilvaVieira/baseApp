import React, {Component} from 'react';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    CheckBox,
    Thumbnail,
    Footer
  } from "native-base";

import axios from 'axios';

import styles from '../style/styles';

export default class MedicosSearch extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {crm: '', medicos: []};
    }

    pesquisar()
    {
        let uri = global.uri + "/medicos/" + this.state.crm;
        axios.get(uri)
        .then((resposta) => {this.setState({medicos: resposta.data})})
        .catch((erro) => alert(erro))
    }

    selecionarMedico(dados)
    {
        if(this.props.navigation.state.params)
        {
            this.props.navigation.goBack();
            this.props.navigation.state.params.getMedicoSelecionado(dados);
        }
    }

    render()
    {
        return(
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Icon name="arrow-back" />
                        </Button>
                        <Icon name="ios-search"/>
                        <Input placeholder="Digite o CRM" onChangeText={(text) => {this.setState({crm: text})}}/>
                        <Button onPress={() => this.pesquisar()}>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <List
                    dataArray={this.state.medicos} 
                         renderRow={(medico) => 
                        <ListItem avatar selected button onPress={() => this.selecionarMedico(medico)}>
                            <Left>
                                <Thumbnail source={{ uri: '../../assets/user.jpg' }} />
                            </Left>
                            <Body>
                                <Text>{medico.nome}</Text>
                                <Text note>{medico.crm}</Text>
                            </Body>
                            <Right />
                        </ListItem>    
                    }
                    />   
                </Content>    
            </Container>    
        );
    }
}