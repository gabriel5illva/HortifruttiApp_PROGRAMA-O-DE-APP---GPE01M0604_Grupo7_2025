Alunos:
ANA CAROLINA GONTIJO VILELA DIAS, 
CAROLINE VITÓRIA AIRES FERREIRA, 
GABRIEL OLIVEIRA DA SILVA, 
MATHEUS HENRICO PINHEIRO LEMES, 
PEDRO VITOR OLIVEIRA MATOS, 
RENAN GAMA OLIVEIRA DA SILVA, 
SABRINA SOUZA SILVA

Depois de clonar o projeto, executar o comando:
- npm install na raiz do projeto 

Para rodar o projeto:
- npm install -g expo-cli
- npx expo start

VIDEO DO APP RODANDO: https://youtu.be/SBEPZIrfBSc

Notas:

- os admins são cadastrados diretamente no supabase, o usuário para entrar no fluxo do admin pela tela de login é "123456789" e a senha é "senha123".

- ORDEM DOS FLUXOS:
1. Admin
2. Cliente
3. Loja

- os icones são do pacote @expo/vector-icons, adicionado automaticamente quando damos create-expo-app. Para conferir os icones disponíveis e seus nomes, basta acessar o site icons.expo.fyi

- o menu que fica embaixo da tela e dá acesso a várias páginas diferentes (home, notificações, perfil etc) deve ser feito na pasta navigation e no respectivo arquivo do fluxo (ex: se você está fazendo o fluxo do cliente, o menu deve ser feito no ClienteNavigator.tsx).

- a cor verde usada é a #2ecc71.
