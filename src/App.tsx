import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//
import { urls } from "@/data/App-urls";
import { MyNavBar } from "@U/components/MyNavBar";
import { MyFooter } from "@U/components/MyFooter";
import { store } from "@U/store";
//

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            {urls.app_routes.map((r) => {
              return (
                <Route key={r.to} path={r.to} element={<r.element />}></Route>
              );
            })}
          </Routes>
          <MyFooter></MyFooter>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
