const target = document.getElementById("target"); // 감시대상

// callback은 가시성의 변화가 생겼을때 호출
const callback = (entries) => {
    entries.forEach(entry => {
        // entry.isIntersecting : 해당 요소가 화면에 보이고 있는지 여부 알려준다 (true,false)
        // entry.intersectionRatio => 비율
        if(entry.isIntersecting) {
            console.log("요소가 들어왔습니다.")
        } else {
            console.log("요소가 나갔습니다.")
        }
    });
}
const option = {
    root:null , // 뷰포트를 기준으로 감지
    rootMargin: '0px', // 여유 공간     없이 정확히 교차 될 때 감지
    threshold:[0.0 ,0.5 , 1.0] // 0% 50% 100% 가시성 기준으로 감시
}

const observer = new IntersectionObserver(callback, option)

observer.observe(target);