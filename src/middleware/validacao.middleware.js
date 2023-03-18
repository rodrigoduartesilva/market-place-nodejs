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

    if (!req.body.concluido) {
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

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho
}