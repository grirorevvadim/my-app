import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "food",
      price: 100,
      date: new Date(2022, 2, 2),
    },
    {
      id: "e2",
      title: "car repair",
      price: 500,
      date: new Date(2022, 1, 5),
    },
    {
      id: "e3",
      title: "travelling",
      price: 1000,
      date: new Date(2022, 0, 31),
    },
  ];
  return <Expenses expenses={expenses}></Expenses>;
}

export default App;
