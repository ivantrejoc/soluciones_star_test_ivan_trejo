# soluciones_star_test_ivan_trejo

Proyecto de tipo CRUD realizado con las siguientes tecnologías y librerías:

  Next JS 13, React, Typescript, TailwindCSS, ZOD, React-Hook-Form y Base de datos PostgreSQL manejada con Prisma como ORM.

La base de datos se encuentra deployada en Supabase.

En este proyecto podrás visualizar, el maquetado de un figma en la parte superior del proyecto y en la parte inferior una tabla con una lista de cantantes.

Esta lista contiene datos como su nombre, género musical y edad, podrás interactuar con la base de datos creando nuevos cantantes, editando o eliminando los existentes.


IMPORTANTE: Debes contar con Noode v18.17.0 o superior.
Instrucciones:

1. Clonar repositorio en tu equipo.

2. Una vez clonado el repo, abre el proyecto Visual Studio Code.

3. Ejecuta el comando npm install

     Nota: es posible que tengas que instalar por separado las siguientes dependencias:
           npm i @hookform/resolvers
           npm i @prisma/client

5. Crea un archivo .env y declara las siguientes variables de entorno para conectarte a la base de datos:

    DATABASE_URL="postgres://postgres.nxhxzkbejbgldinzkmpt:Admin17341035@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

  
  
    DIRECT_URL="postgres://postgres.nxhxzkbejbgldinzkmpt:Admin17341035@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

6. Ejecuta el comando npm run dev

7. En tu navegador, ingresa a la siguiente URL: http://localhost:3000/

8. Navega por el proyecto
     
