import { connect } from "react-redux"

Reducer(state, action) //принимает старый state и action, возвращает новый state, если action.type подходит к нему, или старый state. Как правило, в него входит initialState (начальное состояние стейта, которое изменяется в последствии). По правилам иммутабельности (immutable - немутируемый, неизменяемый) мы не можем изменять входные данные в чистых функциях, поэтому в редюсерах копируются банные, которые поступают на вход и возвращаются уже измененные копии или неизмененные старые данные.
action //объект, у которого по крайней мере есть свойство .type
store //хранилище, объект с методами и некоторым состоянием(state)
subscribe(observer)  //реализация концепции проектирования "наблюдатель".
dispatch(action.type) //принимает в себя тип action'а, который, в зависимости от типа будет вызывать ту, или иную функцию(метод).

//=============CONNECT==============
let actionCreater = () => {
    ({ type: some_action })
}

let mapStateToProps = (state) => {
    return {
        Object: {
            stateObject: state.stateObject
        }
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        someCallbackFunction = () => {
            dispatch(actionCreater())
        }
    }
}

connect(mapStateToProps, mapDispatchToProps)(presentComponent) //connect создает контейнерную компоненту, внутри неё рендерит презентационную компоненту, внутрь презентационной компоненты в качестве пропсов передаются свойства двух функций  mapStateToProps и mapDispatchToProps. Connect автоматически передает state в mapStateToProps и dispatch в mapDispatchToProps. Если надо  прокинуть пропсы в компоненту из state, достаточно просто создать еще одно свойство у mapStataeToProps




//=============КОПИРОВАНИЕ==============

let a = {
    name: 'Объект', //скопируется при shallow
    type: 'учебный', //скопируется при shallow
    count: 1, //не скопируется при shallow
    includes: [1, 2, 3], //не скопируется при shallow
    parts: { //не скопируется при shallow
        part1: { //не скопируется при shallow
            part2: 2, //не скопируется при shallow
            part3: 3 //не скопируется при shallow
        }
    }
}

let b = { ...a }  //shallow copy (поверхностное копирование) - копируются все примитивы. Все вложенные объекты не копируютсяя, на них выставляются ссылки. Если изменить сам объект, он изменится в a и в b.
let b = { ...a }
b.name = { ...a.name } //deep copy (глубокое копирование) - копируются вложенности, которы емы укзываем. 
let b = { //короткая запись deep copy
    ...a,
    includes: [a.includes],
    parts: {
        ...a.parts,
        part1: {
            ...a.parts.part1,
        }

    }

}
console.log(b);


//=============ЖИЗНЕННЫЕ ЦИКЛЫ==============
componentDidMount() // метод классовой компоненты, который сообщает ей, что jsx разметка отрендерилась. 


//=============REDUX-FORM==============
let action = stopSubmit("Login", { email: 'email is wrong' }) //два параметра (имя формы) ({поле, или _error для всей формы})
dispatch(action)