import { PrismaClient } from '@prisma/client';

// inicializa o client
const prisma = new PrismaClient({
    // mostra no console as queries feitas
    log: ['query', 'info', 'warn', 'error'],
});


export const insereUsuario = async ({name, email, password, cpf}) => {
    const usuario = await prisma.usuario.create({
        data: {
            name,
            email,
            password,
            cpf
        }
    });
    console.log(usuario);
    return usuario;
};

export const buscaUsuarios = async () => {
    const usuarios = await prisma.usuario.findMany();
    console.log(usuarios);
    return usuarios;
}

const insereProduto = async (produto) => {
    const prod = await prisma.produto.create({
        data: produto
    });
    console.log(prod);
}

/*
const detalharUsuarioComPedidos  = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id},
        include: {
            Pedido: {
                include: {
                    produtos: true
                }
            }
        },
        omit: {
            password: true,
            createdAt: true,
            updatedAt: true 
        }
    });
    console.log(JSON.stringify(usuario, null, 2));
}
*/

const criarPedido = async (idUsuario, idProdutos) => {
    const pedido = await prisma.pedido.create({
        data: {
            usuarioId: idUsuario,
            produtos: {
                connect: idProdutos.map(id => ({id}))
            },
            total: 0,   // carregar produtos para somar os preços,
            status: "PAGAMENTO_PENDENTE"
        },
        // RELACAO - trazer os produtos relacionados
        include: {
            produtos: true
        }
    });
    console.log(pedido);
}

// REMOVI A FUNCAO MAIN
// COMENTEI A FUNCAO DETALHARUSUARIOCOMPEDIDO