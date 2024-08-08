// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import TapQism from "./tapQism/TapQism";
// import MineQism  from "./mineQism/mineQism";
// import  FriendQism  from "./friendQism/friendQism";
// import  EarnQism  from "./earnQism/earnQism";
// import GiftQism  from "./giftQism/giftQism";
// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<TapQism />} />
//         <Route path="/mineCart" element={<MineQism />} />
//         <Route path="/addFriend" element={<FriendQism />} />
//         <Route path="/earnPart" element={<EarnQism />} />
//         <Route path="/giftPart" element={<GiftQism />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TapQism from "./tapQism/TapQism";
import Home from "./home/Home";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<TapQism />} />
      </Routes>
  );
}

export default App;

