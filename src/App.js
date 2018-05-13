import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./sidebar";
import Home from './home/home';

import Login from './login';

//Doenças Routes
import DoencasIndex from './doencas';
import DoencasCreate from './doencas/create';
import DoencaView from './doencas/view';
import DoencaEdit from './doencas/edit';

//Vacinas Routes
import VacinasIndex from './vacinas';
import ViewVacinas from './vacinas/view';
import VacinasCreate from './vacinas/create';
import VacinasEdit from './vacinas/edit'

//Remedios Routes 
import RemediosIndex from './remedios';
import RemediosCreate from './remedios/create';
import RemediosView from './remedios/view';
import RemediosEdit from './remedios/edit'

//Consultas Routes
import ConsultasIndex from './consultas';
import ConsultasView from './consultas/view';
import ConsultasCreate from './consultas/create';
import ConsultasEdit from './consultas/edit';
import AddDoencasConsulta from './consultas/addDoencas';
import AddRemediosConsulta from './consultas/addRemedios';
import ViewDoencasConsulta from './consultas/viewDoenças';
import ViewRemediosConsulta from './consultas/viewRemedios';

//Week
import Week from './remedios/week';

//Hours
import Hours from './remedios/hours';
import addHour from './remedios/addHour';

// rotas gerais
const Drawer = DrawerNavigator(
{
    Home: {screen: Home},
    DoencasIndex: {screen: DoencasIndex},
    VacinasIndex: {screen:VacinasIndex},
    RemediosIndex: {screen: RemediosIndex},
    ConsultasIndex: {screen: ConsultasIndex},
    Login: {screen: Login}
},
{
    initialRouteName: "VacinasIndex",
    contentComponent: props => <SideBar {...props} />
});

global.paciente = {_id: "5ae1e6c71162282378693abc"};
global.uri = "http://192.168.0.10:3000";

//rotas especiificas
const AppNavigator = StackNavigator(
{
    Drawer: {screen: Drawer}, 
    DoencasCreate: {screen: DoencasCreate},
    DoencaView: {screen: DoencaView},
    DoencaEdit: {screen: DoencaEdit},

    VacinasView: {screen: ViewVacinas},
    VacinasCreate: {screen: VacinasCreate},
    VacinasEdit: {screen: VacinasEdit},

    Week: {screen: Week},

    RemediosCreate: {screen: RemediosCreate},
    RemediosView: {screen: RemediosView},
    RemediosEdit: {screen: RemediosEdit},

    ConsultasView: {screen: ConsultasView},
    ConsultasCreate: {screen: ConsultasCreate},
    ConsultasEdit: {screen: ConsultasEdit},
    AddDoencasConsulta: {screen: AddDoencasConsulta},
    AddRemediosConsulta: {screen: AddRemediosConsulta},
    ViewDoencasConsulta: {screen: ViewDoencasConsulta},
    ViewRemediosConsulta: {screen: ViewRemediosConsulta},

    Hours: {screen: Hours},
    addHour: {screen: addHour}

},
{
    initialRouteName: "Drawer",
    headerMode: "none"
});

export default () =>
  <Root>
    <AppNavigator />
  </Root>;