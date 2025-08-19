import { Children, createContext } from "react";
const UserContext = React.createContext();

const initUserData = {
  name: "John Doe",
  email: "example@email.com",
  cart: {
    items: [],
    totalPrice: 0,
  },
};

const userProvider = ({ Children }) => {
  const [userData, setUserData] = React.useState(initUserData);
  return <UserContext>{children}</UserContext>;
};

function App() {
  return <>Hello Vite-React!</>;
}

export default App;
