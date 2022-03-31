import "./App.css";
import KakaoLogin from "react-kakao-login";
import axios from "axios";

const App = () => {
  const token = "31722426240667fefe6898c41c6a2aa4";

  const onSuccess = (res) => {
    console.log(res);
    axios
      .post("http://localhost:8001/loginkakao", {
        id: res.profile.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log("된다");
        } else {
          alert("error");
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <KakaoLogin
        token={token}
        onSuccess={onSuccess}
        onFail={(res) => console.log(res)}
        onLogout={console.info}
        className="KakaoLogin"
        getProfile={true}
      ></KakaoLogin>
    </>
  );
};

export default App;
