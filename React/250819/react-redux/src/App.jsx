import { useContext, useState, createContext } from "react";
const UserContext = createContext();

const initUserData = {
  name: "John Doe",
  email: "example@email.com",
  cart: {
    items: [],
    totalPrice: 0,
  },
};

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initUserData);

  const updateCartTotal = (newTotal) => {
    setUserData((prev) => {
      return {
        ...prev,
        cart: {
          ...prev.cart,
          totalPrice: newTotal,
        },
      };
    });
  };
  return (
    <UserContext value={{ userData, updateCartTotal }}>{children}</UserContext>
  );
};

const CartTotal = () => {
  console.log("CartTotal 랜더링");

  const { userData } = useContext(UserContext);

  return <div>총액: {userData.cart.totalPrice} 원</div>;
};

const UserName = () => {
  console.log("userName 랜더링");

  const { userData } = useContext(UserContext);
  return <div>사용자 이름: {userData.name}</div>;
};

function App() {
  return (
    <UserProvider>
      <CartTotal />
      <UserName />
    </UserProvider>
  );
}

export default App;
