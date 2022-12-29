// Find / Findindex

// 1 findUserByUsername
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  findUserByUsername(users, 'taco') // undefined
  function findUserByUsername(arr, str){
    return arr.find(function(obj){
        for (let key in obj){
            return obj[key] === str
        };
    });
  };

  // 2 removeUser
  const users1 = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  removeUser(users1, 'akagen') // {username: 'akagen'}
  removeUser(users1, 'akagen') // undefined
function removeUser(arr, str){
    let idx = arr.findIndex(function(obj){
        for (let key in obj){
            return obj[key] === str
        }
    });
    if (idx === -1){
        return undefined
    }
    return arr.splice(idx, 1)
  };
      


