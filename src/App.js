/* eslint-disable jsx-a11y/alt-text */
import right from "./assets/left.png";
import left from "./assets/right.png";
import roadmap_img from "./assets/roadmap.png";
import "./App.css";
import Quez from "./Quez/Quez";
import { Fragment, useState } from "react";
import ScrollButton from "./Quez/ScrollButton";
import { Content, Header } from "./Quez/Styles";

function App() {
  
const [visible, setVisible] = useState(true)

const scrollToBottom = () =>{
	window.scrollTo({
	top: document.documentElement.scrollHeight,
	behavior: 'auto'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

  return (
    <Fragment>
      <div className="App">
        <header className="App-header"></header>
        <div className="body_app">
          <div className="main">
            <div className="title">
              <h1
                style={{
                  position: "absolute",
                  textAlign: "left",
                  marginLeft: "80px",
                }}
              >
                МЫ ПОМОЖЕМ <br />
                <h style={{ color: "#FDC73A" }}>ОПРЕДЕЛИТЬ</h> КАКОЙ <br />
                <h style={{ color: "#FDC73A" }}>БИЗНЕС</h> ПОДХОДИТ <br />
                <h style={{ color: "#FDC73A" }}>ВАМ</h> БОЛЬШЕ ВСЕГО
              </h1>
              <div className="img_right">
                <img className="img_righta" src={right}></img>
              </div>
              <div className="img_left">
                <img className="img_left" src={left}></img>
              </div>
            </div>
            <div className="button_area">
              <div className="about_btn">
                <button className="about_btna">ПОДРОБНЕЕ</button>
              </div>
              <div className="start_btn">
                <button className="btn" onClick={scrollToBottom}>НАЧАТЬ</button>
              </div>
            </div>
          </div>
          <div className="about">
            <h1 className="back_text">
              Торговля оптовая / Дистрибуция Торговля розничная / Retail
              Промышленность и Производство Отели / Рестораны IT- разработка ПО
              FMCG Строительство Реклама и PR-услуги Автобизнес Интернет
              Транспорт и Логистика Фармацевтика АПК Красота / Фитнес / Спорт
              Образование Банки Туризм / Путешествия / Перевозки Недвижимость и
              Девелопмент Финансовые услуги Медицина и Здравоохранение
              Телекоммуникации / Связь
            </h1>
            <div className="window_roadmap">
              <div className="roadmap">
                <div className="hi">
                  <div className="img_road">
                    <img
                      src={roadmap_img}
                      alt="roadmapimg"
                      className="roadImg"
                    />
                  </div>
                  <div className="road_txt">
                    <h1>
                      ЧТО ОТ
                      <br /> ВАС <br />
                      ТРЕБУЕТЬСЯ?
                    </h1>
                  </div>
                </div>
              </div>
              <div className="roadmap a"></div>
              <div className="roadmap b"></div>
            </div>
          </div>
          <div className="test_app">
            <Quez></Quez>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
