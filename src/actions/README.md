# Actions

Actions are just things that happen *(seriously, that's it)*.
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions 폴더

action type 및 action creator를 모아 둔 폴더이다. 서비스에 따라 action type 및 creator가 한개의 폴더에 모여있을수도 있고, 도메인별로 구분해 놓을수도 있다. 서비스 단위가 커질수록 도메인별로 구분하는 것이 더욱 유리할 것으로 보인다.

### Actions are (usually) made up of two parts

**type** - action type
```
ADD_USER_BUTTON_CLICKED
```

**payload** - *(optional)* action type 이외에 필요한 데이터를 JSON 형태로 정의
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

## Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created.

**Action creator**
```
export default function () {
    return {
        first: "Samantha",
        last: "Williams",
        age: 52,
        description: "Samantha is a good woman with a heart of gold."
    }
}
```

**Action**
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action
(can also just ignore it).
