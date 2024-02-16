import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Direct from './component/Direct';
import Home from './component/Home';
import Login from './component/Login';
import Recharge from './component/Recharge';
import Sports from './component/Sports';
import NoPage from './component/404';
import Protected from "./component/Protection/Protected";
import Logout from "./component/Protection/Logout";
import Account from "./component/Account";
import { CommonContext } from "./component/CommonContext";
import { useEffect, useState } from "react";
import SportsControl from "./component/SportsControl";
import SeriesControl from "./component/SeriesControl";
import MatchControl from "./component/MatchControl";
import MarketControl from "./component/MarketControl";
import BookMakerControl from "./component/BookMakerControl";
import BetList from "./component/BetList";
import MatchDeclare from "./component/MatchDeclare";
import Event from "./component/Event";
import Mcontrol from "./component/MtachControl";
import Banner from "./component/BannerScreen";
import WalletPage from "./component/Wallet";
import WithdrawRequestPage from "./component/WithdrawlRequestPage";
import SendMoneyRequestPage from "./component/SendMoneyRequestPage";
export default function App() {
  const [balance, setBalance] = useState(0);
  const [exposer, setExposer] = useState(0);
  const [Menu, setMenu] = useState('');
  const [token, setToken] = useState('')
  const [User, setUser]=useState([]);
  const [Live, setLive] = useState(0)
  const [Profit, setProfit] = useState(0)
  // Define the sendMoney function
  const sendMoney = (val) => {
    val > 5000000 ? setBalance(5000000) : setBalance(val)
    // console.log('Send Money Function Wrapper', val);
  };
  const insertUser = (val) => {
    setUser(val);
    // console.log('insert User', val.balance);
    setBalance(val.balance);
  };
  const sendExposer = (val) => {
    setExposer(val);
    // console.log('Send Money Function Wrapper', val);
  };
  const sendLive = (val) => {
    setLive(val);
    // console.log('Send Money Function Wrapper', val);
  };
  const sendProfit = (val) => {
    setProfit(val);
    // console.log('Send Money Function Wrapper', val);
  };
  const insertAuth = (val) => {
    setToken(val);
    // console.log('Send Money Function Wrapper', val);
  };
  const toggleMenu = () => {
    Menu === "" ? setMenu('open'):setMenu('');
    console.log(Menu)
  };

  // Create the context object
  const contextValue = {
    sendMoney: sendMoney, // Pass the function reference
    balance: balance,
    toggleMenu:toggleMenu,
    sendExposer:sendExposer,
    sendLive:sendLive,
    exposer:exposer,
    Menu:Menu,
    Token:token,
    insertUser:insertUser,
    User:User,
    setToken:insertAuth,
    Live:Live,
    profit:Profit,
    sendProfit:sendProfit
  };
  return (
    <CommonContext.Provider value={contextValue}>
    <div>
    <BrowserRouter>
      <Routes>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Protected Comp={Home} />}></Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="/matchdetails/:id" element={<Protected Comp={Sports} />}></Route>
      <Route path="/Games/:id/:event" element={<Protected Comp={Event} />}></Route>
      <Route path="/MatchesControl/:id/:event" element={<Protected Comp={Mcontrol} />}></Route>
      <Route path="/matchlive/:id/:game" element={<Protected Comp={Live} />}></Route>
      <Route path="/sports" element={<Protected Comp={Sports} />}></Route>
      <Route path="/sports/control" element={<Protected Comp={SportsControl} />}></Route>
      <Route path="/series/control" element={<Protected Comp={SeriesControl} />}></Route>
      <Route path="/match/control" element={<Protected Comp={MatchControl} />}></Route>
      <Route path="/market/control" element={<Protected Comp={MarketControl} />}></Route>
      <Route path="/bm/control" element={<Protected Comp={BookMakerControl} />}></Route>
      <Route path="/direct" element={<Protected Comp={Direct} />}></Route>
      <Route path="/team" element={<Protected Comp={Direct} />}></Route>
      <Route path="/tree" element={<Protected Comp={Direct} />}></Route>
      <Route path="/wallet" element={<Protected Comp={WalletPage} />}></Route>
      <Route path="/wRequest" element={<Protected Comp={WithdrawRequestPage} />}></Route>
      <Route path="/wHistory" element={<Protected Comp={WithdrawRequestPage} />}></Route>
      <Route path="/sRequest" element={<Protected Comp={SendMoneyRequestPage} />}></Route>
      <Route path="/sHistory" element={<Protected Comp={SendMoneyRequestPage} />}></Route>
      <Route path="/accountStatement/:type" element={<Protected Comp={Account} />}></Route>
      <Route path="/recharge" element={<Protected Comp={Recharge} />}></Route>
      <Route path="/logout" element={<Protected Comp={Logout} />}></Route>
      <Route path="/betList" element={<Protected Comp={BetList} />}></Route>
      <Route path="/banner" element={<Protected Comp={Banner} />}></Route>
      <Route path="/declare/:game/:id" element={<Protected Comp={MatchDeclare} />}></Route>
      <Route path="*" element={<NoPage />} />
        {/* <div className="container-fluid position-relative d-flex p-0"> */}
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <Signup /> */}
          {/* <Direct /> */}
          {/* <Sports />   */}
          {/* <SendMoneyPage /> */}
          {/* <WithdrawPage /> */}
          {/* <Recharge /> */}
        {/* </div>     */}
    
      </Routes>
    </BrowserRouter>
    </div>
    </CommonContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
