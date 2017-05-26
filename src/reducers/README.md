# Reducers

- 단일 store, 다수의 reducer
Reducers take in actions and **update part of application state.**
- 모든 reducer들은 변경된 data가 store에 저장되기 전에 단일 객체로 합쳐진다.
- 전체 Application의 상태 트리는 reducer에서 반환되는 모든 상태들의 집합니다. 

```
const allReducers = combineReducers({
    users
});
```