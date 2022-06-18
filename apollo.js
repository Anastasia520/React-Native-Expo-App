// import { HttpLink } from 'apollo-link-http';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from "apollo-cache-inmemory";

// const makeApolloClient = (token) => {

//   // создание ссылки на сервер
//   const link = new HttpLink({
//     uri: `http://192.168.0.5:3000/graphql`,
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });

//   // создание кэша
//   const cache = new InMemoryCache()

//   // создание apollo клиента, через который будут отправляться запросы
//   const client = new ApolloClient({
//     link,
//     cache
//   });

//   return client;
// }

// export default makeApolloClient;