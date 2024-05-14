import { url } from "@/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;