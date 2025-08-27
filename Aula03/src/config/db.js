
const db = [
    {
        id: 1,
        name: "Vinicius Fritzen Machado",
        username: "@vfmachado",
        role: "ADMIN",  // tipo
        status: "ACTIVE",
        email: "vinicius.machado@riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    },
    {
        id: 2,
        name: "Theodoro Araujo Fritzen",
        username: "@theo",
        role: "ADMIN",  // tipo
        status: "DELETED",
        email: "vinicius.machado@riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    },
    {
        id: 3,
        name: "David Maiato",
        username: "@david",
        role: "STUDENT",  // tipo
        status: "INACTIVE",
        email: "david.maioto@aluno.riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    }
]

export function select(filter) {
    return [...db];
}
