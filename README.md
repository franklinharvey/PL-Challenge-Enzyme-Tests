## Testing, testing, 1 2 3...

Since I decided to write a React component as part of my challenge for Pen Link, and I was asked to write some unit tests, I decided that this would be a good time to try out [Enzyme](https://airbnb.io/enzyme/) (and run it with [Jest](https://jestjs.io/en/)).

I wrote my unit tests to test three things:
* renders list-items
* renders an empty list if there are no data props
* renders correctly formatted text in item

### Renders list-items
```
    expect(wrapper.find('.list-group')).toBeDefined();
    expect(wrapper.find('.list-group-item')).toHaveLength(data.length);
```
