const target = document.getElementById("target"); //감시대상

const config = {
    attributes: true,
    childList: true,
    subtree: true,
    CharacterData: true,
}
// => 필요한 옵션만 켜서 불필요한 감지 비용을 줄여야 함

// element.classList.add("active");
// ul <- li
// textContent

// mutationList: 감지된 변화들을 담은 배열
const callback = (mutationList) => {
    for (const mutation of mutationList) {
        console.log("변화 타입: ",mutation.type);
    }
};

const observer = new MutationObserver(callback);
observer.observe(target,config)

// ==========변화==================
for (let i=1; i<=10;i++) {
    const li = document.createElement("li");
    li.textContent=`Item${i}`;
    target.appendChild(li);
}

target.classList.add("target")


// observer.disconnect();

/*
- setInterval 같은 무조건 반복 방식보다 훨씬 효율적!
- 변화가 있을 때만 실행되므로 CPU 낭비를 줄입니다.
- 실시간 UI 반응에 매우 적합
- 설정값(config)을 잘 조절하면 원하는 변화만 감지할 수있다.

*/
