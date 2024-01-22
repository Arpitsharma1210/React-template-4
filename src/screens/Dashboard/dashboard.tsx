import React from "react";
import { Table, Card, CardContent } from "../../components";
import { Container } from "../../components/layout";

const Dashboard = () => {
  return (
    <Container>
      <div className="mb35" style={{ marginBottom: "35px" }}>
        <Card>
          <CardContent>
            <></>
          </CardContent>
        </Card>
      </div>
      <Table tableName="" data={[]} columnData={[]} />
    </Container>
  );
};

export default Dashboard;
