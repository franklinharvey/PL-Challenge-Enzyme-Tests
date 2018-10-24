## Testing, testing, 1 2 3...

Since I decided to write a React component as part of my challenge for Pen Link, and I was asked to write some unit tests, I decided that this would be a good time to try out [Enzyme](https://airbnb.io/enzyme/) (and run it with [Jest](https://jestjs.io/en/)).

---

Test Files: [src/components/test/PL_react_component.test.js](https://github.com/franklinharvey/PL-Challenge-Enzyme-Tests/blob/master/src/components/tests/PL_react_component.test.js)

---

I wrote my unit tests to test three things:
* renders list-items
* renders an empty list if there are no data props
* renders correctly formatted text in item

#### Renders list-items
The key to this is the following two expectations
```
expect(wrapper.find('.list-group')).toBeDefined();
expect(wrapper.find('.list-group-item')).toHaveLength(data.length);
```
When we pass
```
const data = [
    {
    "type": "case1",
    "title": "Title 1",
    "id": "UUIDa9ff-c17f-4179-8c09-a0c64f7f57df"
    },
    {
    "type": "case2",
    "title": "Title 2",
    "id": "UUID6481-867a-47ce-ae95-019b25d5c174"
    },
    {
    "type": "case3",
    "title": "Title 3",
    "id": "UUID07b4-0c25-4288-8445-caecb0aa19f7"
    }
];
```
as `<PL_List data={data} />` we expect to find 3 children of the component, 1 for each entry in the data.

#### Renders an Empty List if there are no Data Props
In this example we pass an empty to our component like this `<PL_List data=""/>` which we expect to render an empty list with no children:
```
expect(wrapper.find('.list-group')).toBeDefined();
expect(wrapper.find('.list-group').isEmpty()).toEqual(true);
```

#### Renders Correctly Formatted Text in Item
Part of the challenge was "Make sure that each new word of `type` attribute is capitalized and all underscores or dashes are converted to spaces in the HTML (without changing the underlying data)". I check those like this:
```
expect(wrapper.find('.list-group-item').contains('Case Dash Check'));
expect(wrapper.find('.list-group-item').contains('Title 1'));
expect(wrapper.find('.list-group-item').contains('Case 3'));
```
while passing this data:
```
const data = [
    {
    "type": "case-dash-check",
    "title": "Title 1",
    "id": "UUIDa9ff-c17f-4179-8c09-a0c64f7f57df"
    },
    {
    "type": "case2",
    "title": "Title 2",
    "id": "UUID6481-867a-47ce-ae95-019b25d5c174"
    },
    {
    "type": "case_3",
    "title": "Title 3",
    "id": "UUID07b4-0c25-4288-8445-caecb0aa19f7"
    }
];
```
as `<PL_List data={data} />`. In this example we expect `case-dash-check` to render as `Case Dash Check`.
