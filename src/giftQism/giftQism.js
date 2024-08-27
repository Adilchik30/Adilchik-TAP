import React from "react";
import yuz from "../assets/yuz.jpg";
import million from "../assets/million.jpg";
import "./giftQism.css";
const GiftQism = () => {
  return (
    <div className="gift_qism">
      <br />
      <br />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
        Uzum Market <br />
        promokodlarining <br />
        haftalik o'yini
      </p>
      <br />

      <div className="promocode_image">
        <div>
          <img width={165} src={yuz} alt="" />
        </div>
        <div>
          {" "}
          <img width={165} src={million} alt="" />
        </div>
      </div>
      <br />
      <div className="where_and_when">
        <h2>Qayerda va qachon</h2>
        <p>Har dushanba @uzumbosnews Telegramda</p>
      </div>
      <br />
      <div className="where_and_when">
        <h2>Qanday ishtirok etish mumkin</h2>
        <p>
          Barcha Uzum Bos oʻyinchilari oʻyinda avtomatik ravishda qatnashadilar.
          Soatiga qancha koʻp tajriba boʻlsa, gʻalaba qozonish imkoniyati
          shunchalik yuqori boʻladi <br />
          soatiga 5 000 tagacha tajriba — 1 ta imkoniyat <br />
          5 001 dan 10 000 gacha — 5 ta imkoniyat <br />
          10 001 dan 15 000 gacha — 6 ta imkoniyat <br />
          15 001 dan 20 000 gacha — 7 ta imkoniyat <br />
          20 001 dan 25 000 gacha — 8 ta imkoniyat <br />
          25 001 dan 30 000 gacha — 9 ta imkoniyat <br />
          30 001 dan — 10 ta imkoniyat <br />
          <br />
          <br />
          Imkoniyatlar qanchalik koʻp boʻlsa, Uzum Marketda xaridlar uchun
          promokodni yutib olish ehtimoli shunchalik yuqori boʻladi
        </p>
      </div>
    </div>
  );
};
export default GiftQism;
