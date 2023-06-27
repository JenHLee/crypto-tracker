import { useParams } from "react-router";

type RouteParams = {
    coinId: string;
}

function Coin() {
    // useParams: URL에서 관심있어 하는 정보를 잡아낼 수 있게 해주는 것
    // get info of /:coinId
  const {coinId} = useParams<RouteParams>();
  console.log(coinId);
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
