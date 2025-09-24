import express from 'express';
import session from 'express-session';

const app = express();
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

app.use((req, res, next) => {
    req.session.routes = req.session.routes || [];
    req.session.routes.push(req.url);
    next();
})

// funcao que é um middleware e acoplar nas rotas necessarias
const isAuth = (req, res, next) => {
    if (!req.session.auth) {
        return res.status(401).send("NAO AUTENTICADO");
    }
    next();
}

const isAdmin = (req, res, next) => {
    console.log(req.session.user)
    
    if (! (req.session.user.role == 'ADMIN')) {
        return res.status(403).send("NAO É ADMIN");
    }
    next();
}

app.get('/login', (req, res) => {
    req.session.auth = true;
    if (req.query.user == 'admin') {
        req.session.user = {
            role: "ADMIN"
        }
    } else {
        req.session.user = {
            role: "CLIENT"
        }   
    }
    res.send("LOGIN FEITO");
})

app.get('/rota-protegida', isAuth, (req, res) =>  {
    return res.send("ACESSOU A ROTA!")
});

app.get('/perfil', isAuth, isAdmin, (req, res) => {
    return res.send("ADMIN LOGADO! ACESSO CONCEDIDO");
}) 

app.use((req, res) => {
    // console.log("");
    return res.json({
        rota: req.url,
        queryparams: req.query,
        method: req.method,
        ip: req.ip,
        session: {
            ...req.session,
            sessionId: req.sessionID
        }
    })
});


app.listen(3000);