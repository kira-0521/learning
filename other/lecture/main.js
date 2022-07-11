/*
  ? コンストラクター関数（オブジェクトを生成するための関数）
  */
function Person(name, age) {
  this.name = name
  this.age = age
}

const bob = new Person('Bob', 18)
console.log(bob)

/*
  ? prototype(メモリの効率化・各インスタンスから同じ参照先)
  */
Person.prototype.hello = function () {
  console.log('hello ' + this.name)
}
bob.hello()

/* 
  ? new(戻り値によってインスタンス化されるオブジェクトは異なる)
   */
function F(a, b) {
  this.a = a
  this.b = b
  return {}
}
const instance = new F(1, 2)
console.log(instance)

/* 
  ? クラス
 */
class Person2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hello() {
    console.log('hello ' + this.name)
  }
}

const john = new Person2('john', 19)
console.log('john', john)

/* 
 ? クラス継承 
 */
class Japanese extends Person2 {
  constructor(name, age, gender) {
    super(name, age)
    this.gender = gender
  }

  bye() {
    console.log('bye japanese')
  }
}
const japan = new Japanese('tanaka', 30, 'male')
console.log(japan)

// プリミティブについて
const str = 'string'
console.log(str.length)
console.log(String(str).length)
