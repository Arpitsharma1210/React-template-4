import React from "react";
import {
  Table,
  Header,
  Card,
  CardContent,
} from "../../components";
import messages from "../../messages";
import { Container } from "../../components/layout";

const Dashboard = () => {

  return (
    <>
      <Container>
        <div style={{ marginTop: "-35px" }} className="margin_adjust">
          <Header />

        </div>

        <div className="mb35" style={{ marginBottom: "35px" }}>
          <Card>
            <CardContent>
              <></>
            </CardContent>
          </Card>
        </div>
      </Container>

    </>
  );
};

export default Dashboard;
