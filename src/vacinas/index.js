import React, { Component } from 'react';

import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Tab,
    Tabs,
  } from 'native-base';

import styles from './styles';

import ListVacinas from './list';  
import VacinasReinforce from './reinforce';

export default class VacinasIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { pagina: 0 };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Vacinas</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs initialPage={this.state.pagina}>
                     <Tab heading="Minha lista">
                        <ListVacinas navigation={this.props.navigation} />
                    </Tab> 
                    <Tab heading="Reforçar">
                        <VacinasReinforce navigation={this.props.navigation} />
                    </Tab>
                </Tabs> 
            </Container>    
        );
    }
}
