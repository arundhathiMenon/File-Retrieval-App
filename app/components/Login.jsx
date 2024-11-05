// components/Login.js
import { useMsal } from "@azure/msal-react";

const Login = ({ setAccessToken, accessToken }) => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup({
            scopes: ["Files.Read.All"],
        }).then(response => {
            console.log(response.accessToken);
            setAccessToken(response.accessToken)
        }).catch(error => {
            console.error(error);
        });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;
