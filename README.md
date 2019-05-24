<h1 align="center">nxgrid</h1>

<p align="center">
    Super simple React Responsive CSS Grid
</p>

<p align="center">
<a href="https://travis-ci.com/CrispyBacon1999/nxgrid"><img src="https://travis-ci.com/CrispyBacon1999/nxgrid.svg?branch=master" height="18"></a>
<a href="https://circleci.com/gh/CrispyBacon1999/nxgrid/tree/master"><img src="https://circleci.com/gh/CrispyBacon1999/nxgrid/tree/master.svg?style=svg" height="18"></a>
<a href="https://npmjs.com/package/nxgrid"><img src="https://img.shields.io/node/v/nxgrid.svg" alt="min package version" height="18"></a>
<br>
<a href="https://npmjs.com/package/nxgrid"><img src="https://badge.fury.io/js/nxgrid.svg" alt="npm version" height="18"></a>
<a href="https://npmjs.com/package/nxgrid"><img src="https://img.shields.io/bundlephobia/min/nxgrid.svg" alt="min code size" height="18"></a>
<a href="https://npmjs.com/package/nxgrid"><img src="https://img.shields.io/bundlephobia/minzip/nxgrid.svg" alt="minzip code size" height="18"></a>

</p>

## Usage

Using nxgrid is super simple. Use `npm install --save nxgrid` to get it installed into your project.
```javascript
import { Grid, Cell } from 'nxgrid'

...

// Your component render method

return (
	<Grid cols={6} gap={20}>
      <Cell>Cell #1</Cell>
      <Cell>Cell #2</Cell>
      <Cell start={2} span={4}>Cell #3</Cell>
      <Cell start={2} span={2}>Cell #4</Cell>
      <Cell span={2}>Cell #5</Cell>
    </Grid>
)
```

It's easy to position elements exactly where you want them to be. Just throw a `start` property on the `<Cell />` and you'll be all set.
View the tsdocs at <a href="http://joshbacon.com/nxgrid">joshbacon.com/nxgrid</a>.

No styles are needed, as all the styling is done in the `style` property, keeping everything efficient and small. 

## Contributing

To start contributing, check out the [Contributing](https://github.com/CrispyBacon1999/nxgrid/wiki/Contributing) page on the wiki!

## License

All the files in the nxgrid project are subject to GNU GPLv3. Read the [LICENSE](https://github.com/CrispyBacon1999/nxgrid/blob/master/LICENSE) file at the root of the project for more info.