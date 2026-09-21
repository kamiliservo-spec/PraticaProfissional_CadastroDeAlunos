// =========================================
// BANCO DE DADOS - ESCOLA PARANÁ
// =========================================


// =========================================
// PROFESSORES
// =========================================

let professores = [

    {
        codigo: "P001",
        nome: "Ana Paula Souza",
        disciplina: "Matemática",
        formacao: "Licenciatura em Matemática",
        email: "ana.souza@escolaparana.com.br"
    },

    {
        codigo: "P002",
        nome: "Carlos Eduardo Lima",
        disciplina: "História",
        formacao: "Licenciatura em História",
        email: "carlos.lima@escolaparana.com.br"
    },

    {
        codigo: "P003",
        nome: "Mariana Oliveira",
        disciplina: "Língua Portuguesa",
        formacao: "Licenciatura em Letras",
        email: "mariana.oliveira@escolaparana.com.br"
    },

    {
        codigo: "P004",
        nome: "João Pedro Martins",
        disciplina: "Geografia",
        formacao: "Licenciatura em Geografia",
        email: "joao.martins@escolaparana.com.br"
    },

    {
        codigo: "P005",
        nome: "Juliana Ferreira",
        disciplina: "Biologia",
        formacao: "Licenciatura em Ciências Biológicas",
        email: "juliana.ferreira@escolaparana.com.br"
    },

    {
        codigo: "P006",
        nome: "Ricardo Alves",
        disciplina: "Educação Física",
        formacao: "Licenciatura em Educação Física",
        email: "ricardo.alves@escolaparana.com.br"
    },

    {
        codigo: "P007",
        nome: "Fernanda Costa",
        disciplina: "Química",
        formacao: "Licenciatura em Química",
        email: "fernanda.costa@escolaparana.com.br"
    },

    {
        codigo: "P008",
        nome: "Marcelo Rodrigues",
        disciplina: "Física",
        formacao: "Licenciatura em Física",
        email: "marcelo.alves@escolaparana.com.br"
    },

    {
        codigo: "P009",
        nome: "Patrícia Rocha",
        disciplina: "Inglês",
        formacao: "Licenciatura em Letras - Inglês",
        email: "patricia.rocha@escolaparana.com.br"
    },

    {
        codigo: "P010",
        nome: "Camila Santos",
        disciplina: "Artes",
        formacao: "Licenciatura em Artes",
        email: "camila.santos@escolaparana.com.br"
    }

];


// =========================================
// DISCIPLINAS
// =========================================
// =========================================
// BANCO DE DADOS - DISCIPLINAS
// =========================================

let disciplinas = [
    {
        codigo: "D001",
        nome: "Matemática",
        cargaHoraria: "80h",
        professorCodigo: "P001",
        professor: "Carlos Silva",
        email: "carlos.silva@escola.br",
        diaSemana: "Segunda-feira",
        horaInicio: "08:00",
        horaFim: "09:00",
        provas: []
    },
    {
        codigo: "D002",
        nome: "Português",
        cargaHoraria: "80h",
        professorCodigo: "P003",
        professor: "Ana Souza",
        email: "ana.souza@escola.br",
        diaSemana: "Terça-feira",
        horaInicio: "09:00",
        horaFim: "10:00",
        provas: []
    },
    {
        codigo: "D003",
        nome: "História",
        cargaHoraria: "60h",
        professorCodigo: "P002",
        professor: "João Mendes",
        email: "joao.mendes@escola.br",
        diaSemana: "Quarta-feira",
        horaInicio: "10:00",
        horaFim: "11:00",
        provas: []
    },
    {
        codigo: "D004",
        nome: "Geografia",
        cargaHoraria: "60h",
        professorCodigo: "P004",
        professor: "Mariana Lima",
        email: "mariana.lima@escola.br",
        diaSemana: "Quinta-feira",
        horaInicio: "11:00",
        horaFim: "12:00",
        provas: []
    },
    {
        codigo: "D005",
        nome: "Biologia",
        cargaHoraria: "60h",
        professorCodigo: "P005",
        professor: "Fernanda Costa",
        email: "fernanda.costa@escola.br",
        diaSemana: "Sexta-feira",
        horaInicio: "08:00",
        horaFim: "09:00",
        provas: []
    },
    {
        codigo: "D006",
        nome: "Física",
        cargaHoraria: "60h",
        professorCodigo: "P008",
        professor: "Roberto Alves",
        email: "roberto.alves@escola.br",
        diaSemana: "Segunda-feira",
        horaInicio: "09:00",
        horaFim: "10:00",
        provas: []
    },
    {
        codigo: "D007",
        nome: "Química",
        cargaHoraria: "60h",
        professorCodigo: "P007",
        professor: "Patricia Rocha",
        email: "patricia.rocha@escola.br",
        diaSemana: "Terça-feira",
        horaInicio: "10:00",
        horaFim: "11:00",
        provas: []
    },
    {
        codigo: "D008",
        nome: "Inglês",
        cargaHoraria: "40h",
        professorCodigo: "P009",
        professor: "Lucas Ferreira",
        email: "lucas.ferreira@escola.br",
        diaSemana: "Quarta-feira",
        horaInicio: "11:00",
        horaFim: "12:00",
        provas: []
    },
    {
        codigo: "D009",
        nome: "Educação Física",
        cargaHoraria: "40h",
        professorCodigo: "P006",
        professor: "Ricardo Santos",
        email: "ricardo.santos@escola.br",
        diaSemana: "Quinta-feira",
        horaInicio: "08:00",
        horaFim: "09:00",
        provas: []
    },
    {
        codigo: "D010",
        nome: "Artes",
        cargaHoraria: "40h",
        professorCodigo: "P010",
        professor: "Beatriz Oliveira",
        email: "beatriz.oliveira@escola.br",
        diaSemana: "Sexta-feira",
        horaInicio: "09:00",
        horaFim: "10:00",
        provas: []
    }
];
// =========================================
// ALUNOS
// =========================================

let alunos = [

    {
        codigo: "A001",
        nome: "Gabriel Santos",
        idade: 15,
        turma: "1º A",
        email: "gabriel.santos@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A002",
        nome: "Isabela Ferreira",
        idade: 16,
        turma: "1º A",
        email: "isabela.ferreira@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A003",
        nome: "Lucas Almeida",
        idade: 15,
        turma: "1º B",
        email: "lucas.almeida@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A004",
        nome: "Sofia Martins",
        idade: 16,
        turma: "2º A",
        email: "sofia.martins@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A005",
        nome: "Rafael Costa",
        idade: 17,
        turma: "3º A",
        email: "rafael.costa@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A006",
        nome: "Beatriz Oliveira",
        idade: 15,
        turma: "1º B",
        email: "beatriz.oliveira@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A007",
        nome: "Matheus Pereira",
        idade: 16,
        turma: "2º B",
        email: "matheus.pereira@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A008",
        nome: "Laura Mendes",
        idade: 17,
        turma: "3º A",
        email: "laura.mendes@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A009",
        nome: "Pedro Henrique Silva",
        idade: 15,
        turma: "1º C",
        email: "pedro.silva@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    },

    {
        codigo: "A010",
        nome: "Amanda Rocha",
        idade: 16,
        turma: "2º A",
        email: "amanda.rocha@escolaparana.com.br",
        gradeHoraria: [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D007",
            "D008",
            "D009",
            "D010"
        ]
    }

];
