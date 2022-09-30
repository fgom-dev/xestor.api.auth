# xestor.api.auth

Microsserviço de autenticação para o sistema Xestor.
Esse Microsserviço se comunica com outro Microsserviço chamada de xestor.api.user.
O objetivo dele é autenticar usuários cadastrados na API xestor.api.user.

## Tecnologis utilizadas:
- NodeJS
- Typescript
- Express
- Prisma
- JWT (Json Web Token)
- BCrypt

## Funcionalidades:

- Login: Faz a autenticação do usuário e retorna o accessToken e o refreshToken
- RefreshToken: Verifica o refreshToken e gera um novo accessToken e refreshToken
- invalidadeToken: invalida um token

# Obs: No futuro terá uma documentação

Serviço rodando pela plataforma Railway: https://xestorapiauth-production.up.railway.app/
