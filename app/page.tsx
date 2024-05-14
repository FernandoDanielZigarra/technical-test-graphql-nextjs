import { gql } from "@apollo/client";
import createApolloClient from "../lib/client";
import BasicTable from "./components/Table/SimpleTable";
import Container from "@mui/material/Container";

async function loadData() {
  try {
    const { data } = await createApolloClient().query({
      query: gql`
        query ContainersStatus {
          allContainers {
            containersStatus {
              name
            }
            containersRegistrationForm {
              containersFamily {
                name
              }
              containersModel {
                name
              }
              containersGeneration {
                name
              }
              containersCapacity {
                name
              }
              containersRevisionType {
                name
              }
              formStatus {
                name
              }
            }
          }
        }
      `,
      context: {
        headers: {
          Authorization: process.env.TOKEN,
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function HomePage() {
  const data = await loadData();
  return (
    <main>
      <Container maxWidth="md">
        <BasicTable data={data.allContainers} />
      </Container>
    </main>
  );
}
