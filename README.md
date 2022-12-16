# sanghai_twist

KOSA, Douzone, Mini proj. 3(React), Team 4, 강현구, 류정수, 김상연, 전지현

## 프로젝트 기간

- 기획 및 설계 22/12/06 ~ 22/12/08
- 제작 기간 22/12/08 ~ 22/12/15
- 발표일 22/12/16

## 개발 스택

![image](https://user-images.githubusercontent.com/18836863/208041025-ab335759-0f2c-4679-9dc8-34f6c4dbf97b.png)

## 앱 개요
  
온라인 옷 쇼핑몰의 상하의를 구매할 때 서로다른 상 하의 상품들을 한눈에 매치시켜 비교하는 기능 제공. 앱은 사용자 자신이 가지고 있는 옷들이 쇼핑몰의 상품과 잘 어울리는지, 쇼핑몰에서 파는 어떤 상의에 어떤 하의가 어울릴지를 한눈에 비교해보고 옷을 구입할 때 더 잘 어울리는 옷을 구매 할 수 있게 한다.
 
## 앱 설계

- 상품 데이터

11번가 Open API를 활용하였다. Key를 클라이언트에 배포하는 것이 보안상 문제가 있으므로 key가 저장된 별도의 서버에 Rest API를 구축, 클라이언트를 대신해서 11번가 Open API로부터 데이터를 받아온다.

각 상품의 상의 하의 정보를 구할수가 없었다. 대신 상의에 속하는 카테고리, 하의에 속하는 카테고리를 11번가 홈페이지에서 수작업으로 구할 수 있었고 해당 정보를 자체 서버에서 제공하게끔 하였다.

그러나, **상품에 대한 카테고리정보는 구할 수 없고, 대신 카테고리에 대한 상품정보는 구할 수 있다**

따라서, 사용자가 카테고리를 검색, 조회하여 선택하고 나서 해당 카테고리의 상품들을 볼 수 있게 해야했다.

- 서버 구축

nodejs express 모듈을 사용한 Rest API를 구축. OpenAPI Key를 가지고 클라이언트 대신 11번가에게 상품 데이터를 요청 하고 받는 역할을 한다.
다양한 상품들이 있는 11번가 Open API에서 옷에 관련된 카테고리만을 정제하는 역할도 한다.

- 클라이언트앱

CRA를 기반으로한 리엑트앱으로 구성.

- 페이지 설계

  - 메인 페이지
  
  상의, 하의와 관련된 카테고리 목록을 보여줌. 

  - 리스트 페이지
  
  메인에서 선택한 카테고리에 속한 상품목록을 보여줌.
  
  - 상세 페이지
  
  리스트 페이지에서 선택한 상품의 상세 정보를 보여줌
  
  - 옷장 페이지
  
  상세 페이지에서 담기한 옷들을 저장하고 해당 옷들의 상하의 매치를 수행한다.

## 구현

### 프론트 앱

#### 메인 페이지

- 배너 클릭시 해당페이지로 이동한다.

- 카테고리 검색란에서  사용자가 타 쇼핑몰 상품을 검색하고 조회할 수 있다.
 
- 세분화된 카테고리를 선택 할 수 있다.

- 카테고리를 통해  List Page로 들어갈 수 있다.

#### 리스트 페이지

- react-slick 라이브러리를 통해 배너에 변화하는 텍스트 값을 출력한다.

- 현재 위치하고 있는 카테고리 상품의 이름, 이미지, 가격 정보 등을 출력한다.

- 인기순, 낮은 가격순, 누적 판매순 등으로 조회할 수 있다.
 
- 버튼을 클릭하면 다음 페이지의 상품을 추가하여 페이지를 렌더링한다.

- 상품을 선택하면 Detail Page로 이동한다.

#### 상세 페이지

- 앞서 List Page에서 선택한 상품의 상세 정보를 띄워준다.

- 제품의 이미지, 평점, 가격정보를 제공하며 담기 버튼을 누르면  해당 상품 데이터는 별도의 메모리로 옷장에 저장된다.

- 상품 옵션을 선택하면 모달 창을 출력한다.

- 구매를 원하면 즉시 구매 링크로 이동한다.

- API에 statisfaction을 Rating에 공간만큼 변환해 fill-up 한다. 

#### 옷장 페이지

- 앞서 Detail Page에서 사용자가 임시저장 해둔 상의 이미지링크와 하의 이미지링크를 통해 이미지들을 불러온다.

- 파일에서 상의와 하의를 선택하여 사용자가 원하는 크기로 자를 수 있다.

- 출력된 상의와 하의로 상-하의 매칭 기능을 제공하여 사용자는 코디를 한눈에 볼 수 있다.

- 사용법 버튼을 클릭하면 링크를 통해 사용법을 볼 수 있다.
