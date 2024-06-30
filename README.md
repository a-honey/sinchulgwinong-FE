# 신출귀농 - FE

> 제9회 농림축산식품부 공공데이터 활용 창업경진대회 신출귀농 프론트엔드 레포지토리

🌾 농촌 구인·구직 포털 웹서비스 신출귀농 🌽은 매년 감소하는 농가와 농촌 일자리 문제를 해결하기 위해 탄생했습니다. 디지털 환경에 익숙하지 않은 농산업 종사자들도 쉽게 사용할 수 있는 구인·구직 서비스를 제공합니다. 신출귀농은 구직과 구인 기능뿐만 아니라, 기업 리뷰, 커뮤니티, 채팅 등의 다양한 기능을 통해 구직자가 자신에게 맞는 기업을 더 합리적이고 현명하게 선택할 수 있도록 지원합니다.

🔗 서비스 링크 : https://www.sinchulgwinong.site
![image](https://github.com/team9502/sinchulgwinong-FE/assets/75254185/3e9ff259-692d-4ae0-866b-1829ebfc563e)

## 주요 기능 및 특징
### 🩷 구인자 포인트를 이용한 배너 광고
구인자는 포인트를 사용하여 메인 화면 배너에 자신의 구직 광고를 게시할 수 있습니다.
![image](https://github.com/team9502/sinchulgwinong-FE/assets/75254185/798cac71-0806-4e33-abc7-0f64485918fb)

### 💚 지역별 및 업종별 구인글 필터링 및 지도 확인
지역과 업종에 따라 구인글을 필터링할 수 있으며, 지도를 통해 전국의 구인 기업 위치를 확인할 수 있습니다.

![image](https://github.com/team9502/sinchulgwinong-FE/assets/75254185/754a2ea5-1fcb-4507-bc7d-8af528a8ac27)

### 💛 기업 리뷰 작성 및 리뷰 확인, 스크랩
구직자는 기업에 리뷰와 평점을 남길 수 있으며, 포인트를 사용해 다른 사람의 리뷰를 확인할 수 있습니다. 또한, 스크랩 기능을 통해 관심 있는 구인글을 모아놓을 수 있으며, 구인자는 리뷰 게시 중단 요청을 할 수 있습니다.

![image](https://github.com/team9502/sinchulgwinong-FE/assets/75254185/7194d7fd-13b2-4471-8658-05d7e1c2d198)

### 💜 구인자와 구직자 간의 실시간 소통
채팅 기능을 통해 구인자에게 문의하고, 구직 의사를 표현할 수 있습니다.

## Period

- 2024.05.17 ~ 2024.07.01

## Stacks

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-F2820D?style=for-the-badge&logo=react&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=ffffff)
![Amazon S3](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=ffffff)
![CloudFront](https://img.shields.io/badge/CloudFront-FF9900?style=for-the-badge&logo=amazon-cloudfront&logoColor=ffffff)
![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-7C3AED?style=for-the-badge&logo=shadcnui&logoColor=ffffff)
![React Quill](https://img.shields.io/badge/React%20Quill-F50C0C?style=for-the-badge&logo=react&logoColor=ffffff)
![Husky](https://img.shields.io/badge/Husky-4C1D95?style=for-the-badge&logo=husky&logoColor=ffffff)

- Next.js 앱 라우터를 활용하여 서버 컴포넌트의 개념을 이해하고 적용하였으며, 데이터 fetching 시 캐싱을 고려하여 싱글톤 패턴을 활용해 API 연결을 추상화하였습니다. 
- React-hook-form 비제어 패턴을 사용하여 게시글 작성 중 불필요한 렌더링을 방지하였으며, control을 활용하여 React-quill과 연결하였습니다.
- Amazon S3: Next.js를 정적 파일로 빌드한 후, GitHub Actions를 통해 CI/CD 파이프라인을 구축하여 저장하고 배포하였습니다.
- CloudFront: CDN을 통해 콘텐츠를 빠르고 안정적으로 전달하기 위해 사용하였습니다.
- Tailwind CSS: 빠르고 효율적인 스타일링을 위해 사용하였습니다.
- Shadcn/ui: Headless UI를 커스터마이징하기 위해 사용하였습니다.
     
## Developers

|                                              정아현                                              |
| :----------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/a-honey" alt="profile" width="180" height="180"> |
|                              [@a-honey](https://github.com/a-honey)                              |
