var stat = 0;
var balls = 0;
window.onload = function() {
  var st = document.getElementById("start");
  var butt3 = document.getElementById("butt3");
  var butt2 = document.getElementById("butt2");
  var vopr = document.getElementById("soob");
  var nazv = document.getElementById("nazv");
  var cart = document.getElementById("cart");
  st.onclick = function() {
    if (stat == 0) { 
      st.innerHTML = "@ksenia_karpenko";
      nazv.innerHTML = "Вопрос №1";
      vopr.innerHTML = "Короткий адрес Ксении Карпенко?"
      butt2.style.display = "block";
      butt3.style.display = "block";
      st.style.top = "200px";
    }
    if (stat == 1){
      balls += 1;
      nazv.innerHTML = "Вопрос №2";
      vopr.innerHTML = "Прошлая фамилия Сергея: ";
      st.innerHTML = "Сергеев";
      butt2.innerHTML = "Суторминов";
      butt3.innerHTML = "Забивной";
    }
    if (stat == 2){
      balls += 3;
      nazv.innerHTML = "Вопрос №3";
      vopr.innerHTML = "Запуск GG Pay: ";
      st.innerHTML = "Июнь";
      butt2.innerHTML = "Июль";
      butt3.innerHTML = "Апрель";
    }
    if (stat == 3){
      balls += 2;
      nazv.innerHTML = "Вопрос №4";
      vopr.innerHTML = "Кто НЕ был топ 1 в беседе?";
      st.innerHTML = "Кирилл Мещеряков";
      butt2.innerHTML = "Кирилл Шидловский";
      butt3.innerHTML = "Аркадий Хасаинов";
    }
    if (stat == 4){
      balls += 2;
      nazv.innerHTML = "Вопрос №5";
      vopr.innerHTML = "Сколько кейсов в Dark Pay?";
      st.innerHTML = "8";
      butt2.innerHTML = "3";
      butt3.innerHTML = "5";
    }
    if (stat == 5){
      balls += 1;
      st.style.display = "none";
      butt2.style.display = "none";
      butt3.style.display = "none";
      if (balls == 5) {
        cart.style.display = "block";
        nazv.innerHTML = "Вы Сергей Сутормин";
        vopr.innerHTML = "Набрано 5/15 'баллов'";
      };
      if (balls == 6) {
        cart.src = "https://sun9-51.userapi.com/c858332/v858332771/19bec0/r9wlpHzZi8g.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Андрей Челсов";
        vopr.innerHTML = "Набрано 6/15 'баллов'";
      };
      if (balls == 7) {
        cart.src = "https://sun9-60.userapi.com/c206728/v206728771/8fefc/-RiU2j1zMT0.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Никита Пупач";
        vopr.innerHTML = "Набрано 7/15 'баллов'";
      };
      if (balls == 8) {
        cart.src = "https://sun9-53.userapi.com/c857024/v857024771/9e205/0kh7uTd4RYU.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Александр Бондарь";
        vopr.innerHTML = "Набрано 8/15 'баллов'";
      };
      if (balls == 9) {
        cart.src = "https://sun9-57.userapi.com/c856524/v856524771/109860/tNffnO46gzQ.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Кирилл Шидловский";
        vopr.innerHTML = "Набрано 9/15 'баллов'";
      };
      if (balls == 10) {
        cart.src = "https://sun9-24.userapi.com/c205324/v205324042/96428/oQBRjKqCYxs.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Архипп Бычков";
        vopr.innerHTML = "Набрано 10/15 'баллов'";
      };
      if (balls == 11) {
        cart.src = "https://sun9-51.userapi.com/c858416/v858416771/193d52/FSq0QSWX1SE.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Артём Борисов";
        vopr.innerHTML = "Набрано 11/15 'баллов'";
      };
      if (balls == 12) {
        cart.src = "https://sun9-52.userapi.com/c857320/v857320771/10a1e1/FBUDCaYdtOM.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Олег Гроссман";
        vopr.innerHTML = "Набрано 12/15 'баллов'";
      };
      if (balls == 13) {
        cart.src = "https://sun9-36.userapi.com/c857536/v857536771/19ee49/tPOSXYjC68A.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Федя Петкевич";
        vopr.innerHTML = "Набрано 13/15 'баллов'";
      };
      if (balls == 14) {
        cart.src = "https://sun9-4.userapi.com/c205428/v205428771/973ee/NXqdWEWoLCo.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тома Мороз";
        vopr.innerHTML = "Набрано 14/15 'баллов'";
      };
      if (balls == 15) {
        cart.src = "https://sun9-18.userapi.com/c855532/v855532688/2093c9/VA2aDN2ymvk.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тот-Самый Который-Это";
        vopr.innerHTML = "Набрано 15/15 'баллов'";
      };
    }
    stat++;
  };
  butt2.onclick = function() {
    if (stat == 0) { 
      st.innerHTML = "@ksenia_karpenko";
      nazv.innerHTML = "Вопрос №1";
      vopr.innerHTML = "Короткий адрес Ксении Карпенко?"
      butt2.style.display = "block";
      butt3.style.display = "block";
      st.style.top = "200px";
    }
    if (stat == 1){
      balls += 3;
      nazv.innerHTML = "Вопрос №2";
      vopr.innerHTML = "Прошлая фамилия Сергея: ";
      st.innerHTML = "Сергеев";
      butt2.innerHTML = "Суторминов";
      butt3.innerHTML = "Забивной";
    }
    if (stat == 2){
      balls += 2;
      nazv.innerHTML = "Вопрос №3";
      vopr.innerHTML = "Запуск GG Pay: ";
      st.innerHTML = "Июнь";
      butt2.innerHTML = "Июль";
      butt3.innerHTML = "Апрель";
    }
    if (stat == 3){
      balls += 3;
      nazv.innerHTML = "Вопрос №4";
      vopr.innerHTML = "Кто НЕ был топ 1 в беседе?";
      st.innerHTML = "Кирилл Мещеряков";
      butt2.innerHTML = "Кирилл Шидловский";
      butt3.innerHTML = "Аркадий Хасаинов";
    }
    if (stat == 4){
      balls += 1;
      nazv.innerHTML = "Вопрос №5";
      vopr.innerHTML = "Сколько кейсов в Dark Pay?";
      st.innerHTML = "8";
      butt2.innerHTML = "3";
      butt3.innerHTML = "5";
    }
    if (stat == 5){
      balls += 2;
      st.style.display = "none";
      butt2.style.display = "none";
      butt3.style.display = "none";
      if (balls == 5) {
        cart.style.display = "block";
        nazv.innerHTML = "Вы Сергей Сутормин";
        vopr.innerHTML = "Набрано 5/15 'баллов'";
      };
      if (balls == 6) {
        cart.src = "https://sun9-51.userapi.com/c858332/v858332771/19bec0/r9wlpHzZi8g.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Андрей Челсов";
        vopr.innerHTML = "Набрано 6/15 'баллов'";
      };
      if (balls == 7) {
        cart.src = "https://sun9-60.userapi.com/c206728/v206728771/8fefc/-RiU2j1zMT0.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Никита Пупач";
        vopr.innerHTML = "Набрано 7/15 'баллов'";
      };
      if (balls == 8) {
        cart.src = "https://sun9-53.userapi.com/c857024/v857024771/9e205/0kh7uTd4RYU.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Александр Бондарь";
        vopr.innerHTML = "Набрано 8/15 'баллов'";
      };
      if (balls == 9) {
        cart.src = "https://sun9-57.userapi.com/c856524/v856524771/109860/tNffnO46gzQ.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Кирилл Шидловский";
        vopr.innerHTML = "Набрано 9/15 'баллов'";
      };
      if (balls == 10) {
        cart.src = "https://sun9-24.userapi.com/c205324/v205324042/96428/oQBRjKqCYxs.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Архипп Бычков";
        vopr.innerHTML = "Набрано 10/15 'баллов'";
      };
      if (balls == 11) {
        cart.src = "https://sun9-51.userapi.com/c858416/v858416771/193d52/FSq0QSWX1SE.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Артём Борисов";
        vopr.innerHTML = "Набрано 11/15 'баллов'";
      };
      if (balls == 12) {
        cart.src = "https://sun9-52.userapi.com/c857320/v857320771/10a1e1/FBUDCaYdtOM.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Олег Гроссман";
        vopr.innerHTML = "Набрано 12/15 'баллов'";
      };
      if (balls == 13) {
        cart.src = "https://sun9-36.userapi.com/c857536/v857536771/19ee49/tPOSXYjC68A.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Федя Петкевич";
        vopr.innerHTML = "Набрано 13/15 'баллов'";
      };
      if (balls == 14) {
        cart.src = "https://sun9-4.userapi.com/c205428/v205428771/973ee/NXqdWEWoLCo.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тома Мороз";
        vopr.innerHTML = "Набрано 14/15 'баллов'";
      };
      if (balls == 15) {
        cart.src = "https://sun9-18.userapi.com/c855532/v855532688/2093c9/VA2aDN2ymvk.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тот-Самый Который-Это";
        vopr.innerHTML = "Набрано 15/15 'баллов'";
      };
    }
    stat++;
  };
  butt3.onclick = function() {
    if (stat == 0) { 
      st.innerHTML = "@ksenia_karpenko";
      nazv.innerHTML = "Вопрос №1";
      vopr.innerHTML = "Короткий адрес Ксении Карпенко?"
      butt2.style.display = "block";
      butt3.style.display = "block";
      st.style.top = "200px";
    }
    if (stat == 1){
      balls += 2;
      nazv.innerHTML = "Вопрос №2";
      vopr.innerHTML = "Прошлая фамилия Сергея: ";
      st.innerHTML = "Сергеев";
      butt2.innerHTML = "Суторминов";
      butt3.innerHTML = "Забивной";
    }
    if (stat == 2){
      balls += 1;
      nazv.innerHTML = "Вопрос №3";
      vopr.innerHTML = "Запуск GG Pay: ";
      st.innerHTML = "Июнь";
      butt2.innerHTML = "Июль";
      butt3.innerHTML = "Апрель";
    }
    if (stat == 3){
      balls += 1;
      nazv.innerHTML = "Вопрос №4";
      vopr.innerHTML = "Кто НЕ был топ 1 в беседе?";
      st.innerHTML = "Кирилл Мещеряков";
      butt2.innerHTML = "Кирилл Шидловский";
      butt3.innerHTML = "Аркадий Хасаинов";
    }
    if (stat == 4){
      balls += 3;
      nazv.innerHTML = "Вопрос №5";
      vopr.innerHTML = "Сколько кейсов в Dark Pay?";
      st.innerHTML = "8";
      butt2.innerHTML = "3";
      butt3.innerHTML = "5";
    }
    if (stat == 5){
      balls += 3;
      st.style.display = "none";
      butt2.style.display = "none";
      butt3.style.display = "none";
      if (balls == 5) {
        cart.style.display = "block";
        nazv.innerHTML = "Вы Сергей Сутормин";
        vopr.innerHTML = "Набрано 5/15 'баллов'";
      };
      if (balls == 6) {
        cart.src = "https://sun9-51.userapi.com/c858332/v858332771/19bec0/r9wlpHzZi8g.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Андрей Челсов";
        vopr.innerHTML = "Набрано 6/15 'баллов'";
      };
      if (balls == 7) {
        cart.src = "https://sun9-60.userapi.com/c206728/v206728771/8fefc/-RiU2j1zMT0.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Никита Пупач";
        vopr.innerHTML = "Набрано 7/15 'баллов'";
      };
      if (balls == 8) {
        cart.src = "https://sun9-53.userapi.com/c857024/v857024771/9e205/0kh7uTd4RYU.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Александр Бондарь";
        vopr.innerHTML = "Набрано 8/15 'баллов'";
      };
      if (balls == 9) {
        cart.src = "https://sun9-57.userapi.com/c856524/v856524771/109860/tNffnO46gzQ.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Кирилл Шидловский";
        vopr.innerHTML = "Набрано 9/15 'баллов'";
      };
      if (balls == 10) {
        cart.src = "https://sun9-24.userapi.com/c205324/v205324042/96428/oQBRjKqCYxs.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Архипп Бычков";
        vopr.innerHTML = "Набрано 10/15 'баллов'";
      };
      if (balls == 11) {
        cart.src = "https://sun9-51.userapi.com/c858416/v858416771/193d52/FSq0QSWX1SE.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Артём Борисов";
        vopr.innerHTML = "Набрано 11/15 'баллов'";
      };
      if (balls == 12) {
        cart.src = "https://sun9-52.userapi.com/c857320/v857320771/10a1e1/FBUDCaYdtOM.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Олег Гроссман";
        vopr.innerHTML = "Набрано 12/15 'баллов'";
      };
      if (balls == 13) {
        cart.src = "https://sun9-36.userapi.com/c857536/v857536771/19ee49/tPOSXYjC68A.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Федя Петкевич";
        vopr.innerHTML = "Набрано 13/15 'баллов'";
      };
      if (balls == 14) {
        cart.src = "https://sun9-4.userapi.com/c205428/v205428771/973ee/NXqdWEWoLCo.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тома Мороз";
        vopr.innerHTML = "Набрано 14/15 'баллов'";
      };
      if (balls == 15) {
        cart.src = "https://sun9-18.userapi.com/c855532/v855532688/2093c9/VA2aDN2ymvk.jpg";
        cart.style.display = "block";
        nazv.innerHTML = "Вы Тот-Самый Который-Это";
        vopr.innerHTML = "Набрано 15/15 'баллов'";
      };
    }
    stat++;
  };
};