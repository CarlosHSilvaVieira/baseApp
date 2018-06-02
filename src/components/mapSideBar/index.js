import React, { Component } from 'react';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from 'native-base';

import styles from './styles';

import * as request from '../request';

const datas = [
    {
      name: '',
      route: 'Home',
      icon: 'phone-portrait',
      bg: '#C5F442'
    },
    {
      name: 'Remedios',
      route: 'RemediosIndex',
      icon: 'phone-portrait',
      bg: '#477EEA'
    },
    {
      name: 'Consultas',
      route: 'ConsultasIndex',
      icon: 'phone-portrait',
      bg: '#477EEA'
    },
    {
      name: 'Monitoramento',
      route: 'Monitoramento',
      icon: 'phone-portrai',
      bg: '#477EEA'
    },
    {
      name: 'Perfil',
      route: 'Perfil',
      icon: 'phone-portrait',
      bg: '#477EEA'
    },
  ];
  

export default class mapSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { dados: [] };
    }

    getAllPoints() {
        const valor = request.getAllPoints();
        valor.then((resposta) => { this.setState({ dados: resposta }); });
    }

    reender() {
        return (
            <Container>
            <Content
              bounces
              style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
            >

              <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem
                    button
                    noBorder
                    onPress={() => this.props.navigation.navigate(data.route)}
                  >
                    <Left>
                      <Icon
                        active
                        name={data.icon}
                        style={{ color: '#777', fontSize: 26, width: 30 }}
                      />
                      <Text style={styles.text}>
                        {data.name}
                      </Text>
                    </Left>
                    {data.types &&
                      <Right style={{ flex: 1 }}>
                        <Badge
                          style={{
                            borderRadius: 3,
                            height: 25,
                            width: 72,
                            backgroundColor: data.bg
                          }}
                        >
                          <Text
                            style={styles.badgeText}
                          >
                            {`${data.types} Types`}
                          </Text>
                        </Badge>
                      </Right>}
                  </ListItem>}
              />
            </Content>
          </Container>
        );
    }
}
