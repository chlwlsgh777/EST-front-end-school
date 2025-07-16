    const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyMjYwMDkifQ.qYuq4X3XyGeLF9PSs69Ik4TfLMnLXshyV9JQZaXJXdscxASez8VTVWu3gqheC95e3DY5iAGCSaH-VdA9FUvgLe8mlIyI7Hledwd5rvgUa9fApfzLZl8ACdmK6nVfKM6ReMSBx8I_dFSevHN-P5dczXPOX__sxR7l75LSpTot3amr-NRRk5lbJn6M8Ol2fWdtZU0XbU76uO0EAJO2TneKSCuSLYboXvuDDCO_KYfDYcFexsJgph5E6UHqF6f348IkFknYgBWLjH412wW3gz47HChzt24kXaqpU_yV9y7nvsMJYk1HoUA79asBoGGpWb1uVLbqPudep-tVstQdHjMlMg";
    const BASE_URL = "https://developer-lostark.game.onstove.com";

    const $form = document.getElementById("search-form");
    const $input = document.getElementById("character-name");
    const $profileResult = document.getElementById("profile-result");
    const $gemsResult = document.getElementById("gems-result");

    $form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = $input.value.trim();
      if (!name) return;

      // 두 영역 초기화
      $profileResult.innerHTML = "🔍 캐릭터 정보를 불러오는 중...";
      $gemsResult.innerHTML = "";

      try {
        // 1. 프로필 정보 요청
        const profileRes = await fetch(`${BASE_URL}/armories/characters/${encodeURIComponent(name)}/profiles`, {
          headers: { Authorization: `Bearer ${API_KEY}` }
        });
        if (!profileRes.ok) throw new Error("캐릭터 정보 요청 실패");
        const profile = await profileRes.json();

        $profileResult.innerHTML = `
          <h2>${profile.CharacterName} (${profile.CharacterClassName})</h2>
          <img src="${profile.CharacterImage}" alt="캐릭터 이미지" width="100" />
          <p>아이템 레벨: ${profile.ItemAvgLevel}</p>
          <p>원정대 레벨: ${profile.ExpeditionLevel}</p>
          <p>서버: ${profile.ServerName}</p>
          <p>길드: ${profile.GuildName || "없음"}</p>
        `;

        // 2. 보석 정보 요청
        const gemRes = await fetch(`${BASE_URL}/armories/characters/${encodeURIComponent(name)}/gems`, {
  headers: { Authorization: `Bearer ${API_KEY}` }
});
if (!gemRes.ok) throw new Error("보석 정보 요청 실패");
const gemData = await gemRes.json();

if (!gemData.Gems || gemData.Gems.length === 0) {
  $gemsResult.innerHTML = "<p>💎 등록된 보석이 없습니다.</p>";
} else {
  $gemsResult.innerHTML = "<h3>💎 보석 정보</h3>";
  gemData.Gems.forEach(gem => {
    const gemDiv = document.createElement("div");
    gemDiv.classList.add("gem");
    gemDiv.innerHTML = `
      <img src="${gem.Icon}" alt="${gem.Name}" width="40" />
      <strong>${gem.Name} (Lv.${gem.Level})</strong>
      <p>${gem.Effect}</p>
    `;
    $gemsResult.appendChild(gemDiv);
  });
}

      } catch (err) {
        console.error(err);
        $profileResult.innerHTML = `<p style="color:red;">❌ 에러: ${err.message}</p>`;
      }
    });