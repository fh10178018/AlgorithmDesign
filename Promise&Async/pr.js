// 遇到await、then和catch先存入队列,并退出相应函数
async function testSometing () {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync () {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test () {
  console.log("test start...");
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
  console.log('拉拉')
}

test();
console.log(testSometing())
var promise = new Promise((resolve) => { console.log("promise start.."); resolve("promise"); });//3
promise.then((val) => console.log(val));

console.log("test end...")