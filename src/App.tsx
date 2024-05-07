import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="app-layout">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
