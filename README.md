## 실행 방법
1. 먼저, 컴퓨터에 Node.js가 설치되어 있는지 확인해주세요. 공식 Node.js 웹사이트에서 다운로드할 수 있습니다.

2. 터미널 또는 명령 프롬프트를 열고 복제할 위치로 이동 후 다음 명령어 실행
  >  ```
  >  https://github.com/aaaaazzzzzaa/react-shop-app.git
  >  ```

3. 프로젝트의 종속성을 설치
  ```
  npm install
  ```

4. firebase env 설정 (env.sample 파일 확인)
  ```
  VITE_REACT_APP_FIREBASE_API_KEY='파이어베이스 API KEY'
  VITE_REACT_APP_FIREBASE_AUTH_DOMAIN='파이어베이스 AUTH DOMAIN'
  VITE_REACT_APP_FIREBASE_PROJECT_ID='파이어베이스 PROJECT ID'
  VITE_REACT_APP_FIREBASE_STORAGE_BUCKET='파이어 베이스 STORAGE BUCKET'
  VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID='파이어베이스 MESSAGING SENDER ID'
  VITE_REACT_APP_FIREBASE_APP_ID='파이어베이스 APP ID'
  VITE_REACT_APP_FIREBASE_MEASUREMENT_ID='파이어베이스 MEASUREMENT ID'
  ```

  > 4.1. 파이어베이스의 Authentication(인증) 부분에서 이메일/비밀번호를 설정해야 된다. [간단한 가이드 문서](firebase-guide.md)

5. env 설정 후 프로젝트 실행
  ```
  npm run start
  ```

6. 실행중인 localhost:3000 으로 이동 후 실행 중인 페이지 확인

## 동작 화면
<img src="img/react-shop-app.gif" width="500">
