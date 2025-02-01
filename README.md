# MYCUP_GAME

투표 게임 웹 앱 "MYCUP"

## 프로젝트 소개

"MYCUP"은 이상형 월드컵 사이트에서 영감을 받아 만든 투표 커뮤니티 웹 앱입니다.  <br>
사용자들은 두 가지 후보를 선택하여 투표를 시작할 수 있으며, 투표에 참여한 유저들은 실시간으로 현황을 확인하고, 다른 참가자들과 댓글을 통해 소통할 수 있습니다. 이 앱은 재미있는 투표 경험을 제공하며, 커뮤니티 활동을 촉진하는 플랫폼입니다.

## Flowchart

<details>
  <summary>확인하기</summary>

<img width="800" alt="MYCUP_GAME Flowchart_v1.2" src="https://github.com/user-attachments/assets/47d8104a-9abb-4171-b06f-0f3e8e5fe837">

</details>

### ⚙️ 기술 스택

- **Frontend**

  - `React`, `Javascript`, `react-query`, `react-router-dom`, `react-spinners`, `styled-components`

- **Backend**
  - `Express`, `Javascript`, `JWT`

## 폴더 구조

<details>
  <summary>확인하기</summary>

```
[PROJECT]MYCUP_GAME/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── apis/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Edit/
│   │   │   ├── Game/
│   │   │   ├── Interface/
│   │   │   ├── List/
│   │   │   ├── Login/
│   │   │   ├── Make/
│   │   │   ├── Profile/
│   │   │   └── Vote/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── UI/
│   │   ├── utils/
│   │   │   ├── actions/
│   │   │   ├── loader/
│   │   │   └── router.jsx
└── backend/
    ├── data/
    │   ├── api/
    │   │   ├── event.js
    │   │   ├── user.js
    │   │   └── util.js
    ├── routes/
    │   │   ├── auth.js
    │   │   └── events.js
    ├── util/
    │   │   ├── auth.js
    │   │   ├── errors.js
    │   │   └── validation.js
    └── app.js
```

</details>

## 설치 및 실행 방법

1. 저장소를 클론합니다.
   ```bash
   git clone [저장소 URL]
   ```
2. 클라이언트 및 서버 디렉토리로 이동하여 필요한 패키지를 설치합니다.
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. 백엔드 서버를 실행합니다.
   ```bash
   npm start
   ```
4. 프론트 서버를 실행합니다.
   ```bash
   npm run dev
   ```
5. 서버와 클라이언트가 성공적으로 연결되면, 로컬 환경에서 프로젝트를 테스트할 수 있습니다.

## 주요 기능

### 🧑🏻‍💻 로그인 및 회원가입

아이디와 비밀번호는 실시간 유효성 검사를 실시합니다.
JWT 인증 토큰을 사용하여 로그인 후 1시간이 지나면 자동 로그아웃 됩니다.

<details>
  <summary>예시 이미지</summary>

#### 1. 로그인

<img width="800" alt="login" src="https://github.com/user-attachments/assets/194338fc-8928-4c34-9445-df9d12b60e84">

#### 2. 회원가입

<img width="800" alt="login" src="https://github.com/user-attachments/assets/cd84bd3e-dac4-4f2c-81b7-bbfa35a36ecf">

</details>

### ✨ 게임 생성 및 관리

제목, 설명, 공개여부, 이미지를 기입하여 게임을 생성할 수 있습니다.
공개여부

- 비공개: 본인을 제외한 다른 사용자는 접근할 수 없습니다.
- 전체 공개: 모든 사용자가 플레이할 수 있게 공개됩니다.
- 친구 공개: 비밀번호 추가하여 비밀번호를 아는 사용자만 플레이할 수 있습니다.

<details>
  <summary>예시 이미지</summary>

#### 1. 생성

<img width="800" alt="login" src="https://github.com/user-attachments/assets/087e65eb-207b-47a4-9335-1f8288aada4f">

#### 2. 수정

<img width="800" alt="login" src="https://github.com/user-attachments/assets/a9be1618-4cb0-478e-95c1-28a27d91fa56">

#### 3. 삭제

<img width="800" alt="login" src="https://github.com/user-attachments/assets/5b71bd67-b69f-4d1d-a5dc-f711476fd49e">

</details>

### 🔍 게임 검색 및 정렬

원하는 게임을 찾고 최신 및 인기순으로 정렬할 수 있습니다.

<details>
  <summary>예시 이미지</summary>

<img width="800" alt="search_sort" src="https://github.com/user-attachments/assets/dd515bf0-5d99-4628-bfef-01cc458230ae">

</details>

### 🎮 게임 진행

원하는 항목에 투표를 진행하고 집계판을 통해 점수 및 댓글을 확인할 수 있습니다.

<details>
  <summary>예시 이미지</summary>

#### 1. 전체, 비공개 게임 및 댓글 화면

<img width="800" alt="general_game" src="https://github.com/user-attachments/assets/50429d69-ee09-4b30-a90e-b8b72dee452c">

#### 2. 친구 공개 게임 화면

<img width="800" alt="friend_game" src="https://github.com/user-attachments/assets/1fbca329-2c61-46f1-87e0-bb45e4697a73">

</details>

### 🏠 마이페이지

프로필 이미지와 이름, 한줄 설명을 확인하고 수정할 수 있습니다.
내가 만든 게임들을 카테고리(비공개, 친구 공개) 별로 확인할 수 있고 수정 및 삭제도 진행이 가능합니다.

<details>
  <summary>예시 이미지</summary>

<img width="800" alt="mypage" src="https://github.com/user-attachments/assets/21ef0519-4670-46e7-9751-696f74d3f1d1">

</details>

### 🚫 404 페이지

<details>
  <summary>예시 이미지</summary>

<img width="800" alt="404page" src="https://github.com/user-attachments/assets/a7812341-ea5d-4558-b7f5-69443d201ce2">

</details>

## 기능 세부사항

<details>
  <summary>확인하기</summary>

### 🔍 회원가입 및 로그인

- [x] 비밀번호 입력란에 마우스 오버 시 input 타입을 text로 바꿔서 비밀번호를 보여주는 눈 아이콘 추가

### 🔍 게임 생성 및 관리

- [x] 백엔드에 데이터 저장하기
- [x] 백엔드에 저장된 데이터 가져오기
- [x] 업로드한 게임 수정 기능
- [x] 업로드한 게임 삭제 기능
- [x] 친구 공개 게임은 비밀번호 입력 후 플레이
  - [x] 친구 공개 게임 등록 시 비밀번호 입력 칸 보이기
  - [x] 비밀번호 입력 칸에 로그인 폼의 비밀번호 입력과 같이 눈 아이콘 추가
  - [x] 비밀번호 입력 프롬프트에서 모달로 변경
- [x] 비공개, 친구공개 게임 표시 마크 변경 (직관적이게)
- [x] 인기순, 날짜순 등 게임 정렬 기능 구현

### 🔍 게임 진행

- [x] 투표 기능 구현 (투표를 하였을 경우 투표한 후보의 투표 인원 배열에 사용자 추가)
- [x] 선택 시 지금까지 투표한 인원 수 보이는 기능 구현
- [x] 투표 로직 react-query로 변경

### 🔍 투표 집계 창 - 점수 확인 및 댓글

- [x] 집계 창 제작
- [x] 누적된 점수 화면에 출력 (그래프, 숫자)
- [x] 댓글달기 기능 추가
  - [x] 댓글 입력 및 버튼 추가
  - [x] 댓글 에러 핸들러 추가
  - [x] 댓글 컴포넌트 key값 변경

### 🔍 마이페이지

- [x] 프로필 기본 이미지
  - [x] 프로필 사진 업로드 기능
- [x] 이름
  - [x] 이름 변경 기능 구현
- [x] 한줄 설명
  - [x] 설명 입력 기능 구현
- [x] 업로드한 게임
  - [x] 공개 범위 별로 분류 (ex. Personal, Friends)

### 🔍 오류 처리

- [x] 유효하지 않은 입력값 UI 개선 (로그인, 만들기, 수정하기)
- [x] useQuery를 사용하여 에러시 ErrorBlock 나오게 하기
- [x] 에러 페이지 UI 개선

### 🔍 ISSUES

- [x] 회원 가입 후 자동 로그인 될 시 username에 undefined가 할당되는 오류
- [x] input 요소의 value는 onChange 이벤트에 할당 -> 수정하기 시 이전 데이터가 입력되도록
- [x] 수정하기 시 이전 라디오 옵션에 체크 되어 있지 않음
- [x] Game 페이지의 Back 버튼을 눌렀을 때 이전 페이지가 아니라 목록으로 이동하는 문제 해결
  - useNavigate 훅을 사용하여 브라우저 히스토리에서 한 페이지 뒤로 이동
- [x] 마이페이지 비밀번호 입력 오류 해결

### 🔍 UX 개선

- [x] 모달에서 esc로 창 나가기 기능
- [x] 비밀번호 모달에서 엔터 키로 제출 가능하게 변경

</details>
