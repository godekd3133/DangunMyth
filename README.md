# Setting Guide
## 1. 환경변수 설정
(참고 : https://github.com/AvinZarlez/processing-vscode?tab=readme-ov-file#how-do-i-do-that)
### Window
1. Window + R 후 sysdm.cpl 실행하여 '고급 시스템 설정' 열람
2. '시스템 속성' 에서 고급 탭 클릭
3. '고급' 섹션에서 환경 변수 버튼 클릭
4. 'Path' 변수를 프로세싱 설치 위치로 설정
   
### Mac
1. Processing 실행 후 ```Tools``` -> ```Install "processing-java"``` 
2. processing-java를 모든 유저로 설치
   
### Linux
Set your PATH to where your processing application is located.

Example: export PATH=$PATH:/opt/processing/processing-2.0b4

You also need to create an alias for processing-java in /bin/ instead of /usr/bin/.

Example: sudo ln -s /opt/processing/processing-java /bin/processing-java

## 2. vscode 권장 확장 설치

## 3. pde 파일의 상단의 재생 버튼 실행
![alt text](public\assets\image.png)

## 환경변수 설정이 싫거나, 설정하여도 안되는 경우
### .vscode/settings.json 수정
```json
{
    ...
    "processing.processingPath": "D:\\01.Work\\05.ssu\\processing-4.3-windows-x64\\processing-4.3\\processing-java" /// <- 해당 부분을 processing 설치 위치로 변경
}

```