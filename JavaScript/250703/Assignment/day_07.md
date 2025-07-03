1. 클래스 제어

   element.classList : HTML요소의 클래스 속성을 토큰 단위로 다룰 수 있게 해주는 DOMTokenList 객체

   - classList.add()
     - `element.classList.add("className")`
     - 여러 개도 가능: `.add("class1","class2")`
     - 이미 있는 클래스라면 중복 추가하지않고 무시함
   - classList.remove()
     - `element.classList.remove("className")`
     - 클래스가 없어도 에러 없이 무시
   - classList.contain()
     - 해당 class가 있는지 확인
     - `box.classList.contain("className")` --> Boolean (true/false)반환
   - classList.toggle()
     - `element.classList.toggle("className")`
       - 클래스가 있으면 제거, 없으면 추가
       - 반환값: 클래스 추가 시 `true` 제거 시 `false`
     - `element.classList.toggle("className",forceBoolean)`
       - `forceBoolean`이 true면 무조건 추가, false면 무조건 제거

---

**추가내용**

- classList.replace()
  - `replace(oldClass, newClass)`
  - 기존 클래스를 새 클래스로 바꿈
- classList.item()
  - 클래스 리스트에서 특정 인덱스에 있는 클래스 이름 반환 (없으면 null)

```js
const el = document.querySelector(".my-element");
// 클래스가 ["box","active","highlight"]가정
console.log(el.classList.item(0)); //"box"
console.log(el.classList.item(1)); //"active"
console.log(el.classList.item(5)); //"null"
```

2. 요소의 크기/위치

   - getBoundingClientRect()
     - 요소의 크기와 뷰포트 내 위치 정보를 포함한 객체 반환
     - 반환 객체 : `{top, right, bottom, left, width, height}`
   - offsetLeft / offsetTop
     - 부모 요소 기준 요소의 왼쪽, 위쪽 위치(px)반환

3. 속성 제어
   - getAttribute(attrName)
     - 특정 속성 값 읽어옴
   - setAttribute(attrName,value)
     - 특정 속성 값 설정
4. dataset 으로 접근하기
   `element.dataset`은 `data-*`속성들을 읽고 쓸 수 있게 해줌

   ```html
   <div id="box" data-user-id="123" data-info="hello"></div>
   ```

   ```js
   const box = document.getElementById("box");
   console.log(box.dataset.userId); // "123"
   box.dataset.info = "world"; // data-info 속성 값 변경
   ```
