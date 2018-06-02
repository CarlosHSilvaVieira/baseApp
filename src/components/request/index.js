var axios = require('axios')

const uri = "http://192.168.0.10:3000"

exports.getAllPoints = async function() 
{
    var endereco = uri + "/geocentros";
    var retorno = {};

    await axios.get(endereco)
    .then((response) => {retorno = response.data})
    .catch((err) => alert(err));

    return retorno;
}

exports.login = async function(login, senha)
{
    let autenticador = {email: login, senha: senha};

    var retorno = {};

    await axios.post(uri + '/login', autenticador)
        .then((response) => {retorno = response.data})
        .catch((error) => alert(error));

    return retorno;    
}

exports.get = async function(local)
{
    var retorno = {};

    var endereco = uri + local;

    await axios.get(endereco)
    .then((response) => {retorno = response.data})
    .catch((error) => alert(error))

    return retorno;
}

exports.getByPaciente = async function(local, id)
{
    var retorno = {};

    var endereco = uri + local + global.paciente._id;

    await axios.get(endereco)
    .then((response) => {retorno = response.data})
    .catch((error) => alert(error))

    return retorno;
}

exports.post = async function(local, valor)
{
    var retorno = {};

    var endereco = uri + local;

    await axios.post(endereco, valor)
        .then((response) => {retorno = response.data})
        .catch((error) => alert(error));

    return retorno;    
}

exports.put = async function(local, id, valor)
{
    var retorno = {};
    var endereco = uri +""+ local +""+ id;

    await axios.put(endereco, valor)
        .then((response) => {retorno = response.data})
        .catch((error) => alert(error));

    return retorno; 

}

exports.delete = async function(local, id)
{
    var retorno = {};
    var endereco = uri + local + id;

    await axios.delete(endereco)
        .then((response) => {retorno = response.data})
        .catch((error) => alert(error));

    return retorno; 

}
