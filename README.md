# Login-System
## //ENGLISH
### Project description
This is a login system using json webtokens, node.js, express, cors and many other modules and libraries.

This project consists of an user login and registration system, which generates data (id, username, password, registration date, most recent login date) that is stored in an SQL database.
In order to register, it's necessary to fulfill the required "length" and also the passwords in the verification must match.
To log in, the existing or previously registered account must be entered, which is validated by comparing the existing information in the database with the data entered in the application.
There's also a section in which you can see a "secret" or reserved only for users who have logged in route, which allows them to access all the content they are suposed to watch.

A middleware is used to separate the part of the code that establishes the functions for the users (validate the registrations and validate if they are already logged in), this to obtain the token that is generated when logging in and is later used to access the content available only for logged-in users.

TO ACCESS EACH ROUTE IT IS NECESSARY TO USE THE "Postman" PROGRAM AND ENTER THE REGISTRATION AND LOGIN JSONS IN THE BODY IF NECESSARY (POST METHODS).

### What is UUID?
The UUID (Universally Unique Identifier) library is a tool used in software development to generate globally unique identifiers.
An UUID is a 128-bit number represented in hexadecimal form, which means that due to its large number of possible combinations (3.4 x 10^38) it's not necessary to have a process to validate if the given number has already been repeated before.

### Advantages of using UUID and not an autonumber id
There are several reasons why using UUIDs might be a good option instead of using autonumber IDs.
It is a good idea to use UUID because it's a fact that it's difficult to maintain the integrity of the data, and therefore not create confusion among users within an application that uses more services; so, given this reality, it's very feasible to use UUID's for its global uniqueness, independence of data origin, privacy and security, its easy generation and its flexibility and interoperability.
All this guarantees that one user is not confused with another. It's like the Unique Population Registry Code in Mexico (CURP), only with the difference that this (UUID) is given an expiration time, and is regenerated to further increase security.

While auto-number IDs may also be suitable in many cases, the use of UUIDs offers additional advantages in terms of global uniqueness, data source independence, and flexibility, making them a solid choice for ensuring scalable and unique identifiers in a variety of sofware development scenarios.

### Salt Rounds parameter in the bcryptjs library
The "Salt Rounds" parameter in the bcryptjs library refers to the number of iterations or "salt" rounds that are applied to the bcrypt hash algorithm during the password encryption process.
In other words, it's a library that adds random characters to the password and encrypts that new string. "salt" Is the extra random that is added to it.
Salt Rounds is the number of times this process is performed, in order to make the password more secure. In other words, it defines the number of times that random extra characters will be added to the same password.

In order to make sure the project works, you must adjust the values ​​of each environment variable (.env files) according to your system.

## //ESPAÑOL
### Descripción del proyecto
Este es un sistema de loggeo usando json webtokens, node.js, express, cors y otros módulos y librerías.

Este proyecto consiste en un sistema de inicio de sesión y registro de usuarios, los cuales generan datos (id, nombre de usuario, contraseña, fecha de registro, fecha de inicio de sesión más reciente) que son almacenados en una base de datos SQL.
Para poder registrarse, es necesario cumplir con el "length" requerido y que las contraseñas en la verificación coincidan.
Para iniciar sesión, se debe ingresar la cuenta ya existente o previamente registrada, lo cual se valida al comparar la información existente en la base de datos con la ingresada en la solicitud.
También hay un apartado en el que se puede ver una ruta "secreta" o reservada únicamente a los usuarios que han iniciado sesión, lo cual les permite acceder al todo el contenido.

Se usa un middleware para separar la parte del código que establece las funciones para los usuarios (validar los registros y validar si ya se está loggeado), esto para obtener el token que se genera al iniciar sesión y después es utilizado para poder acceder al contenido disponible sólo para usuarios loggeados.

PARA ACCEDER A CADA RUTA ES NECESARIO USAR EL PROGRAMA "Postman" E INGRESAR EN EL BODY LOS JSONS DE REGISTRO E INICIO DE SESIÓN DE SER NECESARIO (MÉTODOS POST).

### ¿Qué es UUID?
La librería UUID (Universally Unique Identifier) es una herramienta utilizada en el desarrollo de software para generar identificadores únicos y globales.
Un UUID es un número de 128 bits representado hexadecimalmente, lo cual hace que por su gran cantidad de combinaciones posibles (3.4 x 10^38) no sea necesario tener un proceso para validar si el numero dado ya se ha repetido antes.

### Ventajas de usar UUID y no un id autonumérico
Hay varias razones por las cuales el uso de UUIDs puede ser una buena opción en lugar de utilizar IDs autonuméricos.
Es buena idea usar UUID porque es un hecho que es difícil mantener la integridad de los datos, y por lo tanto no crear confusión entre usuarios dentro de una aplicacion que utiliza más servicios; así que dada esta realidad, es muy factible usar UUID's por su unicidad global, independencia del origen de datos, privacidad y seguridad, su fácil generación y su flexibilidad e interoperabilidad.
Todo ello garantiza que no se confunda a un usuario con otro. Es como la Clave Única de Registro de Población en México (CURP), sólo con la diferencia de que esta (UUID) se le da un tiempo de expiración, y se vuelve a generar para aumentar aún más la seguridad.

Si bien los IDs autonuméricos también pueden ser adecuados en muchos casos, el uso de UUIDs ofrece ventajas adicionales en términos de unicidad global, independencia del origen de datos y flexibilidad, lo que los convierte en una elección sólida para garantizar identificadores únicos y escalables en una variedad de escenarios de desarrollo de software.

### Parámetro Salt Rounds en la librería bcryptjs
El parámetro "Salt Rounds" en la librería bcryptjs se refiere a la cantidad de iteraciones o rondas de "sal" que se aplican al algoritmo de hash bcrypt durante el proceso de encriptación de contraseñas.
En otras palabras, es una librería que agrega caracteres random a la contraseña y se cifra ese nuevo string. "sal" Es el extra random que se le agrega.
Salt Rounds es la cantidad de veces que se realiza este proceso, con el fin de hacer más segura la contraseña. O sea que define la cantidad de veces que se le agregarán caracteres extras random a la misma contraseña.

Para que el proyecto funcione, debes ajustar los valores de cada variable de entorno (archivos .env) de acuerdo a tú sistema.