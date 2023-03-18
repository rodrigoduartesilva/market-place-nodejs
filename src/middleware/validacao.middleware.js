const ObjectId = require('mongoose').Types.ObjectId;

const validaUsuario = (req, res, next) => {
    //teste de um erro por vez, realizando tb uma resolução por vez.
    if (!req.body.nome) {
        return res.status(400).send({ messsage: `O campo 'nome' precisa ser preenchido.` });
    }

    if (!req.body.email) {
        return res.status(400).send({ messsage: `O campo 'email' precisa ser preenchido.` });
    }

    if (!req.body.senha) {
        return res.status(400).send({ messsage: `O campo 'senha' precisa ser preenchido.` });
    }

    if (!req.body.imagem) {
        return res.status(400).send({ messsage: `O campo 'imagem' precisa ser preenchido.` });
    }

    if (!req.body.admin) {
        return res.status(400).send({ messsage: `O campo 'admin' precisa ser preenchido.` });
    }

    return next();
}

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if (!value.rua) {
            erros.push(`'${key + 1} - rua'`);
        }

        if (!value.numero) {
            erros.push(`'${key + 1} - numero'`);
        }

        if (!value.CEP) {
            erros.push(`'${key + 1} - CEP'`);
        }
    });

    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

const validaProduto = (req, res, next) => {
    let erros = []; //array para acumular os erros.

    if (!req.body.nome) {
        erros.push('nome');
    }

    if (!req.body.descricao) {
        erros.push('descricao');
    }

    if (!req.body.precoUnitario) {
        erros.push('precoUnitario');
    }

    if (!req.body.imagem) {
        erros.push('imagem');
    }

    if (!req.body.codigoBarra) {
        erros.push('codigoBarra');
    }

    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ messsage: `O campo 'nome' precisa ser preenchido.` });
    }
}

const validaPedido = (req, res, next) => {
    let erros = []; //array para acumular os erros.

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }

    if (!req.body.frete) {
        erros.push('frete');
    }

    if (req.body.concluido == undefined) {
        erros.push('concluido');
    }


    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = []; //array para acumular os erros.

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }

    if (!req.body.frete) {
        erros.push('frete');
    }

    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

const validaIdParams = (req, res, next) => {
    if (ObjectId.isValid(req.params.id)) {
        return next();
    } else {
        return res.status(400).send({ messsage: `O ID não corresponde aos padrões necessários.` });
    }
}

const valida_IdBody = (req, res, next) => {
    if (ObjectId.isValid(req.body._id)) {
        return next();
    } else {
        return res.status(400).send({ messsage: `O ID não corresponde aos padrões necessários.` });
    }
}

const validaLogin = (req, res, next) => {
    let erros = []; //array para acumular os erros.

    if (!req.body.email) {
        erros.push('email');
    }

    if (!req.body.senha) {
        erros.push('senha');
    }

    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

const validaProdutosCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.produtos.map((value, key) => {
        if (!value._id) {
            erros.push(`'${key + 1} - _id'`);
        }

        if (!ObjectId.isValid(value._id)) {
            erros.push(`'${key + 1} - _id - tipo inválido'`);
        }

        if (!value.quantidade) {
            erros.push(`'${key + 1} - quantidade'`);
        }
    });

    //teste de quantos erros ocorreram e as devidas ações a serem realizadas.
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ messsage: `Os campos ${erros} precisam ser preenchidos.` });
        } else {
            return res.status(400).send({ messsage: `O campo ${erros} precisa ser preenchido.` });
        }
    }
}

module.exports = {
    validaUsuario,
    validaEndereco,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaIdParams,
    valida_IdBody,
    validaLogin,
    validaProdutosCarrinhoPedido
}