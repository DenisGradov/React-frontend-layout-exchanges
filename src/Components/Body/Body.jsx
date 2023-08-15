/* eslint react/prop-types: 0 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/main";
import P2P from "./P2P/P2P";
import Partners from "./Partners/Partners";
import Mining from "./Mining/Mining";
import Academy from "./Academy/Academy";
import MainLayout from "./MainLayout";

function Body({ coinList, setCoinList }) {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<Main coinList={coinList} setCoinList={setCoinList} />}
            ></Route>
            <Route path="p2p" element={<P2P />}></Route>
            <Route path="partners" element={<Partners />}></Route>
            <Route path="mining" element={<Mining />}></Route>
            <Route path="academy" element={<Academy />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Body;
