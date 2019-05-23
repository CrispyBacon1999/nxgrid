<h1 align="center">nxgrid</h1>

<p align="center">
    Super simple React Responsive CSS Grid
</p>

<p align="center">
<a href="https://travis-ci.com/CrispyBacon1999/nxgrid"><img src="https://travis-ci.com/CrispyBacon1999/nxgrid.svg?branch=master" /></a>
<a href="https://npmjs.com/package/nxgrid"><img src="https://badge.fury.io/js/nxgrid.svg" alt="npm version" height="18"></a>
</p>

<h3>Usage</h3>

Using nxgrid is super simple. Use `npm install --save nxgrid` to get it installed into your project.
```javascript
import { Grid, Cell } from 'nxgrid'

...

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