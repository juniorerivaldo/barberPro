##BACK-END

instalação de modulos com yarn - yarn add -
    typescript -D
    @types/express -D
    express
    ts-node-dev -D
    express-async-errors
    cors
    @types/cors -D
    prisma
    @prisma/client
    bcryptjs
    @types/bcryptjs -D
    jsonwebtoken
    @types/jsonwebtoken -D


inicialização do typescript
    yarn tsc --init

inicializaçao do prisma
    após instalar ele 
    npx prisma init

criando migration inicial
    yarn prisma migrate dev

declarando types novos no tsconfig
     "typeRoots": ["./src/@types"]


OBS: podemos user o haircuts como pacientes


##FRONT-END

instalação de modulos com yarn - yarn add -
    axios
    nookies
    jwt-decode