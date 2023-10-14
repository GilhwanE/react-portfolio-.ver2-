#  React Portfolio ver2

## 주요기능 

- React, style-component, framer-motion를 이용하여 리액트 버전 포트폴리오 웹 사이트 제작

#### URL :  https://hwan-introduction.netlify.app/

---

### src 🗂
#### components 
  - Main.js
  - About.js
  - Intro.js
  - Skills.js
  - Work.js
  - Theme.js

#### subComponents
  - HomeButton.js
  - LogoComponent.js
  - Card.js
  - BigTitle.js
  - SocialIcons.js
  - SoundBar.js

### npm install 🛠
>npm i framer-motion

>npm i react-router-dom (v6)

>npm i normalize.css

>npm i styled-components



### 메인화면 🖥
![스크린샷 2023-10-14 21 54 27](https://github.com/GilhwanE/react-portfolio-.ver2-/assets/63918911/facc77c3-5d3a-44d7-ac2a-d958eab6bc44)

### 개선사항
- 현재는 PC 해상도로만 지원되고 있습니다. 
  => 모바일 버전용으로 개선 할 예정 ( style-components 사용 )

### 문제발생 및 방안점 ⛔️
- ❗️ Skill, about 페이지에 Partcle 라이브러리를 사용하여 스타일을 적용하려다 적용이 되지 않는 문제발생
- => ✅ 버전 업데이트가 되지 않아 적용이 되지 않은것으로 보아 다른 라이브러리를 찾기전까지는 기본배경으로 적용해둘것.
## 배포시 문제 발생 (netilfy)
- ❗️ 배포후 컨텐츠 링크 변경후 페이지 새로고침시 'not found page' 문제발생
- => ✅ netilfy는 client측에서 처리되지 않은 URL을 처리할수 있도록 _redirects라는 파일을 제공한다.
      pulic/_rediects 파일을 생성한 후, /* /index.html 200 을 추가한다.

