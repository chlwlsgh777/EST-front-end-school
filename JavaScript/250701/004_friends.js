let friends = ["Irangi", "Shoopa"];

//유효성 검사
function isValidName(name) {
  const index = friends.indexOf(name);
  if (index === -1) {
    console.log(`${name}은 친구가 아닙니다.`);
    return -1;
  }
  return index;
}

function addFriend(name) {
  // 친구 이름이 중복되지않도록 처리, isValidName() 이용하기 -> index번호가 반환되면 친구추가 불가 '${name}은 이미 친구입니다.'
  if (isValidName(name) !== -1) {
    console.log(`${name}은 이미 친구입니다.`);
    return;
  }
  friends.push(name);
  return console.log(`${name}님이 추가되었습니다.`);
}

function deleteFriend(name) {
  const index = isValidName(name);
  if (index === -1) return;
  friends.splice(index, 1);
  console.log(`${name}님이 삭제되었습니다.`);
}

function updateFriend(name, newName) {
  //예외처리 , 친구이름이 ""로 수정되었습니다.
  const index = isValidName(name);
  if (index === -1) return;
  friends[index] = newName;
  console.log(`${name}님이 ${newName}로 수정되었습니다.`);
}

addFriend("Ghost");
// deleteFriend("Shoopa");
// console.log(friends);
