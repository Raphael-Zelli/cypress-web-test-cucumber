#language: pt
@login

Funcionalidade: Login na aplicação
Como integrante do time de RH
Desejo acessar a aplicação
Para administrar informações dos funcionários

Contexto:
    Dado que estou na tela de login

Cenário: Username e Password vazios
    Quando não preencho os campos de Username e Password e clico no botão Login
    Então vejo a mensagem "Required" nos campos que não estão preenchidos

Cenário: Username vazio
    Quando preencho o campo Password com a senha válida "admin123"
    E clico no botão Login
    Então vejo a mensagem "Required" no campo que não está preenchido

Cenário: Username incorreto
    Quando preencho o campo Username com usuário não cadastrado "User_login"
    E preencho o campo Password com a senha válida "admin123"
    E clico no botão Login
    Então vejo a mensagem de credenciais inválidas "Invalid credentials"

