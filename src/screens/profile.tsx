import React from "react";
import { useDispatch } from "react-redux";
import { Logout } from "@mui/icons-material/";
import {
  Card,
  CardContent,
  ColumnMatrix,
  Header,
  NameAvatar,
} from "../components/";
import { logout } from "../redux/actions";
import { PROFILE } from "../api";
import { apiCall } from "../redux/actions";
import messages from "../messages";
import { Container } from "../components/layout";
import { push } from "connected-react-router";
import { routes } from "../utils/routes";

const Profile = () => {
    const staticData = {
        "First Name": "efwef",
        "Last Name": "",
        "Mobile Number":"",
        Email: "",

        
      };
  const reduxDispatch = useDispatch();
  const [data, setData] = React.useState<Record<any, any>>({});

  const fetchProfile = async () =>
    new Promise<any>((resolve, reject) => {
      reduxDispatch(apiCall(PROFILE, resolve, reject));
    });

  React.useEffect(() => {
    fetchProfile()
      .then((data: Record<any, any>) => {
        setData({
          
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <div style={{ marginBottom: "35px" }} className="mb35">
        <Header
          buttons={[
            {
              name: messages?.profile?.logoutBtnText,
              handler: () => reduxDispatch(push(routes.login)),
              logo: <Logout />,          
            },
          ]}
        >
          {messages?.profile?.heading}
        </Header>
      </div>

      <Card>
        <CardContent style={CardContentStyles}>
          <NameAvatar name={data?.Name} />
          <ColumnMatrix data={staticData} />
        </CardContent>
      </Card>
    </Container>
  );
};

const CardContentStyles = {
  display: "flex",
  gap: "95px",
  padding: "32px 48px",
};

export default Profile;
