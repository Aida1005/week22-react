# week22-react
### Вопросы 💎

1. Что такое props и можно ли использовать props в функциональных компонентах?
В ReactJS props- это тип объекта, в котором хранится значение атрибутов тега. Слово «props» подразумевает «свойства», а его рабочая функциональность очень похожа на атрибуты HTML. В основном, эти компоненты props являются компонентами только для чтения
2. Нужно ли выделять в отдельный компонент статью в блоге? Да. Можно, 
3. Можно ли использовать React без JSX?
React не требует использования JSX, но большинство людей считают его полезным в качестве визуального пособия при работе с пользовательскими интерфейсами внутри кода JavaScript. Это также позволяет React показывать более полезные сообщения об ошибках и предупреждениях.
4. Чем отличается JSX от HTML?
 В JSX все свойства DOM и атрибуты (включая обработчики событий) должны быть записаны в camelCase.
Обычный HTML не очень безопасен. Любой текст, который должен оставаться текстом, необходимо экранировать перед выводом.
JSX работает по-другому. Всё, что выводится обычным способом, безопасно по умолчанию и экранируется автоматически.

6. Для чего нам нужны свойства (props) компонентов? 
props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту. 
6. В примере с `CardList` чем можно было бы заменить `<React.Fragment>`?
   
7. Можно ли сказать, что классовые и функциональные компоненты равнозначны по функциональности? 
Да, классовые и функциональные компоненты равнозначны.
8. Можно ли полностью описать приложение, используя только функциональные компоненты?
   Да. Можно
9. Какой командой мы делаем экспорт компонента для возможности его использования в других местах приложения?
    export default  
10. Изучите структуру компонент в проекте https://github.com/alisa-tsvetkova/EthereumUI и напишите, какой именно компонент является самым верхним, а какой самым «глубоким»?
    Router - самым глубокий компонент.
11. Какой командой можно сгенерировать разметку/компоненты на основе заранее заданного массива элементов? Приведите пример.

    С помощью командой map() для каждого элемента.

    const users = [
  {
    name: "Jesse",
    age: 21,
    height: "1.90cm"
  },
  {
    name: "Tom",
    age: 25,
    height: "1.67cm"
  },
  {
    name: "Anna",
    age: 34,
    height: "1.59cm"
  }
]

const userNames = users.map(({ name }) => name)

File jsx

const userNames = ['Jesse', 'Tom', 'Anna']
function App() {

  const renderListOfUserNames = (names) => {
    return names.map(name => <li>{name}</li>)
  }

  return (
    <div>
      <ul>
        {renderListOfUserNames(userNames)}
      </ul>
    </div>
  );
}

export default App;
// ['Jesse', 'Tom', 'Anna']
