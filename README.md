# MYCUP_GAME

투표 게임 웹 앱 "MYCUP"

## 프로젝트 소개

이상형 월드컵 사이트에서 영감을 받아 만든 투표 커뮤니티 웹 앱입니다.
사용자는 두 가지 후보를 정해 투표를 시작할 수 있고,
투표에 참여한 유저들은 투표를 진행하고 현황을 확인하며 투표에 참여한 다른 참가자들과 댓글을 통해 소통할 수 있습니다.

## Flowchart

<img width="1200" alt="MYCUP_GAME Flowchart" src="https://github.com/user-attachments/assets/505e88be-dcc4-4124-ba4b-6f4c0d1c76ab">

## 주요 기능

### 사용자 인증(로그인, 로그아웃, 계정 생성)

- [x] 비밀번호 입력란에 마우스 오버 시 input 타입을 text로 바꿔서 비밀번호를 보여주는 눈 아이콘 추가
- [ ] 회원 탈퇴 기능
  - [ ] 회원 탈퇴 시 제작한 게임들도 함께 삭제

### 게임 데이터 관리 (게임 추가, 수정, 제거)

- [x] 백엔드에 데이터 저장하기
- [x] 백엔드에 저장된 데이터 가져오기
- [x] 업로드한 게임 수정 기능
- [x] 업로드한 게임 삭제 기능
- [x] 친구 공개 게임은 비밀번호 입력 후 플레이
  - [x] 친구 공개 게임 등록 시 비밀번호 입력 칸 보이기
  - [x] 비밀번호 입력 칸에 로그인 폼의 비밀번호 입력과 같이 눈 아이콘 추가
  - [x] 비밀번호 입력 프롬프트에서 모달로 변경
- [x] 비공개, 친구공개 게임 표시 마크 변경 (직관적이게)

### 투표 기능

- [x] 투표 기능 구현 (투표를 하였을 경우 투표한 후보의 투표 인원 배열에 사용자 추가)
- [x] 선택 시 지금까지 투표한 인원 수 보이는 기능 구현
- [ ] 각 게임마다 모든 유저가 1표씩만 행사할 수 있도록 변경
- [ ] 기존 투표 변경 기능 구현

### 투표 집계 창

- [x] 집계 창 제작
- [ ] 누적된 점수 화면에 출력 (그래프, 숫자)
- [ ] 댓글달기 기능 추가
  - [ ] 댓글 입력 및 버튼 추가

### 마이페이지

- [x] 프로필 기본 이미지
  - [x] 프로필 사진 업로드 기능
- [x] 이름
  - [x] 이름 변경 기능 구현
- [x] 한줄 설명
  - [x] 설명 입력 기능 구현
- [x] 업로드한 게임
  - [x] 공개 범위 별로 분류 (ex. Personal, Friends)

### 반응형 웹

- [ ] 반응형 웹 구현

### 오류 처리

- [ ] 유효하지 않은 입력값 UI 개선 (로그인, 만들기, 수정하기)
- [x] useQuery를 사용하여 에러시 ErrorBlock 나오게 하기
- [x] 에러 페이지 UI 개선

## ISSUES

- [x] 회원 가입 후 자동 로그인 될 시 username에 undefined가 할당되는 오류
- [x] input 요소의 value는 onChange 이벤트에 할당 -> 수정하기 시 이전 데이터가 입력되도록
- [x] 수정하기 시 이전 라디오 옵션에 체크 되어 있지 않음
- [x] Game 페이지의 Back 버튼을 눌렀을 때 이전 페이지가 아니라 목록으로 이동하는 문제 해결
  - useNavigate 훅을 사용하여 브라우저 히스토리에서 한 페이지 뒤로 이동
- [x] 마이페이지 비밀번호 입력 오류 해결

## UX 개선

- [x] 모달에서 esc로 창 나가기 기능
- [x] 비밀번호 모달에서 엔터 키로 제출 가능하게 변경
