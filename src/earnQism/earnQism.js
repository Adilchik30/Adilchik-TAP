import React from "react";
import "./earnQIsm.css";
import kalendar from "../assets/uzumvazifa/kalendar.jpg"
import yutub from "../assets/uzumvazifa/youtube.png"
import telegram from "../assets/uzumvazifa/telegram.png"
import tezkor from "../assets/uzumvazifa/uzumtezkor.png"
import uzum from "../assets/uzumvazifa/uzum.png"
import nasiya from "../assets/uzumvazifa/nasiya.png"
import kuryer from "../assets/uzumvazifa/kuryer.png"
import uzumnasiay from "../assets/uzumvazifa/uzumnasiya.png"

const EarnQism = () => {
  return (
    <div>
      <div className="earn_title">
        <h2>Vazifalarni bajaring</h2>
        <p>va yanada ko'proq Hurmat tangalarini qo'lga kiriting</p>
      </div>
      <div className="daily_tasks">
        <p>Kundalik vazifalar</p>
        <div className="a_task">
          <div className="task_img">
          <img width={50} src={kalendar} alt="" />
          </div>
          <div className="task_text">
            <p className="invite_text">Kirish uchun kunlik mukofot</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+6.65M</span>
            </p>
          </div>
        </div>
      </div>
      <div className="tasks_list">
        <p>Vazifalar ro'yxati</p>
        <div className="a_task">
          <div className="task_img"><img width={50} src={yutub} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Yutubda Uzumga obuna bo'ling!</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img"><img width={50} src={telegram} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Uzum Telegramga obuna bo'ling</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img"><img width={50} src={tezkor} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Uzum tezkor ilovasini o'rnating</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img"><img width={50} src={uzum} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Uzum Marketga baho qo'ying</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img"><img width={50} src={nasiya} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Uzum Nasiya ilovasini o'rnating</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img"><img width={50} src={uzumnasiay} alt="" /></div>
          <div className="task_text">
            <p className="invite_text">Uzum Tezkorga obuna bo'ling</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div>
        <div className="a_task">
          <div className="task_img">
          <img width={50} src={kuryer} alt="" />
          </div>
          <div className="task_text">
            <p className="invite_text">Yutubdagi Uzum Tezkorga obuna</p>
            <p className="bonus_text">
              <span className="coin_icon"></span>
              <span className="bonus_amount">+5K</span>
            </p>
          </div>
        </div><br /><br /><br /><br />
      </div>
    </div>
  );
};
export default EarnQism;
