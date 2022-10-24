**Задание 1.**

<p>Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.</p>
<hr />

**Задание 2.**

<p>Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.</p>
<hr />

**Задание 3.**

<p>Написать функцию, которая создает пустой объект, но без прототипа.</p>
<hr />

**Задание 4.**

<p>Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.</p>
<p>Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).</p>
<p>Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.</p>
<br />
```html
<strong>План:</strong>
<ol>
  <li>Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.</li>
  <li>Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.</li>
  <li>У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.</li>
  <li>Создайте экземпляры каждого прибора.</li>
  <li>Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)</li>
</ol>
<br />
<strong>Общие требования:</strong>
<ol>
  <li>Имена функций, свойств и методов должны быть информативными</li>
  <li>Соблюдайте best practices:
    <ul>
      <li>использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;</li>
      <li>информативные имена (а не a, b);</li>
      <li>четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);</li>
      <li>использование синтаксиса es6 (кроме функции-конструкторов) и так далее.</li>
    </ul>
  </li>
</ol>
```
<hr />

**Задание 5**

<p>Переписать консольное приложение из предыдущего юнита на классы.</p>
**Общие требования:**
<ul>
  <li>Имена классов, свойств и методов должны быть информативными;</li>
  <li>Соблюдать best practices;</li>
  <li>Использовать синтаксис ES6</li>
</ul>

<hr />