# Aplicación de Gestión de Inventarios ![Status badge](https://img.shields.io/badge/status-in%20progress-yellow)


![Alt text](https://github.com/jhonQ09/lbr-lambdas-aws-inventory/blob/trunk/arquitectura.png?raw=true)

> ## CONTENIDO
* [Descripción](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Características](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Tecnologías Utilizadas](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Guia de Inicio Rápido](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Instalación](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Despliegue, Compilacion y Pruebas](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Autores y Agradecimientos](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Contribuciones e Historial de Versiones](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [FAQs](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)
* [Licencia](https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git)


## Descripción
✨ Este proyecto tiene como objetivo la separación y el manejo del rehuso para los servicios aws lambdas

## Características

- Interfaz CRUD Base de datos

## Tecnologías Utilizadas

### Backend

- **Plataforma**: AWS Lambda
- **Lenguaje**: Node.js (v.20)
- **Funcionalidades**:
  - Acceso a base de datos para persistencia de datos.
  - Medidas de seguridad, incluyendo:
    - Autenticación
    - Autorización
    - Sanitización de datos
    - CORS (Cross-Origin Resource Sharing)

### Frontend

- **Framework**: Angular (v.16)
- **Funcionalidades**:
  - Inicio de sesión
  - Vista de inventario
  - Ingreso/modificación de inventario
  - Manejo de seguridad

#  Guia de Inicio Rapido
## Crear una Biblioteca en Node.js con Babel

Este documento proporciona una guía paso a paso para crear una biblioteca en Node.js utilizando Babel para transpilar el código.

### Requisitos

- Node.js instalado (versión recomendada: LTS)
- npm (se instala automáticamente con Node.js)

#### 1. Configuración del Proyecto

##### 1.1 Crear un Directorio para tu Proyecto

Primero, crea y navega a un nuevo directorio para tu biblioteca:

```bash
mkdir mi-libreria
cd mi-libreria
```

##### 1.2. Publicación del Paquete
###### 1.2.2 Configurar package.json
Asegúrate de que tu package.json esté configurado correctamente. El campo main debe apuntar al archivo principal compilado en la carpeta dist. Por ejemplo:

json
```bash
"main": "dist/mi-libreria.js"
```
###### 1.2.3 Iniciar Sesión en npm
Si aún no lo has hecho, inicia sesión en npm:

```bash
npm login
```
###### 1.2.4 Publicar el Paquete
Publica tu biblioteca en npm:


```bash
npm publish
```

## 🚀 Instalación


Abra su terminal favorito y corra los siguientes comandos:

1. Clona este proyecto.
```sh
git clone https://github.com/jhonQ09/lbr-lambdas-aws-inventory.git
```

2. Ve a la carpeta del proyecto
```sh
cd /lbr-lambdas-aws-inventory
```
## 🛠 Despliegue, Compilación y Pruebas

Puede validar estos recursos con AWS composer

## ✨ Autores y Agradecimientos
* A los Ingenieros Felipe y Jhon Quevedo.

# FAQs
> Lista de Preguntas y Respuestas
+ ¿Cómo puedo restablecer mi contraseña?

Para restablecer tu contraseña, dirígete a la página de inicio de sesión y haz clic en el enlace "Olvidé mi contraseña". Sigue las instrucciones para recibir un enlace de restablecimiento de contraseña en tu correo electrónico.

+ ¿Qué hago si no puedo iniciar sesión?

Asegúrate de que estás usando las credenciales correctas. Si el problema persiste, verifica si tu cuenta está activada o contacta al soporte técnico para asistencia.

+ ¿Cómo puedo agregar un nuevo artículo al inventario?

Inicia sesión en la aplicación, navega a la sección de "Ingreso de Inventario", y completa el formulario con la información del nuevo artículo. Luego, guarda los cambios para añadir el artículo al inventario.

+ ¿Puedo editar un artículo existente en el inventario?

Sí, puedes editar un artículo existente. Ve a la vista de inventario, selecciona el artículo que deseas modificar, y elige la opción de edición. Realiza los cambios necesarios y guarda la actualización.

+ ¿Cómo se gestiona la seguridad de los datos?

La seguridad de los datos se gestiona mediante autenticación y autorización en el backend, y mediante el uso de Guards e Interceptors en el frontend. Además, los datos son sanitizados para prevenir vulnerabilidades.

+ ¿Dónde puedo reportar un problema con la aplicación?

Puedes reportar problemas o errores abriendo un issue en nuestro repositorio de GitHub o contactando al soporte técnico a través del correo soporte@empresa.com.

+ ¿Cómo se implementan las actualizaciones del sistema?

Las actualizaciones del sistema se implementan mediante despliegues tanto en el backend como en el frontend. Asegúrate de seguir las instrucciones de despliegue para cada componente y verificar que todo funciona correctamente después de aplicar las actualizaciones.

## Contribuciones e Historial de Versiones

Los Pull requests son bienvenidos. Para cambios importantes, abra una HA primero

Asegúrese de actualizar las pruebas según corresponda.


|Versión|Área|Participantes|
|-----------------|--------------|-------------------------------------------|
|1.0.0 |Full Stack| Arq. Felipe -Jhon F. Quevedo|
|Versión Inicial|04/09/2024|