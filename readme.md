Depois de clonar o projeto, executar o comando:

npm install na raiz do projeto Para rodar o projeto:
npm install -g expo-cli
npx expo start
Notas:

os icones são do pacote @expo/vector-icons, adicionado automaticamente quando damos create-expo-app. Para conferir os icones disponíveis e seus nomes, basta acessar o site icons.expo.fyi

o menu que fica embaixo da tela e dá acesso a várias páginas diferentes (home, notificações, perfil etc) deve ser feito na pasta navigation e no respectivo arquivo do fluxo (ex: se você está fazendo o fluxo do cliente, o menu deve ser feito no ClienteNavigator.tsx).