///<reference types= "cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginSelector from '../helper/loginSelector/'
import actions from '../helper/actionsCommun'


Given('que estou na tela de login', () => {
    actions.visit()
})

//Cenário Username e Password vazios
When('não preencho os campos de Username e Password e clico no botão Login', () => {
    actions.click(loginSelector.btnLogin)
})

Then('vejo a mensagem {string} nos campos que não estão preenchidos', (mensagem) => {
    actions.validateMenssage(loginSelector.msgRequiredUsername,mensagem)
    actions.validateMenssage(loginSelector.msgRequiredPassword,mensagem)
})

//Cenário Username vazio
When('preencho o campo Password com a senha válida {string}', (password) => {
    actions.type(loginSelector.fillPassword,password)
})

When('clico no botão Login', () => {
    actions.click(loginSelector.btnLogin)
})

Then('vejo a mensagem {string} no campo que não está preenchido', (mensagem) => {
    actions.validateMenssage(loginSelector.msgRequiredUsername,mensagem)
})

//Cenário Username incorreto
When('preencho o campo Username com usuário não cadastrado {string}', (username) => {
    actions.type(loginSelector.fillUsername,username)
})

Then('vejo a mensagem de credenciais inválidas {string}', (mensagem) => {
    actions.validateMenssage(loginSelector.msgInvalidCredentials,mensagem)
})